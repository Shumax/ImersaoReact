import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import Home from './pages/Home';


const Pagina404 = () => (
	<div> Página 404</div>
);


ReactDOM.render(
  <BrowserRouter>
		<Switch>
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route path="/" component={Home} exact />
			<Route component={Pagina404}  />
		
		</Switch>
	</BrowserRouter>,
  document.getElementById('root')
);

