import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Link from 'next/link';

const AppSidebar = ({visible,links}) => (
  <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
    {
      links.map((link,index) => (
          <Menu.Item name={link.title} key={index}>
            <Link href={link.url}>
              <Button link basic inverted>
                <Icon circular size="small" name={link.icon} />
                {link.title}
              </Button>  
            </Link> 
          </Menu.Item>
        )
      )
    }
  </Sidebar>
);

export {AppSidebar};