// @ts-ignore Mailspring does not export types yet
import { ExtensionRegistry } from 'mailspring-exports';

import ProperContrastExtension from './ProperContrastExtension';

/*
All packages must export a basic object that has at least the following 3
methods:
1. `activate` - Actions to take once the package gets turned on.
Pre-enabled packages get activated on Mailspring bootup. They can also be
activated manually by a user.
2. `deactivate` - Actions to take when a package gets turned off. This can
happen when a user manually disables a package.
*/
export function activate() {
  ExtensionRegistry.MessageView.register(ProperContrastExtension);
}

export function deactivate() {
  ExtensionRegistry.MessageView.unregister(ProperContrastExtension);
}