import {Grid} from 'semantic-ui-react'
import Logo from './logo/Logo'; 
import Navbar from './navbar/Navbar'; 
import * as styles from './styles';

const AppHeader = (props) => (
	<Grid stretched style={styles.container.grid}>
		<Grid.Row stretched style={styles.container.row}>
			<Grid.Column width={4}>
				<Logo toggleSidebar = {props.toggleSidebar}/>
			</Grid.Column>
			<Grid.Column width={12}>
				<Navbar links = {props.links} activeLink = {props.activeLink} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};