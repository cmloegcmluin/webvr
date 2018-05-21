# vrb

**vrb** *(ˈvɚb , ˌvi ɑr ˈbi)*, v.: to verb VR; to virtually really be.

Simple three.js-based web VR module. Supports positional audio and VR controllers.

Opens in an orthographic view of the scene. Click a toggle to enter in and out of a perspective VR mode.

## usage

```
import vrb from 'vrb'
import {Scene} from 'three-full'

const scene = new Scene()
const toggle = document.createElement('div')
const viewer = document.createElement('div')

const vrb = vrb({ scene, toggle, viewer })

vrb.requestAnimationFrame()
```

## options

### onAnimate

Hook that will be called each render frame. Use to update your scene.

Example usage:

```
const onAnimate = () => {
    clouds.drift()
    song.nextNote()
}

vrb({ scene, toggle, viewer, onAnimate })
```

### onControllerConnected

Hook that will be called each time a controller connects, with the controller as the argument. Use e.g. to add a mesh to the controller and attach event listeners.

Example usage:

```
const onControllerConnected = controller => {
    controller.add(new BoxGeometry(0.5))
    controller.addEventListener('thumbpad press began', handleThumbpadPress)
}

vrb({ scene, toggle, viewer, onControllerConnected })
```

### camerasConfig

Override default camera configuration with this object.

```
{
    ORTHOGRAPHIC_FRUSTUM_TOP,
    ORTHOGRAPHIC_FRUSTUM_BOTTOM,
    ORTHOGRAPHIC_FRUSTUM_LEFT,
    ORTHOGRAPHIC_FRUSTUM_RIGHT,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    PERSPECTIVE_ASPECT_RATIO,
    PERSPECTIVE_FOV,
    PERSPECTIVE_FRUSTUM_FAR,
    PERSPECTIVE_FRUSTUM_NEAR,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PERSPECTIVE_POSITION,
    INITIAL_PERSPECTIVE_TARGET,
}
```

## methods & properties

### #requestAnimationFrame

Schedule the first frame to be rendered using three.js `VREffect#requestAnimationFrame`. Animation will continue automatically.

### .player

This is a meshless three.js `Object3D` which has the perspective camera and any controllers added to it. That way you can translate the player around independently of the three.js `VRControls` to go beyond room scale VR.

### #getIsPresenting

Wrapper for three.js `VREffect#isPresenting`.

### #createSpatialOscillator

Wrapper for three.js `AudioListener` context `#createOscillator`.

### #createPositionalSound

Provides a configured three.js `PositionalAudio`.

### #setBackgroundColor

Wrapper for three.js `WebGLRenderer#setClearColor`.

### #changeOnAnimate

If it is necessary to change your `onAnimate` funnction after building your `vrb`, use this. Pass it a function that will get called with the current `onAnimate` and return what you want it to be afterwards.

`vrb.changeOnAnimate(oldAnimate => createModifiedAnimate(oldAnimate))`

### #changeOnControllerConnected

If it is necessary to change your `onControllerConnected` funnction after building your `vrb`, use this. Pass it a function that will get called with the current `onControllerConnected` and return what you want it to be afterwards.

`vrb.onControllerConnected(oldOnControllerConnected => createModifiedOnControllerConnected(oldOnControllerConnected))`