import React from "react";
import {Header} from "./Header";
import {Route, Switch} from 'react-router-dom';
import {Home} from "./Home";
import {User} from "./User";


export class Root extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       {this.props.children}
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/user/:id" component={User}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </div>
        );
    }
}
