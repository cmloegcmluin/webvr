import { AttachResizeWindowParameters } from './types'

const attachResizeWindow = ({ cameras, vrEffect, renderer, camerasConfig }: AttachResizeWindowParameters): void => {
    const resizeWindow = () => {
        cameras.orthographicCamera.left = -camerasConfig.ORTHOGRAPHIC_FRUSTUM_LEFT as number
        cameras.orthographicCamera.right = camerasConfig.ORTHOGRAPHIC_FRUSTUM_RIGHT as number

        if (vrEffect.getVRDisplay()) vrEffect.setSize(window.innerWidth, window.innerHeight)

        renderer.domElement.style.width = `${window.innerWidth}px`
        renderer.domElement.style.height = `${window.innerHeight}px`

        Object.values(cameras).forEach(camera => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
        })
    }

    window.addEventListener('resize', resizeWindow)
}

export {
    attachResizeWindow,
}
