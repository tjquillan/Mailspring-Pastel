/**
 * Normalize color to a hex value
 * 
 * This was based off a function found here:
 * https://stackoverflow.com/a/47355187/8348804
 * 
 * @param color 
 */
export function normalizeColor(color: string) {
    if (/^#[0-9A-F]{6}$/i.test(color) || !color) {
        return color
    }

    let ctx = document.createElement('canvas').getContext("2d")
    
    if (!ctx) {
        return ""
    }

    ctx.fillStyle = color
    return ctx.fillStyle
}