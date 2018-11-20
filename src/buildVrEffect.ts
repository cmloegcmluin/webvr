import { VREffect } from 'three-full'
import { BuildVrEffectParameters, VrbVREffect } from './types'

const buildVrEffect = ({ renderer }: BuildVrEffectParameters): VrbVREffect => {
    const vrEffect = new VREffect(renderer) as VrbVREffect

    return vrEffect
}

export {
    buildVrEffect,
}
