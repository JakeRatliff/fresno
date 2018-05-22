import React from 'react';
import classes from './Controls.css';

const controls = (props) =>{
	return(
		<div className={classes.Controls}>
			<button onClick={props.backClicked}>Back</button>
			<button onClick={props.nextClicked}>Next</button>
		</div>
	)
}

export default controls;
