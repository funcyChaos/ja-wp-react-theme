import './styles/main.scss'
import Header from './scripts/Header';
import Hero from './scripts/Hero';
import ExampleReactComponent from './scripts/ExampleReactComponent'
import React from 'react'
import ReactDOM from 'react-dom'

function Main()
{
	return(
		<>
			<Header/>
			<Hero/>
			<ExampleReactComponent/>
		</>
	)
}

ReactDOM.render(<Main/>, document.getElementById('app'));