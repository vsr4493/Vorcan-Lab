import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider} from 'semantic-ui-react';
import Link from 'next/link';
import Logo from './logo/Logo'; 
import {Facade} from './common/index';
import * as styles from './styles'; 

const MenuItem = ({link,activePage, setActivePage}) => (
    <Menu.Item name={link.title} size="large" active={activePage === link.title}>
      <Link href={link.url} onClick={() => setActivePage(link.title)}>
        <Button basic inverted size="large" color="white" >
          <Icon circular size="large" inverted name={link.icon} color="teal"/>
          {link.title}
        </Button>
      </Link>
    </Menu.Item>
);


const AppSidebar = ({visible,links,toggleSidebar,activePage, setActivePage, propStyle}) => (
  <Sidebar as="div" 
    animation='overlay' width='wide' visible={visible} 
    style={Object.assign({},styles.sidebar,propStyle)}
  >
    <Menu  icon='labeled' vertical inverted fluid style={styles.menu}>
      <Facade />
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