let DigitalPal = function(hungry=false, sleepy=false, bored=true, age=0) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    //Setters

    //Getters

    this.feed = function(){
        if(this.hungry){
            console.log('That was yummy!')
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log('No thanks I dont want your food :/ ');
        }
    }

    this.sleep = function(){
        if(this.sleepy){
            console.log('zzzzzZZZZZZZZZzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log(`"No way I'm not tired!"`);
        }
    }

    this.play = function(){
        if(this.bored) {
            console.log('Yay! lets play!');
            this.bored = false;
            this.hungry = true;
        } else {
            console.log('Not right now. Maybe later!')
        }
    }
    this.increaseAge = function(){
        this.age++;
        console.log(`Happy Birthday to me! ${this.age} years old`);
    }
}


let animals = {};


animals.dog = new DigitalPal();
animals.dog.outside = false;

animals["dog"]["bark"] = function(){
    console.log('Woff! Woff!')
}

animals.dog.letOutside = function(){
    if(!this.outside){
        console.log('Yay! I love the outdoors');
        this.outside = true;
        this.bark();
    }
}


animals.dog.letInside = function(){
    if(this.outside){
        console.log('Going inside....');
        this.outside = false;
    }
    else {
        console.log(`We're already inside`);
    }
}

animals.cat = new DigitalPal();
animals.cat.merp = function(){
    console.log('Merp Merp');
}
animals.cat.stomach = 0;


animals.cat.eatsFish = function(){
    if(this.stomach === 0){
        console.log('Ate a fish')
        this.stomach += 1;
    }
}

console.log(animals);
console.log("DOG")
animals.dog.bark()
animals.dog.feed()
animals.dog.feed()
animals.dog.sleep()
animals.dog.increaseAge()
console.log("CAT")
animals.cat.merp()
animals.cat.sleep()
animals.cat.increaseAge();
animals.cat.eatsFish();




