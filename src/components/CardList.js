import React from 'react';
import Card from './Card';

/* CardList access robots from App as prop */
const CardList = (prop) => { 
	const {robots} = prop;
	return (
	<div>
		{robots.map((user, i) => {
		return (
			<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}/>
		)
	})}
	</div>
	);
}

export default CardList;