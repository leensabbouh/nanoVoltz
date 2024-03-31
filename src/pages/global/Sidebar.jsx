import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FaPlus } from "react-icons/fa6";
import home from "../../img/Asset 2.png";
import col from "../../img/Asset 3.png";
import row from "../../img/Asset 4.png";
import game from "../../img/Asset 12.png";
import cont from "../../img/Asset 6.png";
import set from "../../img/Asset 7.png";
import opt from "../../img/Asset 8.png";


 const Sidebar =()=>{
    
  
const pages = [`${home}`, `${col}`,`${row}` ,`${game}`,`${cont}`,`${set}`,`${opt}`];

  return (
     <div className='sidebar'>  
      <Box >
        <FaPlus className="plus"/>
      <List>
        {pages.map((text) => (
          <ListItem key={text} >
            <ListItemButton>
              <img src={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
     </div>
    
  );
}
export default Sidebar;