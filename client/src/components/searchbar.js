//build the search bar here
//still need to research how search bar logic works

import React from 'react';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';


export default class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titles: '',
            authors: ''
        };
    }






    updateTitles(e){
        axios.get(`https://localhost:5000/api/books/`)
            .then(res => {
                console.log(res);
            });
        this.setState({titles: e.target.value});


    }

    updateAuthors(e){
        this.setState({authors: e.target.value});
    }

    render(){
        let filteredTitles = this.props.books.filter((book) => {
            return book.title.indexOf(this.state.titles) !== -1;
        });
        const listTitles = filteredTitles.map((book, index) => (
            <li key={index}>
              {book.title}: {book.author}
            </li>
          ));
        let filteredAuthors = this.props.books.filter((book) => {
            return book.author.indexOf(this.state.authors) !== -1;
        });
        const listAuthors = filteredAuthors.map((book, index) => (
            <li key={index}>
              {book.title}: {book.author}
            </li>
        ));
        return(
            <div>
                <Form inline>
                <FormGroup controlId="form">
                    <FormControl type="text" 
                        placeholder="Search for titles"  
                        value={this.state.titles}
                        onChange={this.updateSearch.bind(this)}/> <br/>
                    <FormControl type="text"
                        placeholder="Search for authors"
                        value={this.state.authors}
                        onChange={this.updateAuthors.bind(this)}/>
                </FormGroup> 
                </Form>
                <div>
                    <ul>
                        {listTitles}
                    </ul>
                    <ul>
                        {listAuthors}
                    </ul>
                </div>
            </div>
            

        );
    }
}