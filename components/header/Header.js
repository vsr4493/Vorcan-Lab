import {Grid} from 'semantic-ui-react'
import Logo from './logo/Logo'; 
import Navbar from './navbar/Navbar'; 
import * as styles from './styles';

const AppHeader = (props) => (
	<Grid stretched style={styles.container.grid}>
		<Grid.Row stretched style={styles.container.row}>
			<Grid.Column width={3}>
				<Logo />
			</Grid.Column>
			<Grid.Column width={13}>
				<Navbar activeItem = {props.activeItem} />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export {AppHeader};