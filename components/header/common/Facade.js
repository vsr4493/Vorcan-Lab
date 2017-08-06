import * as styles from './styles';

const Facade = () => (
	<div style={styles.outer}>
		<div style={Object.assign({},styles.inner,styles.transform)}></div>
	</div>
);

export {Facade};