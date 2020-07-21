/**
 * The majority of this file was taken from: https://wunnle.com/dynamic-text-color-based-on-background
 */


function getRGB(c: string): number {
    return parseInt(c, 16) || parseInt(c)
}

function getsRGB(c: string): number {
    return getRGB(c) / 255 <= 0.03928
        ? getRGB(c) / 255 / 12.92
        : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4)
}

function getLuminance(hexColor: string): number {
    return (
        0.2126 * getsRGB(hexColor.substr(1, 2)) +
        0.7152 * getsRGB(hexColor.substr(3, 2)) +
        0.0722 * getsRGB(hexColor.substr(-2))
    )
}

function getContrast(f: string, b: string): number {
    const L1 = getLuminance(f)
    const L2 = getLuminance(b)
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

/**
 * 
 * @param bgColor 
 */
export function getTextColor(bgColor: string): string {
    // If there is no background we assume we are using Pastel's default background
    if (!bgColor) {
        return "#B3BDCA"
    }
    
    const whiteContrast = getContrast(bgColor, '#ffffff')
    const blackContrast = getContrast(bgColor, '#000000')

    return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}