import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './../styles.css';
import Home from './Home';
import List from './List';

class App extends Component {

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
        const test = <div>
          <header className="App-header">
             <h1 className="App-title">Welcome to React</h1>
         </header>
            <p>{this.state.data}</p>
                    </div>

        const App = () => (
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/list' component={List}/>
              </Switch>
              <div>{test}</div>
            </div>
          )


        return(
            <Switch>
                 <App/>
             </Switch>
            )
    }
};
export default App;