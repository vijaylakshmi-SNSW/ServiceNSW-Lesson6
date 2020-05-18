// //Q7. Create a static method in the class Pet called getOwnerById that takes 2 arguments, 
// the first should be a pet object and the second should be an array of owners. The function should return the full name of the 
// owner with an id matching the ownerId of the pet or else return an error message.

class Owner {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }

    getFullName() {
        return `${this.givenName} ${this.familyName}`;
    }
}



class Pet {
    constructor (givenName, age, ownerId,){
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }
    static getOwnerById (pets, owners){
        let foundOwner = true;
        for (let i = 0; i < owners.length; i++) {
            const owner = owners[i];
            if(owner.id === myPet.ownerId){
                foundOwner = owner;
                break;
            }
            
        }
            if(!foundOwner){
                return "ERROR: Owner not found";
            }
            return foundOwner.getFullName()
     }


    }
    
    let myPet = new Pet ("Rex", "Parker", 222);

    let owners = [new Owner("Lak","Gov1", 20), 
                new Owner("Laksh","Gov2", 25),  
                new Owner("Lakshmi","Gov3", 222)]


console.log(Pet.getOwnerById(myPet, owners));

