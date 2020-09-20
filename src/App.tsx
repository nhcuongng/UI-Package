
import React from 'react';
import { Button } from './package/Button';

class App extends React.PureComponent {
	render() {
		const containerStyle = {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		}
		return (
			<div style={containerStyle}>-
				<Button primary>Primary</Button>
				<Button secondary >Warning</Button>
				<Button success >Success</Button>
				<Button warning >Warning</Button>
				<Button info >Info</Button>
				<Button danger >Danger</Button>
			</div>
		);
	}
}

export default App;