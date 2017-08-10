import {Header, Container} from 'semantic-ui-react';

const PostHeader = ({title}) => {
	return (
		<Header as="h2">{title.text}</Header>
	);
}
const PostBody = ({content}) => {
	return (
		<div>
			{
				content.length>0?
					content.map( 
						data => (
							<article>
								<p>	{data.text} </p>
								<br/>
							</article>
						)
					)
					:
					<p>No post found</p>
			}
		</div>
	);
}

const Post = ({post}) => {
	let result = post && post["results"] && post["results"] && post["results"].length>0 && post["results"][0] || {};
	let content = result.data && result.data.content || [];
	let title = result.data && result["data"]["page_title"] && result["data"]["page_title"][0] || "";
	return (
		<Container>
			<PostHeader title={title} />
			<PostBody content={content} />
		</Container>
	);
}

export {Post};