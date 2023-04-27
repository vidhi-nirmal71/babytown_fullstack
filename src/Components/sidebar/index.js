import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { DrawerList, DrawerList2 } from '../../utils/Constant';
import Navbar from '../Navbar';
import { IMAGES } from '../../assests';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Colors } from '../../utils/themes';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box component={'img'}
      sx={{
        height:56,
        width: 210,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        objectFit:'contain'
      }}
       alt="Site Logo"
       src={IMAGES.Logo1}
      ></Box>
      <Divider />
      <List>
        {DrawerList.map((list,index) => (
          <ListItem key={list.id} disablePadding>
            <ListItemButton component={Link} to={list.path}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {list.logo}
              </ListItemIcon>
              {/* <ListItemText primary={list.name} sx={{color:Colors.primary , "fontSize": 20,}}/> */}
              <ListItemText sx={{color:Colors.primary }}>
                <span style={{ fontSize: "1rem" , fontWeight:600 }}>{list.name}</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {DrawerList2.map((list, index) => (
          <ListItem key={list.id} disablePadding>
            <ListItemButton component={Link} to={list.path}>
              <ListItemIcon>
              {list.logo}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              {/* <ListItemText primary={list.name} /> */}
              <ListItemText sx={{color:Colors.primary }}>
                <span style={{ fontSize: "1rem" , fontWeight:600 }}>{list.name}</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
 <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={Colors.secondary} sx={{fontFamily:'cursive'}} style={{ fontSize: "1.95rem" , fontWeight:600 }} >
            Baby Town
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        {/* <Banner /> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;