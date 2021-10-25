import React from 'react';
import { ReactDOM } from 'react';
import Aboutus from './Aboutus';
import Games from './Games';
import Movies from './Movies';
import Pricing from './Pricing';
import Download from './Download';
import Home from './Home';
import './Style.css';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
<>

        <switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Aboutus" component={Aboutus}/>
            <Route exact path="/Games" component={Games}/>
            <Route exact path="/Movies" component={Movies}/>
            <Route exact path="/Pricing" component={Pricing}/>
            <Route exact path="/Download" component={Download}/>
            <Redirect to="/" />
        </switch>










    <Home/>    
    <Aboutus/>
    <Games/>
    <Movies/>
    <Pricing/>
    <Download/>

</>

          
        
    );
};

export default App;














































































// import React from "react";
// import Card from "./Card";
// import About from "./About";
// import Contact from "./Contact";
// // import DigitalClock from "./DigitalClock";
// // import Form from "./Form";
// // import Test from "./Test";
// // import Footer from "./Footer";
// // import Header from "./Header";

// const App = () =>{
//     return( <>
//         <Card/>
//         <About/>
//         <Contact/>
//         {/* <Header/>
//         <DigitalClock/>
//         <Form/>
//         <Test/>
//         <Footer/> */}
//     </>
//     )
// }
// export default App;