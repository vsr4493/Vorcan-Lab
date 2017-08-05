import {Grid,Header, Menu} from 'semantic-ui-react';
import * as styles from './styles';
import Link from 'next/link';
import {Facade} from '../common/index';

const PostLink = ({id, title}) => (
	<Link href={`/post?id=${id}`}>
		<Menu.Item name={title} />
	</Link>
) 


const MenuItem = ({href,title,activeItem}) => (
	<Link href={href}>
		<Menu.Item name={title} active={activeItem === title}>
			{title}
		</Menu.Item>
	</Link>
);

const Navbar = ({activeItem}) => (
	<Menu borderless fluid widths={2}  style={styles.container}>
		<MenuItem href="/" title="home" activeItem={activeItem} />
		<PostLink id="WYDchioAAHuWrCAF" title="Hello World"/>
	</Menu>
);

export default Navbar;