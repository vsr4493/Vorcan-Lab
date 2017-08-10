import React from 'react';
import {AppLayout} from '../components/index';
import {Home} from '../scenes/index';

const links = [
{
	subHeader: "A talk about some stuff",
	header: "Major title this",
	addedOn:"15 July 2017"
}

];

const Index = () => (
	<AppLayout>
		<Home links={links}/>
	</AppLayout>
)
	
export default Index