import {Container, Header} from 'semantic-ui';

const Post = ({post}) => {
	return (
		<Container>
			<Header as="h2" textAlign="Center">{post.title}</Header>
			<div dangerouslySetInnerHtml={post.markup}>
			</div>
		</Container>
	);
}