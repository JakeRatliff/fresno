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
		attachedClasses = [classes.flipper , classes.flipped];
	}

	console.log(attachedClasses);

	let backClasses = [classes.back];
	if(props.traversing){
		backClasses = [classes.back, classes.hide]
	}


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
						    <div className={backClasses.join(' ')}>
						      <p>{props.deck.cards[num].a}</p>
						      <div className={classes.progressBar} style={{width: progress}}></div>
						    </div>
						  </div>
						</div>
					</div>
				</Aux>
				<Controls backClicked={props.prevCard} nextClicked={props.nextCard}/>
			</div>
			
		</Aux>
	)
}

export default selectedDeck;




