import React from 'react';
import classes from './Controls.css';

const controls = (props) =>{
	return(
		<div className={classes.Controls}>
			<button onClick={props.backClicked}><i className={classes.left}></i></button>
			<span></span>
			<button onClick={props.nextClicked}><i className={classes.right}></i></button>
		</div>
	)
}

export default controls;
