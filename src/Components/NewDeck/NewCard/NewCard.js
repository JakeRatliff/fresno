/*
import React from 'react';
import classes from './NewCard.css';

const newCard = (props) => {

	return(
		<div className={classes.NewCard}>
			<textarea/>
		</div>
	)
}

export default newCard;
*/




import React from 'react';
import classes from './NewCard.css';
import Controls from './Controls/Controls';
import Aux from '../../../hoc/Aux';

const newCard = (props) => {

	let attachedClasses = [classes.flipper];

	if(props.flipped){
		console.log('props.flipped is true')
		attachedClasses = [classes.flipper, classes.flipped];
	}

	let cardFrontRef = React.createRef();
	let cardBackRef= React.createRef();

	return(
		<Aux>
			<div className={classes.NewCardContainer}>
				<div className={classes.NewCard} >

					
					  <div className={attachedClasses.join(' ')}>
					    <div className={classes.front}>
					      <div ref={cardFrontRef} contentEditable="true" suppressContentEditableWarning="true" className={classes.textarea}>This is the front of the card. Start typing here!</div>
					    </div>
					    <div className={classes.back}>
					      <div ref={cardBackRef} contentEditable="true" suppressContentEditableWarning="true" className={classes.textarea}>This is the back of the card. Type the answer here.</div>
					    </div>
					  </div>
					
				</div>
				<div className={classes.controls}>
					<div onClick={props.flip}>
						<p>FLIP</p>
					</div>
					<div onClick={() => props.addCard(cardFrontRef.current.innerText, cardBackRef.current.innerText)}>
						<p>Add to Deck</p>
					</div>
					<div>
						<p>TEST</p>
					</div>
				</div>
			</div>
		</Aux>

	)
}

export default newCard;


