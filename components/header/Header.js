import Link from 'next/link';
import {Grid,Header, Menu} from 'semantic-ui-react'
import Slogan from './Slogan'; 

const gridStyles = {
	padding: "10px 5px" 
}

const PostLink = ({id, title}) => (
	<Link href={`/post?id=${id}`}>
		<Menu.Item name={title} />
	</Link>
) 

	
const LinkMenu = ({activeItem}) => (
	<Grid>
		<Grid.Row>
			<Grid.Column width={6}>
				<Menu vertical>
					<Link href="/">
						<Menu.Item name='Home' active={activeItem === 'home'}/>
					</Link>
					<Link href="/about">
						<Menu.Item name='About' active={activeItem === 'about'}/>
					</Link>
					<PostLink id="WYDchioAAHuWrCAF" title="Hello World"/>
				</Menu>
			</Grid.Column>
			<Grid.Column width={6}>
				<Menu vertical>
				</Menu>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

const AppHeader = (props) => (
	<Grid celled padded>
		<Grid.Row>
			<Grid.Column width={7}>
				<Slogan />
			</Grid.Column>
			<Grid.Column width={9}>
				<LinkMenu activeIte
				m = {props.activeItem} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};