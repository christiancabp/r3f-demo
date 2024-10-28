import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import { Experience } from './experience';
import './style.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<>
		<Canvas
			className='r3f'
			camera={{
				fov: 45,
				near: 0.1,
				far: 2000,
				position: [-3.5, 1.5, 7],
			}}>
			<Experience />
		</Canvas>
	</>
);
