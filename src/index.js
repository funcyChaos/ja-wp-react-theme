import './styles/main.scss';
import Header from './scripts/Header';
import Hero from './scripts/Hero';
import ExampleReactComponent from './scripts/ExampleReactComponent';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    name,
    description,
    site_logo
  } = wpData;

	return(
		<>
			<Header
        name={name}
        description={description}
        site_logo={site_logo}
      />
			<Hero/>
			<ExampleReactComponent/>
		</>
	);
}

ReactDOM.render(<Main/>, document.getElementById('app'));