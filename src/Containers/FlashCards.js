import React, {Component} from 'react';
import Aux from '../hoc/Aux'
import Decks from '../Components/Decks/Decks'
import SelectedDeck from '../Components/SelectedDeck/SelectedDeck';

class FlashCards extends Component{

	state = {

		mySets:[
			{id: 1234, name: 'math', cards:[{q:"2 + 2", a:"4"},{q:"5 x 7", a:"35"},{q:"111 x 40", a:"4440"}]},
			{id: 1235, name: 'math2', cards:[{q:"5 + 2", a:"7"},{q:"3 x 7", a:"21"},{q:"14 x 4", a:"56"}]},
			{id: 1236, name: 'math3', cards:[{q:"8 + 2", a:"10"},{q:"3 x 7", a:"21"},{q:"14 x 4", a:"56"}]}
			],
		selectedSet: null,
		cardNum: 0,
		flipped: false
	}

	deckSelectedHandler = (setId) => {
		const sets = this.state.mySets;
		const selectedSet = sets.filter(set => set.id === setId);
		this.setState({selectedSet:selectedSet[0], flipped:false, cardNum:0})
	}

	cardClickedHandler = () => {
		const updatedFlipState = !this.state.flipped;
		this.setState({flipped: updatedFlipState});
	}

	nextCardHandler = () => {
		const numCards = this.state.selectedSet.cards.length - 1;
		const cardNum = this.state.cardNum;
		const updatedCardNum = cardNum + 1;
		if (cardNum < numCards){
			this.setState({cardNum:updatedCardNum, flipped:false})
		}else{
			this.setState({cardNum:0, flipped:false})
		}
		
	}

	prevCardHandler = () => {
		const numCards = this.state.selectedSet.cards.length - 1;
		const cardNum = this.state.cardNum;
		const updatedCardNum = cardNum - 1;
		if(cardNum !== 0){
			this.setState({cardNum:updatedCardNum, flipped:false})
		}else{
			this.setState({cardNum:numCards, flipped:false})
		}
		
	}

	render(){
		return(
			//JSX...
			<Aux>
				<Decks decks={this.state.mySets} deckSelected={this.deckSelectedHandler}/>
				<SelectedDeck 
					deck={this.state.selectedSet} 
					cardClicked={this.cardClickedHandler}
					cardNum={this.state.cardNum}
					flipped={this.state.flipped}
					nextCard={this.nextCardHandler}
					prevCard={this.prevCardHandler}
				/>
			</Aux>
		)
	}
}

export default FlashCards;