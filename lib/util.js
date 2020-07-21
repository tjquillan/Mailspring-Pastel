"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeColor = void 0;
/**
 * Normalize color to a hex value
 *
 * This was based off a function found here:
 * https://stackoverflow.com/a/47355187/8348804
 *
 * @param color
 */
function normalizeColor(color) {
    if (/^#[0-9A-F]{6}$/i.test(color) || !color) {
        return color;
    }
    let ctx = document.createElement('canvas').getContext("2d");
    if (!ctx) {
        return "";
    }
    ctx.fillStyle = color;
    return ctx.fillStyle;
}
exports.normalizeColor = normalizeColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixjQUFjLENBQUMsS0FBYTtJQUN4QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUN6QyxPQUFPLEtBQUssQ0FBQTtLQUNmO0lBRUQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFM0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNOLE9BQU8sRUFBRSxDQUFBO0tBQ1o7SUFFRCxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUNyQixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUE7QUFDeEIsQ0FBQztBQWJELHdDQWFDIn0=