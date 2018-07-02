import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import PostItem from './PostItem';

function searchingFor(input){
  return function(x){
      return x.bname.toLowerCase().includes(input.toLowerCase()) || !input;
  }
}

class PostFeed extends Component {
  constructor(){
    super();
    this.state = {
        input: ""
        
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e){
    this.setState({input: e.target.value});     
  }
  render() {
    const { posts } = this.props;
    const { input } = this.state;

    return (
      <div>
          <h3>Search for a book!</h3>
          <Form>
          
              <FormGroup controlId="form">
                  <FormControl type="text" 
                  placeholder="Search by title"  
                  value={input}
                  onChange={this.searchHandler}/> 
              </FormGroup> 
          
          </Form>
          <hr />
          { posts.filter(searchingFor(input)).map(post => 
              <PostItem key={post._id} post={post} />
          )
              
          }
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
