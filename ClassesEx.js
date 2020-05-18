// Q1.
class Pet {

}

// Q2. 
class Pet {
givenName ;
age ;
ownerId ;
}

// Q3.
class Pet {
   constructor (givenName, age, ownerId,){
       this.givenName = givenName;
       this.age = age;
       this.ownerId = ownerId;
   }
    }
    let myPet = new Pet("Jimmy", "5", "123");
    console.log(myPet);

    // Q4
class Owner {
    givenName ;
   familyName;
    id ;
}
console.log(new Owner());

//05
class Owner {
    givenName ;
   familyName;
    id ;
    constructor (givenName, familyName, id,){
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
}
console.log(new Owner("luke", "parker", 12));

//Q6.
class Owner {
    constructor (givenName, familyName, id,){
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
getFullName(){
return `${this.givenName} ${this.familyName}`
}
}
// let me = new Owner ("Lakshmi", "Gov", 3);
// console.log(me.getFullName());

let owners = [new Owner ("Lak","Gov1", 20), 
            new Owner ("Laksh","Gov2", 25),  
            new Owner ("Lakshmi","Gov3", 22)];

for (let i = 0; i < owners.length; i++) {
    let theOwner = owners[i];
    console.log(theOwner.getFullName()); 
            }
