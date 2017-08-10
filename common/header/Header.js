import {Grid} from 'semantic-ui-react'
import Logo from './logo/Logo'; 
import Navbar from './navbar/Navbar'; 
import * as styles from './styles';

const AppHeader = (props) => (
	<Grid stretched stackable style={styles.container.grid}>
		<Grid.Row stretched style={styles.container.row}>
			<Grid.Column doubling tablet={6} computer={4}>
				<Logo toggleSidebar = {props.toggleSidebar}/>
			</Grid.Column>
			<Grid.Column doubling tablet={10} computer={12}>
				<Navbar links = {props.links} activeLink = {props.activeLink} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};