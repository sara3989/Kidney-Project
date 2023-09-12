import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './index3'
import Register from '../register/index3';

// import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom({val}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(val);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // function handleClose() {
  //   this.props.handleClose();
  // }
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 500,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Login></Login>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <Register ></Register>
      </TabPanel>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
         >
          {/* <Tab label="Log In" {...a11yProps(0)} /> */}
          <Tab hidden={value !== 1}  label="Log In" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      {/* </AppBar> */}
      {/* <TabPanel value={value} index={0} dir={theme.direction}>
        <Login></Login>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Register></Register>
      </TabPanel> */}
    </Box>
  );
}