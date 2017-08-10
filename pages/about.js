import {AppLayout} from '../components/index';
import {Header, Container, Card, Icon} from 'semantic-ui-react';

const InfoCard = () => (
	<Card style={{margin:"auto"}}>
		<Card.Content>
			<Card.Header>
				Vardhman Singh
			</Card.Header>
			<Card.Meta>
				is still wondering what to write here..
			</Card.Meta>
			<Card.Description>
				Scala/Java/Javascript developer by day, much the same by night.<br/> 
			</Card.Description>
		</Card.Content>
	</Card>
);

const About = () => (
	<AppLayout>
		<Container textAlign="center">
			<br/>
			<Header as="h2">
				<Header.Content>
					
					<Header.Subheader>
						
					</Header.Subheader>
				</Header.Content>
			</Header>
			<InfoCard />
		</Container>
	</AppLayout>
)

export default About