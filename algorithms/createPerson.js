const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(newFirst) {
    fullName = newFirst + " " + fullName.split(' ')[1];
  };
  this.setLastName = function(newLast) {
    fullName = fullName.split(' ')[0] + " " + newLast;
  };
  this.setFullName = function(newName) {
    fullName = newName;
  };
}