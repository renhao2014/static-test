function Cat(name) {
	this.name = name;
	this.age = 18;
	this.eat = function(fishType) {
		console.log(this.name + ' is eating ' + fishType);
	};

	Cat.prototype.type = 'cat';
	Cat.prototype.play = function(toy) {
		console.log(this.name + ' is playing ' + toy);
	};
}




function oopTest() {
	var cat_tom = new Cat('tom');
	//	console.log(cat_tom.name);
	cat_tom.age = 10;

	var cat_jack = new Cat('jack');
	//	console.log(cat_jack.name);	
	cat_jack.age = 20;

	//	console.log(cat_jack.age);
	//	console.log(cat_tom.age);

	//打印自身成员
//	for(var prop in cat_tom) {
//		console.log(prop + ": " + cat_tom[prop]);
//	}

	cat_tom.eat("shark");
	//	console.log(cat_jack.prototype.constructor); 

	//false
	console.log(cat_jack.eat == cat_tom.eat);

	//prototype
	console.log(cat_jack.type);

	cat_jack.play("ball");
	
}

oopTest();
