
import React from 'react';
import { BrowserRouter,  Route, } from 'react-router-dom';



import Chat from './components/Chat/Chat'
import Sidebar from './components/Sidebar/Sidebar'



export default function Routes() {
    return (
        <BrowserRouter>
        
           
                <Route path="/" exact>
                    <h1>
                        Welcome
                    </h1>
                    </Route>
                <Route component={Chat} path="/room/:roomId"/>
                   
                    
           
        </BrowserRouter>
    );
}