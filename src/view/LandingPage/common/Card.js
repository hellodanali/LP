import React, { Component } from 'react';

const Card = ({ className, title, detail, icon, link }) => {
	return (
		<div className={`card-container ${className}`}>
			<img src={icon} />
			<h2>{title}</h2>
			<p>{detail}</p>
			<a href={link || ''} target="_blank">
				See how >>
			</a>
		</div>
	);
};

export default Card;
