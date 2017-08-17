import { Sidebar, Segment, Menu} from 'semantic-ui-react';
import Logo from './logo/Logo'; 
import MenuItem from './menuItem/MenuItem';
import {Facade} from './common/index';
import * as styles from './styles';


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
        links.map((link,index) => 
          <MenuItem key={index} link={link} setActivePage={setActivePage} activePage={activePage}/>)
      }
    </Menu>
  </Sidebar>
);

export {AppSidebar};