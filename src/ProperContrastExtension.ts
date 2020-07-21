// @ts-ignore Mailspring does not export types yet
import { MessageViewExtension } from 'mailspring-exports';
import { getTextColor } from './dynamic-contrast';
import { normalizeColor } from './util';

interface Message {
  body: string;
}

function getBackgroundgColor(element: HTMLElement): string {
  let styleBackgroundColor: string = normalizeColor(element.style.backgroundColor)

  return styleBackgroundColor ? styleBackgroundColor : normalizeColor(element.getAttribute('bgColor') || "")
}

function setColors(items: HTMLCollectionOf<HTMLElement>, parentHasBackground: boolean): void {
  Array.from(items).forEach((item: HTMLElement) => {
    let backgroundColor = getBackgroundgColor(item)

    // We check for background color here because the assumption of using Pastel's
    // background color when a background is not present is invalid.
    if (item.nodeType == 1 && item.style.color && (backgroundColor || !parentHasBackground)) {
      item.style.color = getTextColor(backgroundColor)
    }
    if (item.hasChildNodes()) {
      setColors(item.children as HTMLCollectionOf<HTMLElement>,
        // Depending on if current element had a background its children need to act accordingly
        backgroundColor ? true : parentHasBackground)
    }
  })
}

export default class ProperContrastExtension extends MessageViewExtension {
  static formatMessageBody = ({ message }: { message: Message }): void => {
    var body: HTMLElement = new DOMParser().parseFromString(message.body, "text/html").body;
    body.style.color = getTextColor(getBackgroundgColor(body))
    setColors(body.children as HTMLCollectionOf<HTMLElement>, body.style.backgroundColor != "")
    message.body = body.outerHTML;
  }
}