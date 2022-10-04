// Validator for the username
// min length: 6
// max length: 255
// only [a-z][A-Z][0-9]
function validateUsername(username) {
  const reg = new RegExp('[^\\w*]', 'g');

  // Validate length of string.
  const validLength = username.length >= 6 && username.length <= 255;
 
  if(!validLength) return false;

  // The reg returns false for no invalid token (actual result is null).
  const result = username.match(reg);

  return !result;
}



 module.exports = {    
    validateUsername
 };

