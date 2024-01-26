"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore Mailspring does not export types yet
const mailspring_exports_1 = require("mailspring-exports");
const dynamic_contrast_1 = require("./dynamic-contrast");
const util_1 = require("./util");
function getBackgroundgColor(element) {
    let styleBackgroundColor = (0, util_1.normalizeColor)(element.style.backgroundColor);
    return styleBackgroundColor ? styleBackgroundColor : (0, util_1.normalizeColor)(element.getAttribute('bgColor') || "");
}
function setColors(items, parentHasBackground) {
    Array.from(items).forEach((item) => {
        let backgroundColor = getBackgroundgColor(item);
        // We check for background color here because the assumption of using Pastel's
        // background color when a background is not present is invalid.
        if (item.nodeType == 1 && item.style.color && (backgroundColor || !parentHasBackground)) {
            item.style.color = (0, dynamic_contrast_1.getTextColor)(backgroundColor);
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
ProperContrastExtension.formatMessageBody = ({ message }) => {
    var body = new DOMParser().parseFromString(message.body, "text/html").body;
    body.style.color = (0, dynamic_contrast_1.getTextColor)(getBackgroundgColor(body));
    setColors(body.children, body.style.backgroundColor != "");
    message.body = body.outerHTML;
};
exports.default = ProperContrastExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVyQ29udHJhc3RFeHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUHJvcGVyQ29udHJhc3RFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0Q7QUFDbEQsMkRBQTBEO0FBQzFELHlEQUFrRDtBQUNsRCxpQ0FBd0M7QUFNeEMsU0FBUyxtQkFBbUIsQ0FBQyxPQUFvQjtJQUMvQyxJQUFJLG9CQUFvQixHQUFXLElBQUEscUJBQWMsRUFBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBRWhGLE9BQU8sb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFBLHFCQUFjLEVBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUM1RyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBb0MsRUFBRSxtQkFBNEI7SUFDbkYsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFpQixFQUFFLEVBQUU7UUFDOUMsSUFBSSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFL0MsOEVBQThFO1FBQzlFLGdFQUFnRTtRQUNoRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUEsK0JBQVksRUFBQyxlQUFlLENBQUMsQ0FBQTtRQUNsRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQXlDO1lBQ3RELHdGQUF3RjtZQUN4RixlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsTUFBcUIsdUJBQXdCLFNBQVEseUNBQW9COztBQUNoRSx5Q0FBaUIsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUF3QixFQUFRLEVBQUU7SUFDckUsSUFBSSxJQUFJLEdBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUEsK0JBQVksRUFBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzFELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBeUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMzRixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDaEMsQ0FBQyxDQUFBO2tCQU5rQix1QkFBdUIifQ==