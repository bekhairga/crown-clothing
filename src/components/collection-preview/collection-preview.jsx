import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
function CollectionPreview({ title, items }) {
	return (
		<div className='collection-preview'>
			<h1>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...collectionItemProps }) => (
						<CollectionItem key={id} {...collectionItemProps} />
					))}
			</div>
		</div>
	);
}

export default CollectionPreview;
