import React, {Component} from 'react';
import Aux from '../hoc/Aux'
import Decks from '../Components/Decks/Decks'
import SelectedDeck from '../Components/SelectedDeck/SelectedDeck';
import NewDeck from '../Components/NewDeck/NewDeck';
import Backdrop from '../Components/UI/Backdrop/Backdrop';

//TODO: progress bar on selected deck and decks. progress is saved, and visible progess bars in sidebar decks
//TODO: delete deck, rename deck, edit cards in deck. copy deck.

//TODO: shuffle & restart deck (progress resets). so, make a new array that include every unique number, random order, length of numCards.
    //TODO: unshuffle to return to original order

//TODO: remove current card from deck (once ya know the card, ya want to focus on other cards) these could be saved
    //in 'deleted cards' array in deck object. in GUI, select deleted cards, and then select 'add back to deck'. save it with its
    //former deck index, so it can be added back where it was.

//TODO: add flip animation
//TODO: change text size given number of characters
//TODO: allow images to be added to cards, with text also
//TODO: add categories (based on NLP API, if any strong match matches my own 20 topics) and tagging (any strong non-category topics from NLP API)

//TODO: deck creation: grid
    //TODO: drag and drop to reorder



class FlashCards extends Component{

	state = {
		//dummy data for now, this will come from the DB
		mySets:[
			{id: 1234, name: 'Math', cards:[{q:"2 + 2", a:"4"},{q:"5 x 7", a:"35"},{q:"111 x 40", a:"4440"}]},
			{id: 1235, name: 'Chemistry', cards:[{q:"The nucleus of an atom consists of", a:"protons and neutrons"},
				{q:"The number of moles of solute present in 1 kg of a solvent is called its", a:"molality"},
				{q:"The metal used to recover copper from a solution of copper sulphate is", a:"Fe"},
				{q:"The metallurgical process in which a metal is obtained in a fused state is called", a:"smelting"}]},

			{id: 1236, name: 'Math 3', cards:[{q:"8 + 2", a:"10"},{q:"3 x 7", a:"21"},{q:"14 x 4", a:"56"}]},
			{id: 1237, name: 'US Presidents', cards:[{q:"First president of U.S.", a:"George Washington"},
				{q:"President who served two non-consecutive terms?", a:"Grover Cleveland"},
				{q:"President who purchased Alaska", a:"Andrew Johnson"},
				{q:"President who introduced Great Society legislation", a:"LBJ"}]}
			],
		selectedSet: null,
		cardNum: 0,
		flipped: false,
		createDeck: false

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

	newDeckHandler = () => {
		console.log('top of nD handler...')
		this.setState({createDeck:true});
	}

	backdropCloseHandler = () => {
		console.log("top of backdropCloseHandler...")
		this.setState({createDeck:false})
	}


	render(){
		return(
			//JSX...
			<Aux>
				<Decks decks={this.state.mySets} deckSelected={this.deckSelectedHandler} clickedNew={this.newDeckHandler}/>
				{this.state.selectedSet ? 
					<SelectedDeck 
						deck={this.state.selectedSet} 
						cardClicked={this.cardClickedHandler}
						cardNum={this.state.cardNum}
						flipped={this.state.flipped}
						nextCard={this.nextCardHandler}
						prevCard={this.prevCardHandler}
					/>
				: null}

				{this.state.createDeck ?
					<Aux>
						<Backdrop clicked={this.backdropCloseHandler}/>
						<NewDeck/>
					</Aux>
					//</Backdrop>
				:null}
			</Aux>
		)
	}
}

export default FlashCards;