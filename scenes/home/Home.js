import {Divider, Header, Rail, Container, Segment, Label,Icon, Grid} from 'semantic-ui-react';
import Link from 'next/link';
import * as styles from './styles';

const PostLink = ({link}) => {
	return (
		<Grid centered columns={1}>
		  <Grid.Column>
		   	<Segment style={styles.postLink}>
					<Label color='blue' size="mini" ribbon>{link.addedOn}</Label>
					<Header as="h1">
						<Header.Content>
							<Link href={`\post?id=${link.postID}`} onClick={() => setActivePage(link.title)}>
								{link.header}
							</Link>
						</Header.Content>
						<Header.Subheader>
							{link.subHeader}
						</Header.Subheader>
					</Header>
				</Segment>
			</Grid.Column>
		</Grid>
	);
}

const Home = ({links}) => {
	return (
		<Container style={styles.container}>
			{links.map(link => <PostLink link={link} />)}
		</Container>
	);
}

export {Home};