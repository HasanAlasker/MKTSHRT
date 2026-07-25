export const generateCode = () => {
  const length = 6;
  const allowedChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charsLength = allowedChars.length;

  let code = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charsLength);
    code += allowedChars[randomIndex];
  }

  return code;
};
