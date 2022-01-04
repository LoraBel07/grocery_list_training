import { Component } from "react";
import bag from './bag.png'

export class GroceryList extends Component {
	state = {
		userInput: '',
		groceryList: []

	}	

	onChangeEvent(e) {
		this.setState({userInput: e});
	}

	addItem(input) {
		if(input === '') {
			alert("Ups, add an item please!")
		} else {
		let listArray = this.state.groceryList;
		listArray.push(input);
		this.setState({groceryList: listArray, userInput: ''})
		}
	}
	deleteItem() {
		let listArray = this.state.groceryList;
		listArray = [];
		this.setState({groceryList: listArray});
	}

	crossedWord(event) {
		const li = event.target;
		li.classList.toggle('crossed');
	}

	onFormSubmit(e) {
		e.preventDefault()
	} 

	render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
				<div className="container">
					<input type="text"
					placeholder="What do you have to buy?"
					onChange={ (e) => { this.onChangeEvent(e.target.value) } }
					value={ this.state.userInput } />
				</div>
				<div className="container">
					<button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
				</div>
				<ul>
					{this.state.groceryList.map((item, index) => (
						<li onClick={this.crossedWord} key={index}>
							<img src={bag} alt="bag" width="20px" />
							{item}</li>
					))}					
				</ul>
				<div className="container">
					<button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
				</div>
				</form>
			</div>
		)
	}

}