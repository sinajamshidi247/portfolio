import {Grid , Cell}from'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function Resume() {
  return (
 <div>
    <Grid>
      <Cell col = {4}>
        <div style={{textAlign :"enter"}}>
          <img
          src = 'data:image/jpeg;base64,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'
          alt="avatar"
          style = {{height:'200px'}}/>

          </div>
        <h2 style ={{paddingTop:'2em'}}>Sina Jamshidi</h2>
        <h4 style={{color:'gray'}}>Programmer</h4>
        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
        <p>
          I am a Self-taught web developer,full lerner , enthusiastic about network and security
          <br/>Trying improve my skills in cs
        </p>
        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
          <h5>Address</h5>
          <p>Iran.Tehran.sadeghie</p>
          <p> Iran.Hamedan. modaress town </p>
        <h5>Phone</h5>
        <p>(+98) 918-504-5121</p>
        <h5>Email</h5>
        <p>sina.j372@gmail.com</p>
        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

      </Cell>
      <Cell className = "resume-right-col"col = {8}>
        <h2>Education</h2>
        <Education 
        startYear = {2018}
        endYear = {2022}
        schoolName = {'Bu-Ali Sina University'}
        schoolDescription = "Materials Science and Engineering."
        />
        <Education 
        startYear = {2019}
        endYear = {2020}
        schoolName = 'Iran Technical & Vocational Training Organization'
        schoolDescription = "graduated in three fields : ubuntu-java-python"
          
        />
        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
        <h2>Experience</h2>
        <Experience 
        startYear ={2018}
        endYear = {2019}
        jobName = 'Iran Chess Federation'
        jobDescription ='Interprets written or spoken material into English language,for chess player from other countries'
        
        />
          <Experience 
        startYear ={2018}
        endYear = {2020}
        jobName = 'Developer'
        jobDescription ='Self-taught web developer'
        
        />
        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
        <h2>Skills</h2>
          <Skills 
          skill = {'Python'}
          progress = {70}/>
          <Skills 
              skill = {'Django'}
              progress = {60}
          />
          <Skills
           skill = {'Drf'}
           progress = {40}
          />
          <Skills 
           skill = {'HTML/Css'}
           progress = {50}
          />
          <Skills 
          skill = {'Bootstrap'}
          progress = {50}
          />
          <Skills 
          skill = {'React'}
          progress = {50}
          />
        <Skills
        skill = {'MongoDB'}
        progress = {35}
        />
        <Skills 
        
        skill = {'Git'}
        progress = {40}
        skill = {'java'}
        progress = {25}
        />



      </Cell>

    </Grid>
 </div>
  );
}

export default Resume;
