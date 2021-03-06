import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container" id="landing-con">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 main-banner">Camibook</h1>
                <p className="lead">
                  {" "}
                  A social media for book lovers. Share with others your
                  thoughts and experiences with your favorite books
                </p>
                <Link to="/register" className="btn btn-md btn-secondary mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-md btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
