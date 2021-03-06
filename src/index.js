import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import RegistrationVideo from './pages/Registration/Video';
import RegistrationCategory from './pages/Registration/Category';
import EditCategory from './pages/Edition/Category';
import EditVideo from './pages/Edition/Video';
import Home from './pages/Home';


const Pagina404 = () => (
	<div> Página 404</div>
);


ReactDOM.render(
  <BrowserRouter>
		<Switch>
			<Route path="/registration/video" component={RegistrationVideo} />
			<Route path="/registration/category" component={RegistrationCategory} />
			<Route path="/edit/category/:id" component={EditCategory} />
			<Route path="/edit/video/:id" component={EditVideo} />
			<Route path="/" component={Home} exact />
			<Route component={Pagina404}  />
		
		</Switch>
	</BrowserRouter>,
  document.getElementById('root')
);

