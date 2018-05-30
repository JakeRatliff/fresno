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

	

	return(
		<Aux>
			<div className={classes.NewCard} >

				<div className={classes.flipContainer} /*onClick={this.classList.toggle('hover')}*/>
				  <div className={attachedClasses.join(' ')}>
				    <div className={classes.front}>
				      <textarea>This is the front textarea.</textarea>
				    </div>
				    <div className={classes.back}>
				      <textarea>This is the BACK textarea.</textarea>
				    </div>
				  </div>
				</div>
			</div>
			<button onClick={props.clicked}>Flip...</button>
		</Aux>

	)
}

export default newCard;


