import React, { Component } from 'react';

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            makePost: {
            Name:'',
            Text: ''
          }
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({makePost: {
            Name: '',
            Text: ''
        }
          });

          return false;
    }

    handleOnchange(key, e){
        const val = e.target.value;
         let makePost = this.state.makePost;
        makeReview[key] = val;
        this.setState({makePost})
        e.preventDefault();
    }


    render() {
        const makePost = this.state.makePost;


        return (
            <div>
                <div>
                <h4>Make a new Post</h4>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="Name" onChange={(e)=>this.handleOnchange("Name", e)}
                    value={makePost.Name} placeholder="Enter your name" type="text" name="Name"/><br />
                    <textarea ref="Text" id="Text" onChange={(e)=>this.handleOnchange("Text", e)}
                    value={makePost.Text} name="Text" placeholder="enter comment"></textarea><br />
                        <button type="Submit">Send</button>
                    </form>
                 </div>
            </div>
        )
    }
}


export default Post;