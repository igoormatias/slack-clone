
import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
 import { createBrowserHistory } from 'history';



import Chat from './components/Chat/Chat'
import Sidebar from './components/Sidebar/Sidebar'





export default function Routes() {
    
    const history = createBrowserHistory();
    
    return (
        <BrowserRouter history={history} >
        
           
                <Route path="/" exact>
                    
                    <Sidebar />
                    <h1>
                        Welcome
                    </h1>
                    </Route>
                <Route path="/room/:roomId">
                <Sidebar />
                <Chat />
                
                </Route>
                   
                    
           
        </BrowserRouter>
    );
}