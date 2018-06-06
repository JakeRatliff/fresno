import React from 'react';
import classes from './Cards.css';

const cards = (props) => {

	let attachedClasses = [classes.flipper];
	if(props.flipped){
		attachedClasses = [classes.flipper , classes.flipped];
	}

	let cards = props.cards.map(card => {
		return (

					<div className={classes.Card}>
						<div className={classes.flipContainer} /*onClick={this.classList.toggle('hover')}*/>
						  <div className={attachedClasses.join(' ')}>
						    <div className={classes.front}>
						      <p>{card.q}</p>
						    </div>
						    <div className={classes.back}>
						      <p>{card.a}</p>
						    </div>
						  </div>
						</div>
					</div>
		)
	});

	cards.push(<div className={classes.addNewCard}><div onClick={props.addNew}><strong>+</strong></div></div>)

	return(
		<div className={classes.Cards}>{cards}</div>


	)
	
 
}

export default cards;