import React, {Component} from 'react';
import classes from './NewDeck.css';
import NewCard from './NewCard/NewCard';
import Aux from '../../hoc/Aux';


class NewDeck extends Component{

state = {
	flipped:false,
	newCards: null
}

newCardFlippedHandler = () => {
	console.log("Clicked the card!!");
	const flipped = !this.state.flipped;
	this.setState({flipped:flipped});
	console.log(this.state)
}

	render(){
		return(
			<Aux>
				<div className={classes.NewDeckContainer}>Here is where new deck creation engine goes.
					<NewCard clicked={this.newCardFlippedHandler} flipped={this.state.flipped}/>
				</div>
			</Aux>
		)
	}


}



export default NewDeck;