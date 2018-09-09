import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FarkleInstructions from '../components/FarkleInstructions';
import Header from '../components/Header';
import PlayFarkle from '../components/PlayFarkle';
import NotFound from '../components/NotFound';
import FarkleInfo from '../components/FarkleInfo';
import SubmitComment from '../containers/SubmitComment';
import LogIn from '../containers/LogIn';
import Welcome from '../components/Welcome';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/submitcomment" component={SubmitComment}/>
                    <Route path="/login" component={LogIn}/>
                    <Route path="/farkleinfo" component={FarkleInfo} />
                    <Route path="/instructions" component={FarkleInstructions} />
                    <Route path="/playfarkle" component={PlayFarkle}/>
                    <Route component={NotFound}/>
                </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;