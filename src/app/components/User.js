import React from "react";
import { createHashHistory } from "history";

const history = createHashHistory();
export class User extends React.Component {

    constructor(props) {
        super(props);
        this.onNavigateHome = this.onNavigateHome.bind(this);
    }

    onNavigateHome(){
        this.props.history.push("/home");
    }

    render (){
        return (
            <div>
                <h3>The User Page</h3>
                <p> User ID: {this.props.match.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home !</button>
            </div>
        );
    }
}
