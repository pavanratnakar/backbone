var Person = Backbone.Model.extend({
    defaults: {
        name: 'Pavan Ratnakar',
        age: 30,
        occupation : 'Developer'
    },
    validate: function(attrs) {
        console.log(attrs);
        if (attrs.age < 0) {
            return 'Age cannot be negative';
        }
    },
    work: function() {
        return this.get('name') + ' is working';
    }
});
var person = new Person({name:'Testing',age:10},{
    'error' : function(model,error){
        console.log(error);
    }
});
// console.log(person);
// person.on('error',function(model,error){
//     console.log(error);
// });
person.set('age',-123,{validate: true});
person.set('name','asdas',{validate: true});
console.log(person);

// var Person = function(config){
//  this.name = config.name;
//  this.age = config.age;
//  this.occupation = config.occupation;
// };

// Person.prototype.work = function(){
//  return 'This peron works in '+this.occupation;
// };