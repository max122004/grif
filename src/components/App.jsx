import Header from "./Header";
import Main from "./Main";
import LogAndBetter from "./LogAndBetter.jsx";
import News from './News.jsx';
import { useState } from "react";



const App = () => {
    
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <LogAndBetter />
            <News />
        </div>
    )
}


export default App;