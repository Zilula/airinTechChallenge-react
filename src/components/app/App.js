import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Search from '../home/Search';
import QuestionDetail from '../questionDetail/QuestionDetail';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/question/:id' component={QuestionDetail} />
                </Switch>
            </Router>
        );
    }
}
