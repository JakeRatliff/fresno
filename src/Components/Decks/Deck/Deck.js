import React from 'react';
import classes from './Deck.css'

const deck = (props) => (

	<div className={classes.Deck} onClick={props.clicked}>
		<p>{props.name}: {props.numCards} cards</p>	
	</div>
)

export default deck;