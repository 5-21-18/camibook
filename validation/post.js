const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  //this turn the values 'null or undefined' into an empty string because 'Validator.isEmty' only validates empty strings
  data.bname = !isEmpty(data.bname) ? data.bname : "";

  if (
    !Validator.isLength(data.bname, {
      min: 10,
      max: 200
    })
  ) {
    errors.bname = "Post must be between 10 and 200 characters";
  }

  if (Validator.isEmpty(data.bname)) {
    errors.bname = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
