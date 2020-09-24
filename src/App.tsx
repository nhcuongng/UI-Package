import React from 'react';
import { Button } from './package/Button';

class App extends React.PureComponent {
	render() {
		return (
			<div className="container">
				<div className="button-colors">
					<h3>Button Colors</h3>
					<Button color="primary">Primary</Button>
					{' '}
					<Button color="secondary">Secondary</Button>
					{' '}
					<Button color="success">Success</Button>
					{' '}
					<Button color="info">Info</Button>
					{' '}
					<Button color="warning">Warning</Button>
					{' '}
					<Button color="danger">Danger</Button>
				</div>

				<div className="button-sizes">
					<h3>Button Size</h3>
					<Button color="success" size="sm">Small</Button>
					{' '}
					<Button color="warning">Medium</Button>
					{' '}
					<Button color="danger" size="lg">Large</Button>
				</div>

				<div className="button-outline">
					<h3>Button Outline</h3>
					<Button outline color="primary">Primary</Button>
					{' '}
					<Button outline color="secondary">Secondary</Button>
					{' '}
					<Button outline color="success">Success</Button>
					{' '}
					<Button outline color="info">Info</Button>
					{' '}
					<Button outline color="warning">Warning</Button>
					{' '}
					<Button outline color="danger">Danger</Button>
				</div>

				<div className="button-state">
					<h3>Button State</h3>
					<Button color="success" active>Active</Button>
					{' '}
					<Button color="warning" disabled>Disabled</Button>
				</div>

				<div className="button-block">
					<h3>Button Block</h3>
					<Button color="primary" block>Click Me</Button>
					<br />
					<Button color="danger" block>Buy Now</Button>
				</div>

			</div>
		);
	}
}

export default App;
