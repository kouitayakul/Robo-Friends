import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Colors from '../components/Colors';
import './App.css';
import '../index.css';



class App  extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((users) => {this.setState({robots: users})});
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	onColorChange = (e) => {
		const color1 = document.getElementById('color1');
		const color2 = document.getElementById('color2');
		const body = document.getElementById('gradient');
		body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	}

	render() {
		const filerRobots = this.state.robots.filter((robot) => {
			return (
			robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
			|| 
			robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
			)
		})
		if(this.state.robots.length === 0) {
			return (
				<div className="tc">
					<h1 className="f1">Loading...</h1>
				</div>
			)		
		}
		else {
			return (
				<div className="tc">
					<h1 className="f1 pa3 shadow-5 animated flash">ROBOFRIENDS</h1>
					<div className="tc">
						<h3 className="f6 code">WITH</h3>
						<h3 className="f6 code">Background Generator</h3>
					</div>
					<Colors colorChange = {this.onColorChange}/>
					<SearchBox searchChange={this.onSearchChange}/>  {/*needs to communicate with CardList */}
					<Scroll>
						<CardList robots={filerRobots}/> {/* needs to communicate with SearchBox */}
				{/* now CardList can access robots from the parent which has a state robots */}
					</Scroll>
				</div>
			)
		}
		
	}
}

export default App;