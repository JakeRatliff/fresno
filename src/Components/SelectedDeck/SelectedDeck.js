import React from 'react';
import classes from './SelectedDeck.css'
import Aux from '../../hoc/Aux'
import Controls from './Controls/Controls'


const selectedDeck = (props) => {

	let num = props.cardNum;

	let progress;
	if(props.deck){
		progress = ((num)/(props.deck.cards.length - 1))*100 + '%'
	}

	let attachedClasses = [classes.flipper];
	if(props.flipped){
		attachedClasses = [classes.flipper, classes.flipped];
	}

	//TODO! if card flipped, and traversing to prev/next card (props.traversing)
	//   then don't unflip card, but instead bring up next card front. currently, new card back is visible for a second.
	//   use new animation (slide front in/fade back out and fade front in)


	return(
		<Aux>
			<div className={classes.SelectedDeckContainer}>
				<Aux>
					<div className={classes.SelectedDeck} onClick={props.cardClicked}>
						<div className={classes.flipContainer} /*onClick={this.classList.toggle('hover')}*/>
						  <div className={attachedClasses.join(' ')}>
						    <div className={classes.front}>
						      <p>{props.deck.cards[num].q}</p>
						      <div className={classes.progressBar} style={{width: progress}}></div>
						    </div>
						    <div className={classes.back}>
						      <p>{props.deck.cards[num].a}</p>
						      <div className={classes.progressBar} style={{width: progress}}></div>
						    </div>
						  </div>
						</div>
					</div>
				</Aux>
			</div>
			<Controls backClicked={props.prevCard} nextClicked={props.nextCard}/>
		</Aux>
	)
}

export default selectedDeck;




