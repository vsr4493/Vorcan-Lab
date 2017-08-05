import {Header} from 'semantic-ui-react';
import * as styles from './styles';
import {Facade} from '../common/index';

const Logo = () => (
	<div>
	<Header as='h1' textAlign='center' style={styles.container} >
		<Facade/>
		<Header.Content>
				<sup>Vorcan's</sup>
				<sub>Lab</sub>
		</Header.Content>
	</Header>
	</div>
);


export default Logo;