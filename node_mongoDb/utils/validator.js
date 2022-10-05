
function validateUserInput(username, email, password) {

  const validUsername = validate(username, new RegExp('\\w{2,255}', 'g'), 6, 255);
  const validEmail = validate(email, new RegExp('\\S{2,255}@\\S{2,255}\\.\\S{2,9}', 'g'), 4, 255);
  const validPassword = validate(password,  new RegExp('^\\S{6,255}$', 'g'), 6, 255);

   return { validUsername, validEmail, validPassword };
}


function validate(input, reg, min, max) {
  // Validate length of string.
  const validLength = input.length >= min && input.length <= max;

  console.log(`Input: ${input}: ${validLength}, length: ${input.length}`);
 
  if(!validLength) return false;

  // The reg returns false for no invalid token (actual result is null).
  const result = input.match(reg);

  return !!result;
}

 module.exports = {    
    validateUserInput
 };

