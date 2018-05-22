import React from 'react';
import classes from './SelectedDeck.css'
import Aux from '../../hoc/Aux'
import Controls from './Controls/Controls'

const selectedDeck = (props) => {
	let cardText = "Select a deck to get started."
	let num = props.cardNum;
	if(props.deck && !props.flipped){
		cardText = props.deck.cards[num].q;
	}
	if(props.deck && props.flipped){
		cardText = props.deck.cards[num].a;
	}

	return(
		<Aux>
			<div className={classes.SelectedDeckContainer}>
				<div className={classes.SelectedDeck} onClick={props.cardClicked}>
					<p>{cardText}</p>
				</div>
				<Controls backClicked={props.prevCard} nextClicked={props.nextCard}/>
			</div>
		</Aux>
	)
}

export default selectedDeck;