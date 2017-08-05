import Link from 'next/link';
import Head from 'next/head';
import {Container} from 'semantic-ui-react'
import {AppHeader} from '../index';
import React from 'react';

const AppLayout = (props) => (
	<div>
		<Head>
			<title>Vorcan's Lab</title>
			<meta name="viewport" content="initial-scale=1.0 width=device-width"/>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
		</Head>
		<Container fluid style={{padding:"5px"}}>
			<AppHeader/>
			{props.children}
		</Container>	
	</div>
)

export {AppLayout};