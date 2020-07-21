"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore Mailspring does not export types yet
const mailspring_exports_1 = require("mailspring-exports");
const dynamic_contrast_1 = require("./dynamic-contrast");
const util_1 = require("./util");
function getBackgroundgColor(element) {
    let styleBackgroundColor = util_1.normalizeColor(element.style.backgroundColor);
    return styleBackgroundColor ? styleBackgroundColor : util_1.normalizeColor(element.getAttribute('bgColor') || "");
}
function setColors(items, parentHasBackground) {
    Array.from(items).forEach((item) => {
        let backgroundColor = getBackgroundgColor(item);
        // We check for background color here because the assumption of using Pastel's
        // background color when a background is not present is invalid.
        if (item.nodeType == 1 && item.style.color && (backgroundColor || !parentHasBackground)) {
            item.style.color = dynamic_contrast_1.getTextColor(backgroundColor);
        }
        if (item.hasChildNodes()) {
            setColors(item.children, 
            // Depending on if current element had a background its children need to act accordingly
            backgroundColor ? true : parentHasBackground);
        }
    });
}
class ProperContrastExtension extends mailspring_exports_1.MessageViewExtension {
}
exports.default = ProperContrastExtension;
ProperContrastExtension.formatMessageBody = ({ message }) => {
    var body = new DOMParser().parseFromString(message.body, "text/html").body;
    body.style.color = dynamic_contrast_1.getTextColor(getBackgroundgColor(body));
    setColors(body.children, body.style.backgroundColor != "");
    message.body = body.outerHTML;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVyQ29udHJhc3RFeHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUHJvcGVyQ29udHJhc3RFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0Q7QUFDbEQsMkRBQTBEO0FBQzFELHlEQUFrRDtBQUNsRCxpQ0FBd0M7QUFNeEMsU0FBUyxtQkFBbUIsQ0FBQyxPQUFvQjtJQUMvQyxJQUFJLG9CQUFvQixHQUFXLHFCQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUVoRixPQUFPLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMscUJBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzVHLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFvQyxFQUFFLG1CQUE0QjtJQUNuRixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWlCLEVBQUUsRUFBRTtRQUM5QyxJQUFJLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUvQyw4RUFBOEU7UUFDOUUsZ0VBQWdFO1FBQ2hFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLCtCQUFZLENBQUMsZUFBZSxDQUFDLENBQUE7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQXlDO1lBQ3RELHdGQUF3RjtZQUN4RixlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtTQUNoRDtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELE1BQXFCLHVCQUF3QixTQUFRLHlDQUFvQjs7QUFBekUsMENBT0M7QUFOUSx5Q0FBaUIsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUF3QixFQUFRLEVBQUU7SUFDckUsSUFBSSxJQUFJLEdBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLCtCQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMxRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQXlDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLENBQUE7SUFDM0YsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2hDLENBQUMsQ0FBQSJ9