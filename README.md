## Starting point.

- I will be using a `react` vite app generated with vite's command line.
  `npm create vite@latest`
- I have installed some dependancies for three.js libraries check package json
- We will be using `react` and `jsx` which is just javascript and html.

1. Create 3D scene.

   In three.js everything 3D happens inside a canvas html element where we create a scene. `@react-three/fiber` has a Canvas component with everything a scene needs.

```
    <Canvas
		className='r3f'
		camera={{
		fov: 45,
		near: 0.1,
		far: 2000,
		position: [-3.5, 1.5, 7],
		}}>
        {/* 3D Scene */}
	</Canvas>
```

2. Show box mesh.

   Let's add something to the screen.

```
	{/* Box Mesh */}
	<mesh>
		<boxGeometry />
		<meshNormalMaterial />
	</mesh>

    {/* Orbit controls */}
	<OrbitControls makeDefault />
```

3.  Get a 3D model.

    - I have downloaded a model fount in pmnd market and I placed it in the public folder.

    - After adding model to public folder we can run this command to turn 3D model into jsx.  
       `npx gltfjsx public/laptop-model.gltf --transform`

    - Now we can add the model to the scene and update its the position using `position-y={-1.2}`.

4.  Add environment.

    Model is dark and the environment seems bad lets add some background and some environment preset to light up the scene.

```
    {/* Background color */}
    <color attach='background' args={['#191313']} />

    {/* Set Environment */}
    <Environment preset='city' />
```

5.  Make model float and add presentation controls.

`Float`

We can animate the model very easy using the `<Float>` helper. We will wrap the model in this tag.

```
    {/* Floating animation */}
    <Float rotationIntensity={0.4}>
        {/* Model */}
    </Float>
```

`Presentation controls`
We can limit the allowed range of drag and drop and also animate it. Wrapping the model and the Float tag with presentation controls.

```
    <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 4, tension: 300 }}
        snap={{ mass: 2, tension: 300 }}>

    </PresentationControls>
```

6. Embed iframe.

Lets add an actual website to the laptop screen

```
    {/* Html inside R3F */}
	<Html
		transform
		wrapperClass='html-frame'
		distanceFactor={1.17}
		position={[0, 1.56, -1.4]}
		rotation-x={-0.256}>
		    <iframe src='https://christian-bermeo.netlify.app/' />
	</Html>
```

7. Text in 3D.

Finally we can add some text to appear foaling in the scene as well.

```
    {/* Text */}
	<Text
		font='./bangers-v20-latin-regular.woff'
		fontSize={1}
		position={[2, 0.75, 0.75]}
		rotation-y={-1.25}
		maxWidth={2}
		textAlign='center'>
	    	CHRISTIAN BERMEO
	</Text>
```

## Links

Vite - https://vite.dev/guide/
Models - https://market.pmnd.rs/
Three.js - https://threejs.org/
React-three-fiber - https://github.com/pmndrs/react-three-fiber
macbook model - https://market.pmnd.rs/model/macbook
(gltf --> jsx) converter cli - https://github.com/pmndrs/gltfjsx
(gltf --> jsx) converter webpage - https://gltf.pmnd.rs/
