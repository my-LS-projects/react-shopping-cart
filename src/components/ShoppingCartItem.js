import React, { useContext } from 'react';

// contexts 
import { ProductContext } from "../context/ProductContext"


const Item = props => {
	console.log("SCI PROPS: ", props)
	const { removeItem } = useContext(ProductContext)
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
