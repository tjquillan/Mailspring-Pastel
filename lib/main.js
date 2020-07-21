"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// @ts-ignore Mailspring does not export types yet
const mailspring_exports_1 = require("mailspring-exports");
const ProperContrastExtension_1 = __importDefault(require("./ProperContrastExtension"));
/*
All packages must export a basic object that has at least the following 3
methods:
1. `activate` - Actions to take once the package gets turned on.
Pre-enabled packages get activated on Mailspring bootup. They can also be
activated manually by a user.
2. `deactivate` - Actions to take when a package gets turned off. This can
happen when a user manually disables a package.
*/
function activate() {
    mailspring_exports_1.ExtensionRegistry.MessageView.register(ProperContrastExtension_1.default);
}
exports.activate = activate;
function deactivate() {
    mailspring_exports_1.ExtensionRegistry.MessageView.unregister(ProperContrastExtension_1.default);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFrRDtBQUNsRCwyREFBdUQ7QUFFdkQsd0ZBQWdFO0FBRWhFOzs7Ozs7OztFQVFFO0FBQ0YsU0FBZ0IsUUFBUTtJQUN0QixzQ0FBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGlDQUF1QixDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsVUFBVTtJQUN4QixzQ0FBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlDQUF1QixDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUZELGdDQUVDIn0=