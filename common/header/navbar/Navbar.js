import {Grid,Header, Menu, Segment, Button} from 'semantic-ui-react';
import * as styles from './styles';
import Link from 'next/link';
import {Facade} from '../common/index';

const MenuItem = ({href,title,activeItem}) => (
		<Menu.Item name={title} size="large" active={activeItem === title}>
			<Link href={href}>
				<Button basic color="black">{title}</Button>
			</Link>
		</Menu.Item>
);

const Navbar = ({activeLink, links}) => (
	<Menu borderless style={styles.container}>
		{
			links.map((link,index) => 
					<MenuItem  href={link.url} key={index} title={link.title} activeItem={link.title == activeLink} />
			)
		}
	</Menu>
);

export default Navbar;