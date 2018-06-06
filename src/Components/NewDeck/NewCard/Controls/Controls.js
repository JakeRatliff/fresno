import React from 'react';
import classes from './Controls.css';

const controls = (props) => {
	return(
		<div className={classes.Controls}>Controls go here..
			<button onClick={props.clicked}>FLIP</button>
		</div>
	)
}

export default controls;