/*
used for mongoDB approach
var Mongoose = require('mongoose');
People       = mongoose.model('People');
*/

/*
In my case, I initialized the people array with one
person instead of it being empty
*/
var people = [
  {
    id:0,
    name: "Angelo",
    favoriteCity: "Seattle"
  },
];
/* returns people array */
exports.findAll = function findAll(){
  return people;
};

/* returns person with specified id from people array */
exports.find = function(id){
  var result = people.filter(function(person){
    return person.id === id;
  });
  return result;
};

/* returns people array with new person obj. added */
exports.add = function(new_person){
  people.push(new_person);
  return people;
};

/* returns specified person with favoriteCity changed */
exports.modify = function(name, newCity){
  var result = people.filter(function(person){
    return person.name === name;
  });
  result[0].favoriteCity = newCity;
  return result[0];
};

/* returns person that was deleted from the array */
exports.delete = function(id){
  var deleted =[];
  for(var i=0;i<people.length;i++){
    if(people[i].id === id){
      deleted.push(people[i]);
      people.splice(i,1);
    }
  }
  return deleted;
};

/* returns last added person from the people array */
exports.last = function(){
  return people[people.length-1];
}
