export default {
  getEmailFromStore: function() {
    return sessionStorage.getItem('email');
  },
  setEmailInStore: function(emailVal) {
    if (emailVal && emailVal !== '') {
      sessionStorage.setItem('email', emailVal);
      return true;
    } else {
      sessionStorage.removeItem('email');
      return false;
    }
  },
  getLoginToken: function() {
    return sessionStorage.getItem('sessionId');
  },
  setLoginToken: function(token) {
    sessionStorage.setItem('sessionId', token);
  },
  unsetLoginToken: function() {
    sessionStorage.removeItem('sessionId');
  }
}