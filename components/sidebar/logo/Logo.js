import {Header,Icon,Button} from 'semantic-ui-react';
import * as styles from './styles';
import {Facade} from '../common/index'; 

const Logo = ({toggleSidebar}) => (
	<div>
	<Header as='h1' style={styles.container} >
		<Header.Content>
			//TODO: Use Facade responsibly...
				<sup>
					<Icon inverted name="content" />
				</sup>
		</Header.Content>
		<Header.Content style={{marginLeft:"10px"}}>
				<sup>Vorcan's</sup>
				<sub>Lab</sub>
		</Header.Content>
	</Header>
	</div>
);


export default Logo;