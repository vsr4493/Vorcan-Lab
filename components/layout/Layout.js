import Link from 'next/link';
import Head from 'next/head';
import {Container,Sidebar, Segment} from 'semantic-ui-react'
import {AppHeader,AppSidebar} from '../index';
import {AppRoutes} from '../../config/index';
import * as styles from './styles';
import React from 'react';

class AppLayout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sidebarVisible:false,
			contentVisible: false
		};
	}
	componentDidMount(){
    this.setState({
    	minHeight: (window.innerHeight - 60) + 'px',
			contentVisible: true
    });
  }
	toggleSidebar(){
		this.setState({sidebarVisible: !this.state.sidebarVisible});
	}
	render(){
		const {sidebarVisible, minHeight, contentVisible} = this.state;
		const showContent = contentVisible?"block":"none";
		return (
			<div>
				<Head>
					<title>Vorcan's Lab</title>
					<meta name="viewport" content="initial-scale=1.0 width=device-width"/>
					<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
				</Head>
				<AppHeader links={AppRoutes.links} toggleSidebar={this.toggleSidebar.bind(this)} activeLink={undefined}/>
				<Sidebar.Pushable>
					<AppSidebar visible={sidebarVisible}/>
					<Sidebar.Pusher style={{minHeight:minHeight, display:showContent}}>
						{this.props.children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}	

export {AppLayout};