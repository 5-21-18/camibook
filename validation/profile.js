const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  //this turn the values 'null or undefined' into an empty string because Validator.isEmty only validates empty strings
  data.handle = !isEmpty(data.handle) ? data.handle : "";

  if (
    !Validator.isLength(data.handle, {
      min: 5,
      max: 20
    })
  ) {
    errors.handle = "Handle must be between 5 and 20 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle is require";
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
