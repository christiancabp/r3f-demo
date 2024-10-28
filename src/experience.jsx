import {
	ContactShadows,
	Environment,
	Float,
	OrbitControls,
	PresentationControls,
	Text,
} from '@react-three/drei';

import { Model } from './model';

export const Experience = () => {
	return (
		<>
			{/* Orbit controls */}
			{/* <OrbitControls makeDefault /> */}

			{/* Box Mesh */}
			{/* 
			<mesh>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh> 
            */}

			{/* Background color */}
			<color attach='background' args={['#191313']} />

			{/* Set Environment */}
			<Environment preset='city' />

			{/* Presentation controls */}
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-1, 0.75]}
				config={{ mass: 4, tension: 300 }}
				snap={{ mass: 2, tension: 300 }}>
				{/* Floating animation */}
				<Float rotationIntensity={0.4}>
					{/* Screen light */}
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={65}
						color={'#fff6da'}
						rotation={[0.1, Math.PI, 0]}
						position={[0, 0.55, -1.15]}
					/>

					{/* Model */}
					<Model />

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
				</Float>
			</PresentationControls>

			<ContactShadows position-y={-1.4} opacity={0.7} scale={5} blur={2.4} />
		</>
	);
};
