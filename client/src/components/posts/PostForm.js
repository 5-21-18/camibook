import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import { addPost } from "../../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      bname: "",
      isbn: "",
      year: "",
      description: "",
      thoughts: "",
      cover: "",
      // text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      category: this.state.category,
      bname: this.state.bname,
      isbn: this.state.isbn,
      year: this.state.year,
      description: this.state.description,
      thoughts: this.state.thoughts,
      cover: this.state.cover,
      // text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({
      category: "",
      bname: "",
      isbn: "",
      year: "",
      description: "",
      thoughts: "",
      cover: ""
      // text: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3 col-md-8">
        <div className="card card-info ">
          <div className="card-header bg-secondary text-white border border-secondary ">
            Add a Book. . .
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit} style={{ margin: "auto" }}>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Book Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                <TextFieldGroup
                  placeholder="Book Name"
                  name="bname"
                  value={this.state.bname}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                <TextFieldGroup
                  placeholder="ISBN"
                  name="isbn"
                  value={this.state.isbn}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                <TextFieldGroup
                  placeholder="Year Published"
                  name="year"
                  value={this.state.year}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                <TextAreaFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                <TextAreaFieldGroup
                  placeholder="Your thoughts about the book"
                  name="thoughts"
                  value={this.state.thoughts}
                  onChange={this.onChange}
                  error={errors.bname}
                />
                {/* <button className="btn btn-secondary btn-sm btn-cover">
                  <label htmlFor="cover">Select a book cover</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="cover"
                    id="cover"
                    value={this.state.cover}
                    onChange={this.onChange}
                    style={{ opacity: "0" }}
                  />
                  Book cover
                </button> */}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm float-right"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
