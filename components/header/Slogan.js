import {sloganStyle} from './styles';
import {Header} from 'semantic-ui-react';

console.log(sloganStyle);

const Slogan = () => (
	<Header as='h1' textAlign='center'>
		<style jsx global>{sloganStyle}</style>
		<div className="sloganContainer">
			<div className="sloganContainerBG"></div>
			<sup>Vorcan's</sup>
			<sub>Lab</sub>
		</div>
	</Header>
);


export default Slogan;