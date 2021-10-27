import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import MainView from './views/MainView';
import ErrorView from './views/ErrorView';


const AppRouter = ()=> {
    return (
        <BrowserRouter>
            <div>

            <main className='py-5'>
                <NavBar />
                    <Switch>
                        <Route path="/" component={MainView} exact/>
                        <Route component={ErrorView}/>
                    </Switch> 
            </main>
            </div>
        </BrowserRouter>    
    )
}

export default AppRouter;
