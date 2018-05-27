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

	let progress;
	if(props.deck){
		progress = ((num)/(props.deck.cards.length - 1))*100 + '%'
	}


	return(
		<Aux>
			<div className={classes.SelectedDeckContainer}>
				<Aux>
					<div className={classes.SelectedDeck} onClick={props.cardClicked}>
						<p className={classes.fadeIn}>{cardText}</p>
						<div className={classes.progressBar} style={{width: progress}}>
						</div>
					</div>
					<Controls backClicked={props.prevCard} nextClicked={props.nextCard}/>
				</Aux>
			</div>
		</Aux>
	)
}

export default selectedDeck;




