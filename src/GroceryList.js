import { Component } from "react";
import bag from './bag.png'
import Swal from 'sweetalert2'

export class GroceryList extends Component {
	state = {
		userInput: '',
		groceryList: [],

	}	

	onChangeEvent(e) {
		this.setState({userInput: e});
	}

	addItem(input) {
		if(input === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Write your item please.',				
			})
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

	crossedWord(e) {
		const liItem = e.target;
		liItem.classList.toggle('crossed');
	}
	delOneItem(e) {
        let ToBuyArray = this.state.groceryList;
        ToBuyArray.splice(e.index, 1);
        this.setState({groceryList: ToBuyArray});
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
						<li onDoubleClick={(e) => this.delOneItem({index})} onClick={this.crossedWord} key={index}>
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