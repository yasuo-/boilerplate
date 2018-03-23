/** @flow */

/**
 * isEmpty
 * @param {String} str
 */
export const isEmpty = (str: string) => (!str || 0 === str.length);

/**
 * validateEmail
 * @param {String} email 
 */
export const validateEmail = (email: string) => {
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filter.test(email)) return true;

  return false;
}

/**
 * validatePassword
 * @param {string} password 
 */
export const validatePassword = (password: string) => password.length > 6
  ? (true)
  : (false)

/**
 * confirmPassword
 * @param {string} c_password 
 * @param {string} password 
 */
export const confirmPassword = (c_password: string, password: string) => c_password === password
  ? (true)
  : (false)

/**
 * validate
 * @param {Object} form 
 */
export const validate = (form: Object) => {
  let error = {};
  let success = true;

  const keys = Object.keys(form);
  const length = keys.length;

  keys.slice(0, length).map(field => {
    if (field !== "error") {
      var { type, value } = form[field];
      if (isEmpty(value)) {
        error[field] = 'Your ' + field + ' is required';
        success = false;
      } else {
        error[field] = '';

        if (type === "email" && !validateEmail(value)) {
          error[field] = 'Enter a valid email address';
          success = false;
        } else if (type === "password" && !validatePassword(value)) {
          error[field] = 'Password must be at least 6 characters';
          success = false;
        } else if (type === "confirm_password" && !confirmPassword(value, form["password"]['value'])) {
          error[field] = 'Password does not match.';
          success = false;
        }
      }
    }
  });

  return { success, error };
}