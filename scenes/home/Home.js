import {Divider, Header, Rail,Button, Container, Segment, Label,Icon, Grid} from 'semantic-ui-react';
import Link from 'next/link';
import * as styles from './styles';

const PostLink = ({link, renderPost}) => {
	return (
		<Grid centered columns={1}>
		  <Grid.Column width={12}>
		   	<Segment style={styles.postLink}>
					<Label color='blue' size="mini" ribbon>{link.addedOn}</Label>
					<Header as="h2" style={{marginLeft:"20px"}}>
						<Header.Content>
							<a style={{cursor:"pointer"}} onClick={() => renderPost(link.id)}>
								{link.header}
							</a>
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

const Home = ({links,renderPost}) => {
	return (
		<Container style={styles.container}>
			{links.map((link,index) => <PostLink key={index} link={link} renderPost={renderPost} />)}
		</Container>
	);
}

export {Home};