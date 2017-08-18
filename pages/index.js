import React from 'react';
import {AppLayout,Post} from '../components/index';
import {Home} from '../scenes/index';
import fetch from 'isomorphic-unfetch';
import Prismic from 'prismic-javascript';
import {ApiConfig} from '../config/index';
import {translateError} from '../utils/index';

const parsePostLinks = (posts={}) =>{
	if(posts.results && posts.results.length>0){
		let results = posts.results;
		return results.map((x) => {
			return {
				id: x.id,
				header: x.data.blog_title.map(y => y.text).join("\n"),
				subHeader: "Lorem Ipsum",
				addedOn: x.first_publication_date.substring(0, x.first_publication_date.indexOf('T'))
			}
		});
	}
	return [];
}

class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {posts: [], currentPost: undefined};
	}
	renderPost(id){
		this.setState({currentPost:id});
	}
	render(){
		const currentPostID = this.state.currentPost;
		const {posts} = this.props;
		const links = parsePostLinks(posts); 
		return(
			<AppLayout>
				{
					(typeof currentPostID!="undefined")?
						<div>Placeholder for a post</div>
					:
					<Home links={links} renderPost = {this.renderPost.bind(this)}/>
				}
			</AppLayout>
		);
	}
}

Index.getInitialProps = async function(context){
	try{
		let endPoint = ApiConfig.endPoint;
		let api = await Prismic.getApi(endPoint).catch(translateError("No Api found"));
		let queryResult = await api.query(
				Prismic.Predicates.at('document.type', 'blog_post')
			).catch(translateError("No Posts found"));
		console.log(queryResult);
		return {
			posts:queryResult
		};
	}catch(err){
		console.log(err);
		return {
			posts:[]
		};
	}
}
	
export default Index