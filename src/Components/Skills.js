import { Cell, Grid } from "react-mdl";

import {ProgressBar} from 'react-mdl';

function Skills(props) {
    return (
   <Grid>
       <Cell col = {12}>
           <div style ={{display:'flex'}}>{props.skill}<ProgressBar style={{margin:'auto',width:'75%'}} progress={props.progress} buffer={87} /></div>
       </Cell>
       

   </Grid>
    );
  }
  
export default Skills;