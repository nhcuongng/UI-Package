
import React from 'react';
import { Button } from './package/Button';

class App extends React.PureComponent {
	render() {
		return (
			<div className='container'>
				<Button color='success' size='sm'>Success</Button> {' '}
				<Button color='warning'>Warning</Button> {' '}
				<Button color='danger' size='lg'>Danger</Button>
			</div>
		);
	}
}

export default App;