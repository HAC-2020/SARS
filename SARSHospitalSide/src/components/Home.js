import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='text-center home_container'>
			<button className='btn btn-primary mr-4'>
				<Link to='/register-patient'>Register Patient</Link>
			</button>
			<button className='btn btn-primary'>
				<Link to='/hospital'>Hospital</Link>
			</button>
		</div>
	);
};

export default Home;
