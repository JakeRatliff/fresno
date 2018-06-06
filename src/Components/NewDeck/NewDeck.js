import React, {Component} from 'react';
import classes from './NewDeck.css';
import NewCard from './NewCard/NewCard';
import Aux from '../../hoc/Aux';
import Cards from './Cards/Cards'


class NewDeck extends Component{

state = {
	flipped:false,
	newCards: [], //[{q:'dog',a:'asdf'},{q:'godogd',a:'asdf'},{q:'cart',a:'asdf'},{q:'asddd',a:'asdf'}],
	newCard: true
}

newCardFlippedHandler = () => {
	console.log("Clicked the card!!");
	const flipped = !this.state.flipped;
	this.setState({flipped:flipped});
	console.log(this.state)
}


addCardHandler = (x,y) => {
	console.log('add card was clicked...');
	const cards = this.state.newCards;
	cards.push({q:x,a:y});
	this.setState({newCards: cards, newCard: false, flipped:false});
	console.log(this.state.newCards);
}

showNewCard = () => {
	this.setState({newCard:true})
}

	render(){
		return(
			<Aux>
				<div className={classes.NewDeckContainer}>
					<div className={classes.Cards}>
						{this.state.newCards.length > 0 ? <Cards cards={this.state.newCards} addNew={this.showNewCard}/> : null}
		
						
					</div>
					{this.state.newCard ? 
						<NewCard flip={this.newCardFlippedHandler} flipped={this.state.flipped} addCard={this.addCardHandler}/>
						: null}
				</div>
			</Aux>
		)
	}


}



export default NewDeck;