import Link from 'next/link';
import Head from 'next/head';
import {Container,Sidebar, Segment} from 'semantic-ui-react'
import {AppSidebar} from '../index';
import {AppRoutes} from '../../config/index';
import * as styles from './styles';
import React from 'react';

class AppLayout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sidebarVisible:true,
			contentVisible: false
		};
	}
	componentDidMount(){
    this.setState({
			contentVisible: true
    });
  }
	toggleSidebar(){
		this.setState({sidebarVisible: !this.state.sidebarVisible});
	}
	setActivePage(page){
		this.setState({activePage: page});
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
					<link rel="stylesheet" href="/static/style.css"></link>
				</Head>
				<Container fluid style={styles.container}>
					<Sidebar.Pushable as="div">
						<AppSidebar
							propStyle={{width: styles.sidebarSize}} 
							links={AppRoutes.sidebarLinks} 
							activePage={this.state.activePage} 
							setActivePage={this.setActivePage.bind(this)} 
							toggleSidebar={this.toggleSidebar.bind(this)}
							visible={sidebarVisible}
						/>
						<Sidebar.Pusher style={{minHeight:"100vh", display:showContent}}>
							<div style={{marginLeft:styles.sidebarSize}}>
								{this.props.children}
							</div>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Container>	
			</div>
		);
	}
}	

export {AppLayout};