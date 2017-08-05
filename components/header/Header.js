import Link from 'next/link';
import {Grid,Header, Menu} from 'semantic-ui-react'
import Logo from './logo/Logo'; 

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
				<Menu Horizontal>
					<Link href="/">
						<Menu.Item name='Home' active={activeItem === 'home'}/>
					</Link>
					<Link href="/about">
						<Menu.Item name='About' active={activeItem === 'about'}/>
					</Link>
					<PostLink id="WYDchioAAHuWrCAF" title="Hello World"/>
				</Menu>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

const AppHeader = (props) => (
	<Grid padded stretched style={{}}>
		<Grid.Row stretched>
			<Grid.Column width={2}>
				<Logo />
			</Grid.Column>
			<Grid.Column width={14}>
				<LinkMenu activeIte
				m = {props.activeItem} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};