var User = {};
module.exports = User;

/**
 *
 * Gathers important user info.
 *
 * @param {object} authUser
 */
User.info = function(authUser) {
  var user = {firstName: authUser.info.name.split(/\s+/)[0], username: authUser.info.name, email: authUser.info.email, lastName: authUser.info.name.split(/\s+/)[1]};
  return user;
}
