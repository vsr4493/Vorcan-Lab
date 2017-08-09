import { Sidebar, Segment, Button, Menu, Image, Icon, Header} from 'semantic-ui-react';
import Link from 'next/link';
import Logo from './logo/Logo'; 
import * as styles from './styles'; 

const MenuItem = ({link,activePage, setActivePage}) => (
    <Menu.Item name={link.title} size="large" active={activePage === link.title}>
      <Link href={link.url} onClick={() => setActivePage(link.title)}>
        <Button size="large" color="black" inverted >
          <Icon circular size="large" inverted name={link.icon} color="black"/>
          {link.title}
        </Button>
      </Link>
    </Menu.Item>
);


const AppSidebar = ({visible,links,toggleSidebar,activePage, setActivePage}) => (
  <Sidebar as="div" animation='push' width='wide' visible={visible} style={styles.sidebar}>
    <Menu icon='labeled' vertical inverted fluid style={styles.menu}>
       <Menu.Item header>
        <Logo toggleSidebar={toggleSidebar}/>
       </Menu.Item>
      {
        links.map((link,index) => <MenuItem link={link} setActivePage={setActivePage} activePage={activePage}/>)
      }
    </Menu>
  </Sidebar>
);

export {AppSidebar};