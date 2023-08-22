import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export const Floatingbutton:React.FC<{}>=()=>{
    return <>
<Fab color="secondary" aria-label="edit">
  <EditIcon />
</Fab>
</>
}