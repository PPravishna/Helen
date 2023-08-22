import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Fragments } from '../../components/fragments/Fragment.com';
import { Mybuttons } from '../../components/mybuttons/Mybuttons.com';
import { Floatingbutton } from '../../components/floatingbutton/Floatingbutton';
import { RatingStar } from '../../components/ratingstar/RatinsStar.com';
import { Custom } from '../../components/slider/Custom.com';
import { AlertMessage } from '../../components/alert/AlertMessage.com';
import { ProgressLinear } from '../../components/Progress/ProgressLinear.com';
import { MenuIcon } from '../../components/menu/MenuIcon.com';
import { BasicPagination } from '../../components/Pagination/BasicPagination.com';
import { WovenImageList } from '../../components/ImageList/WovenImageList.com';
import { ColorPalette } from '../../components/palette/ColorPalatte.com';
import { Pagination } from '@mui/material';
import { PropsConcept } from '../../components/props/PropsConcept.com';
import { HookIntro } from '../../components/hookes/HookIntro.com';
import { Css_Container } from '../../components/5-ways-of-css/Css_Container.com';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Lessons:React.FC<{}>=()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fragments"  />
          <Tab label="Components" />
          <Tab label="Props"/>
          <Tab label="Hookes"/>
          <Tab label="Strict-mode"/>
          <Tab label="5-Ways-of-css"/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Fragments/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>

        <h1>Buttons</h1>
        <Mybuttons/>
        
       <h1>Floating Button</h1>
       <Floatingbutton/>

       <h1>Star Rating</h1>
       <RatingStar/>

       <h1>Slider</h1>
       <Custom/>
       
       <h1>Alert Message</h1>
       <AlertMessage/>

        <h1>Progress Linear Colors</h1>
        <ProgressLinear/>

        <h1>Menu Icon</h1>
        <MenuIcon/>

        <h1>Pagination</h1>
      <Pagination/>

      <h1>Image List</h1>
      <WovenImageList/>

      <h1>Palette</h1>
      <ColorPalette/>


      </CustomTabPanel>

    
      <CustomTabPanel value={value} index={2}>

        <PropsConcept/>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>

        <HookIntro/>
      </CustomTabPanel>

      
      <CustomTabPanel value={value} index={4}>

        <h1>Definition-Strict mode</h1>

      </CustomTabPanel>

      
      <CustomTabPanel value={value} index={5}>
        <h1>Different ways of CSS in React</h1>
        <Css_Container/>
       
      </CustomTabPanel>


    </Box>
  );
}