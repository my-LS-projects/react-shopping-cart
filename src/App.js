import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './context/ProductContext'
import { CartContext } from './context/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		let addBook = products.filter( product => {
			return product.id === item.id
		})
		setCart(cart.concat(addBook))
	};

	const removeItem = book => {
		setCart(cart.filter((item) => item.id !== book.id ))
	}

	return (
			<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={cart}>
					<Navigation />
					{/* Routes */}				
						<Route
							exact
							path="/"
							component={Products} />
						<Route
							path="/cart"
							component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
