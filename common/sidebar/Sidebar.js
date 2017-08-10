import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

const AppSidebar = ({visible}) => (
  <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
    <Menu.Item name='home'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item name='gamepad'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
);

export {AppSidebar};