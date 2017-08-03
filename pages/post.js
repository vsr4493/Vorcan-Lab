import {Container, Header} from 'semantic-ui-react';
import fetch from 'isomorphic-unfetch';
import Prismic from 'prismic-javascript';
import {ApiConfig} from '../config/index';
import {translateError} from '../utils/index';
import {Post as PostComponent} from '../components/index';

const Post = ({post}) => {
	return (
			<PostComponent post = {post} />
	);
}

Post.getInitialProps = async function(context){
	const {id} = context.query;
	try{
		let endPoint = ApiConfig.endPoint;
		let api = await Prismic.getApi(endPoint).catch(translateError("No Api found"));
		let queryResult = await api.query(
				Prismic.Predicates.at('document.id', id)
			).catch(translateError("No Posts found"));
		console.log(queryResult);
		return {
			post:queryResult
		};
	}catch(err){
		console.log(err);
		return {
			post:undefined
		};
	}
}

export default Post;