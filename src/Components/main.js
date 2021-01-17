import React from 'react';
import  {Route,Switch } from 'react-router-dom';
import Landing from './Lading';
import Resume from './Resume';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';


const Main = () =>{
    return(
    <Switch>
        <Route exact path = "/" component = {Landing} />
        <Route path = "/Aboutme" component = {Aboutme} />
        <Route path = "/Resume" component = {Resume} />
        <Route path = "/Projects" component = {Projects} />
        <Route path = "/Contact" component = {Contact} />

    </Switch>
    )
};

export default Main;

