var getUser = (id, callback) => {
  var user = {
    id,
    name: "Vikram"
  };
  callback(user);
};
getUser(31, userObject => {
  console.log(userObject);
});
