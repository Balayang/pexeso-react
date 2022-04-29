import React from 'react';
import { Card } from './Card/Card';

import '../styles/normalize.css';
import '../styles/global.css';

export const App = () => {
	const cardsArr = [];
	// CREATE ARRAY OF CARD OJECTS
	for (let i = 1; i < 9; i++) {
		cardsArr.push({
			id: `mario${i}`,
		//	img: `images/${i}.png`,
			isFliped: false,
			isDisabled: false,
			isPaired: false,
		});
	}

	console.log(cardsArr.id);

	return (
		<div className="container">
			<img
				className="testImg"
				src={`images/${cardsArr.id}.png`}
				alt="Memory Game Card"
			></img>

			{cardsArr.map((card, index) => (
				<Card />
			))}
		</div>
	);
};

//`images/${cardsArr.id}.png`
