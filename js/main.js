var Person = function(config){
	this.name = config.name;
	this.age = config.age;
	this.occupation = config.occupation;
};

Person.prototype.work = function(){
	return 'This peron works in '+this.occupation;
};