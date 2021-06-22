import React from 'react';
import './menu-item.scss';
export default function MenuItem({ title, imageUrl, size }) {
	return (
		<div className={`menu-item ${size}`}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className='background-image'
			></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
}
