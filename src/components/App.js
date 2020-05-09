import React, { Component } from 'react';

import { Searchbox } from './searchBox/SearchBox';
import { StartupName } from './startupName/StartupName';

import './App.css';

const name = require('@rstacruz/startup-name-generator')

class App extends Component {
	constructor () {
		super();

		this.state = {
			startupNames: [],
			searchField: ''
		}
	}

	searchStartupNames = (searchField) => {
		// console.log (name(searchField));
		this.setState({ startupNames: name(searchField) });
	}

	render () {
		return (
			<div className="App">
				<h1>Startup Name Generator</h1>
				<Searchbox 
					placeholder="Search"
					searchStartupNames={this.searchStartupNames} />
				<div className="startup-names-container">
					{
						this.state.startupNames.map(startupName => {
							console.log('Startup name: ', startupName);
							return <StartupName startupName={startupName} key={startupName} />
						})
					}
				</div>
			</div>
		);
	}
}

export default App;
