import {Grid} from 'semantic-ui-react'
import Logo from './logo/Logo'; 
import Navbar from './navbar/Navbar'; 
import * as styles from './styles';

const AppHeader = (props) => (
	<Grid stretched style={styles.container.grid}>
		<Grid.Row stretched stackable style={styles.container.row}>
			<Grid.Column tablet={6} mobile={12} computer={4}>
				<Logo toggleSidebar = {props.toggleSidebar}/>
			</Grid.Column>
			<Grid.Column tablet={10} mobile={16} computer={12}>
				<Navbar links = {props.links} activeLink = {props.activeLink} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};