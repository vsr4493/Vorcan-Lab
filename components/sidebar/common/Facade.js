import * as styles from './styles';

const Outer = (props) => (<div style={styles.outer}>{props.children}</div>)

const Single = ({styleOverride}) => {
	console.log(styleOverride);
	return(
		<div 
			style={
					Object.assign(
						{},
						styles.inner,
						styleOverride
					)}>
		</div>
	);
}

const Facade = () => (

	<Outer>
		{
			Array.from(Array(3).keys()).map((counter,index) => <Single key={index} styleOverride={{
				width:`${counter*20}%`,
				left: `${counter*30}%`
			}}/>)
		}
	</Outer>
)



export {Facade};