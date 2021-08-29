import React, { Component } from 'react';
import SHOP_DATA from '../../shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';
export default class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				<h1>Shop page</h1>
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}
