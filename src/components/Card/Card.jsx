import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.css';

const cx = classNames.bind(styles);

export const Card = (cardsArr) => {
	return (
		<div
			className={cx('marioCard')}
		
		>
			<div className="inner">
				<div className="front">
					<img src={`images/${cardsArr.id}.png`} alt="Memory Game Card"></img>
				</div>
			</div>
		</div>
	);
};
