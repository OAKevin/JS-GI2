class pii {     //established a class
    #ssn;       //private ssn 
    
    constructor(){
        this.#ssn = 123456789       //exports a private property
        this.name = "Kevin"         //exports a public property
    }
}

console.log(new pii) //creates an instace of the class pii