import {Header} from 'semantic-ui-react';
import * as style from './styles';

const Facade = () => (
	<div style={style.facadeOuter}>
		<div style={style.facadeInner}></div>
	</div>
);

const Logo = () => (
	<div>
	<Header as='h1' textAlign='center' style={style.container} >
		<Facade/>
		<Header.Content>
				<sup>Vorcan's</sup>
				<sub>Lab</sub>
		</Header.Content>
	</Header>
	</div>
);


export default Logo;