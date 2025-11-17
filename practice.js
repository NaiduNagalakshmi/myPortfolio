// let name="nagalakshmi"
// let age=30
// let gender="female"
// let salary=30000
class person{
    static name="nagalakshmi"
    constructor(name,age,gender,salary){
        this.name=name;                 //intance variables
        this.age=age;                    //intance variables
        this.gender=gender;                //intance variables
        this.salary=salary;                  //intance variables
    } 
    updatesalary(newsalary){            //instance method
        this.salary=newsalary;
    }
}
let jsperson=new person("nagalakshmi",30,"female",30000)
console.log(jsperson.salary)
jsperson.updatesalary(40000)
console.log(jsperson.salary)
let jsparent=new person("nagalakshmi",25,"male",29000)

// console.log(jsperson)
// console.log(jsparent)
// console.log(person.name)