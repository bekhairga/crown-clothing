import './App.css';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' component={Homepage} exact />
				<Route path='/shop' component={ShopPage} exact />
			</Switch>
		</div>
	);
}

export default App;
