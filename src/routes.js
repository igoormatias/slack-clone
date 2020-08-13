
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Chat from './components/Chat/Chat'



export default function Routes() {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/">
                    <h1>
                        Welcome
                    </h1>
                    </Route>
                <Route path="/room/:roomId">
                    <Chat />
                    </Route>
            </Switch>
        </BrowserRouter>
    );
}