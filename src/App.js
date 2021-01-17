
import './App.css';
import {Layout , Header , Navigation , Drawer , Content} from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom'


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="Sina Jamshidi" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Aboutme">Aboutme</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  style = {{color:'white'}} className = "header-color" title="SinaJamshidi">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Aboutme">Aboutme</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
