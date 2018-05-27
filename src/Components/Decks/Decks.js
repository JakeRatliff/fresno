import React from 'react';
import classes from './Decks.css';
import Deck from './Deck/Deck';

const decks = (props) => {
	const decks = props.decks.map(set => {
		return <Deck name={set.name} numCards={set.cards.length} key={set.id} clicked={() => props.deckSelected(set.id)}/>
	});
	return(
		<div className={classes.Decks}>
			<div>My Flashcard Decks</div>
			{decks}
			<div className={classes.Create} onClick={props.clickedNew}> <strong>+</strong> New Deck</div>
		</div>
	)
}

export default decks;