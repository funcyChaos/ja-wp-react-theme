import './styles/main.scss';
import Header from './scripts/Header';
import Hero from './scripts/Hero';
import ExampleReactComponent from './scripts/ExampleReactComponent';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Main()
{
  const [wpData, setWpData] = useState([]);
 
  useEffect(
    () => {
      const apiUrl = 'http://reacttheme.local/wp-json';
      axios.get(apiUrl).then((response) => {
        const siteData = response.data;
        setWpData(siteData);
      });
    },
    [axios, setWpData]
  );

  // console.log('WP Data',wpData);

  const {
    url,
    name,
    description,
    site_logo
  } = wpData;

  // console.log('wp data',wpData);

	return(
		<BrowserRouter>
			<Header
        url={url}
        name={name}
        description={description}
        site_logo={site_logo}
      />
			<Switch>
				<Route path="/" exact>
					<Hero/>
					<ExampleReactComponent/>
				</Route>
				<Route path="router">
					<Hero/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<Main/>, document.getElementById('app'));