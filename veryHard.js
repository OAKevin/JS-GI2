function person(name, job, age){
    this.name = name      //name property
    this.job = job      //job property
    this.age = age //age property
    this.exercise = function(){  //function for exercise 
        console.log("Running is fun! - said no one ever.");
    }
    this.fetchJob = function(){
        console.log(this.name ,"is a", this.job);//logs name and job
    }
};

function programmer(name, job, age, languages) {
    person.call(this, name, job, age);
    this.busy = "true";
    this.languages = languages
    this.completeTask = function(){
        this.busy = 0       //sets busy to false
    }
    this.acceptNewTask = function(){
        this.busy = 1       //sets busy to true
    }
    this.offerNewTask = function(){
        if (this.busy){
            console.log(name,"can't accept any tasks right now")    //if busy is true
        }else{
            console.log(name,"would love to take on a new responsibility")
        }
    }
    this.learnLanguage = function(newlanguages){
        languages.push(newlanguages)            //adds the new languages parameter to the languages property
    }
    this.listLanguage = function(){
        console.log(languages)      //lists the languages
    }
    this.howOld = () =>console.log(this.age);  //ES6 logging the age
}
const kevin = new programmer("Kevin", "Developer", 23, ["JavaScript, Python"]); //test1
kevin.exercise()
kevin.fetchJob()
kevin.completeTask()
kevin.offerNewTask()
kevin.learnLanguage("C")
kevin.listLanguage()

const john = new programmer("John", "Back-Developer", 24, ["JavaScript, Python"]);//test 2
john.exercise()
john.fetchJob()
john.completeTask()
john.offerNewTask()
john.learnLanguage("C#, C++")
john.listLanguage()
john.howOld()