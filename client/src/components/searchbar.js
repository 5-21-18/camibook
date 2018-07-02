import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PostItem from './posts/PostItem';
import { getPosts } from "../actions/postActions";


class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            input: "",
            book: ""
        }

    }

    componentDidMount() {
        this.props.getPosts();
    }

    
    updateTitles(e){
        this.setState({input: e.target.value});

        const { posts } = this.props.post;
        const { input } = this.state;

        const listTitles = posts.map((post) => {
            if(input.toLowerCase() === post.bname.toLowerCase()){
            
                console.log(post.bname, ": Matches input");
                this.setState({book: <PostItem key={post._id} post={post} />});
            } else {
                console.log("Does not match");
            }
        });     

    }


    render(){
        const { input } = this.state;

        return(
            
            <div>
                <h3>Search for a book!</h3>
                <Form>
                
                    <FormGroup controlId="form">
                        <FormControl type="text" 
                        placeholder="Search by title"  
                        value={input}
                        onChange={event => this.setState({input: event.target.value})}/> 
                    </FormGroup> 

                    <Button
                    onClick={this.updateTitles.bind(this)}
                    >Search</Button>
                
                </Form>
                <hr />
                <div>
                    
                    {this.state.book}
                    
                </div>
            </div>
            

        );
    }
}

Search.propTypes = {
    getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    post: state.post
  });
  
  export default connect(
    mapStateToProps,
    { getPosts }
  )(Search);