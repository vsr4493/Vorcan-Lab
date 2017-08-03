const translateError = (msg) => {
  var newErr = new Error(msg);
  return e => { 
    newErr.originalError = e;
    throw newErr;
  }
}

export {translateError};