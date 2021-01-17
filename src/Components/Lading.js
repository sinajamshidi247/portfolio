import { Cell, Grid } from "react-mdl";
import './../../src/App.css';

function Landing() {
    return (
   <div style = {{width : '100%',margin:'auto'}}>
       <Grid className = "landing-page">
           <Cell col = {12}>
               < img 
               src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvSbizvnY0c2sfqq71ANwRU_KyAdmYPI1wA&usqp=CAU"
               alt = "avatar"
               className ="avatar-image" />
            <div className = "banner-text">
                <h1>
                    Junior python developer
                </h1>
                <hr/>
            
            <p>Python | Django | DRF | HTMl/CSS | Bootstrap | React | MongoDB | Git</p>
            <div className = "social-link">
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
            </div>
            </div>
           </Cell>
       </Grid>

   </div>
    );
  }

  
  
  export default Landing;