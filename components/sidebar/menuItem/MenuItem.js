import { Button, Menu, Image, Icon, Header} from 'semantic-ui-react';
import Link from 'next/link';

const MenuItem = ({link,activePage, setActivePage}) => (
    <Menu.Item className="custom" fitted="vertical" name={link.title} size="large" active={activePage === link.title}>
      <Link href={link.url} onClick={() => setActivePage(link.title)}>
        <Button className="button" fluid basic  >
          <Icon circular size="large" inverted name={link.icon} color="teal"/>
          <span className="ui sub header">{link.title}</span>
        </Button>
      </Link>
      <style>
      {`
      	.ui.basic.button{
      		border-radius:0 !important;
      	}
      	.ui.basic.button:hover{
      	 	background-color:#ECECEC !important;	
      	}
      	.ui.basic.button:hover .ui.sub.header,.ui.basic.button:active .ui.sub.header
        ,.ui.basic.button:focus .ui.sub.header{
      		color:#823030; 
      	}
      	.ui.basic.button .ui.sub.header{
      		color:#fff;
      	}
      	
      `}
      </style>
    </Menu.Item>
);

export default MenuItem;