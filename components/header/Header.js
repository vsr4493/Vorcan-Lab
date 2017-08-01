import Link from 'next/link';
import {Grid,Header, Menu} from 'semantic-ui-react'

const Slogan = () => (
	<Header style={gridStyles} as='h1' textAlign='center'>Vorcan's Labratory</Header>
);

const gridStyles = {
	padding: "20px 10px" 
}

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
	<Grid celled >
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