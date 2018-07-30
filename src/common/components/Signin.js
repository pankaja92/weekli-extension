import React, { Fragment, Component } from "react";

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    signIn = () => {
        console.log(this.state);
    }

    render(){
        return(
            <Fragment>
                <input type='text' onChange={(e) => this.setState({ username : e.target.value })} />
                <input type='text' onChange={(e) => this.setState({ password : e.target.value })} />
                <button onClick={this.signIn} type='button'>Signin</button>
            </Fragment>
        )
    }
}

export default Signin;