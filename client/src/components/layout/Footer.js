import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-info text-white mt-4 p-4 text-center footer">
        Copyright &copy; {new Date().getFullYear()} Camibook
      </footer>
    );
  }
}

export default Footer;
