import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status:0,
            homeLink:props.initialLinkName
        };
        setTimeout(()=> {
            this.setState({
                status:1
            });
        },3000);
        console.log("constructor");
    }

    componentWillMount(){
        console.log("inside component Will Mount");
    }

    componentDidMount(){
        console.log("inside component Did Mount");
    }
    
    componentWillReceiveProps(nextProps){
        console.log("inside component Will Receive Props", nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("inside should Componet Update", nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("inside Componet will Update", nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("inside Componet did Update", prevProps,prevState);
    }

    componentWillUnmount(){
        console.log("inside Componet will unmount");
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
        console.log(this.age);
    }
    
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render (){
        return (
            <div>
                <p> In a new Component </p>
                <p> Your Name is {this.props.name} and your age is {this.state.age}</p>
                <p>Status {this.state.status}</p>
                <hr />
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older </button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary"> Greet </button>
                <hr />
                <input type="text" value={this.state.homeLink} 
                    onChange={(event)=>this.onHandleChange(event)}
                />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary"> Change Header link </button>
            </div>
        );
    }
}

Home.propTypes ={
    name :React.PropTypes.string,
    initialAge : React.PropTypes.number,
    greet:React.PropTypes.func,
    initialLinkName:React.PropTypes.string
}