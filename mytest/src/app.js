import React, { Component } from 'react';

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: null
          }
        }
        componentDidMount() {
          this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
        }

        callBackendAPI = async () => {
            const response = await fetch('/api/express_backend');
            const body = await response.json();

            if(response.status !== 200) {
                throw Error (body.message)
            }
            return body;
        }


    render(){
        return(
            <div>
            <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
                <p>{this.state.data}</p>
            </div>
            )
    }
};
