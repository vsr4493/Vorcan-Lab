import {Header,Icon,Button} from 'semantic-ui-react';
import * as styles from './styles';
import {Facade} from '../common/index';

const Logo = ({toggleSidebar}) => (
	<div>
	<Header as='h1' style={styles.container} >
		<Facade/>
		<Header.Content>
			<Button icon onClick={toggleSidebar}>
				<sup>
					<Icon size="large" inverted name="content" />
				</sup>
			</Button>
		</Header.Content>
		<Header.Content style={{marginLeft:"10px"}}>
				<sup>Vorcan's</sup>
				<sub>Lab</sub>
		</Header.Content>
	</Header>
	</div>
);


export default Logo;