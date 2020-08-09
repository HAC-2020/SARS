import React from 'react';
import './App.css';
import Records from './components/Records';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RegisterPatient from './components/RegisterPatient';

function App() {
	return (
		<div className='container mt-5'>
			<div className='card shadow-lg'>
				<div className='card-header text-center'>Symptom Checker</div>
				<div id='step-container' className='card-block overflow-auto'>
					<Router>
						<Switch>
							<Route path='/hospital' exact component={Records} />
							<Route
								path='/register-patient'
								exact
								component={RegisterPatient}
							/>
							<Route path='/' exact component={Home} />
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	);
}

export default App;
