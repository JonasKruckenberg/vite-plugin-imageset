import { Directive } from "../types";
import { setMetadata } from "../lib/metadata";
import { getBackground } from './background'

export interface RotateOptions {
    rotate: string
}

export const rotate: Directive<RotateOptions> = (config, ctx) => {
    const rotate = config.rotate && parseInt(config.rotate)

    if (!rotate) return


    return function rotateTransform(image) {
        setMetadata(image, 'rotate', rotate)
 
        return image.rotate(rotate, {
            background: getBackground(config, image)
        })
    }
}