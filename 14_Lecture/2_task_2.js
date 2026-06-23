// Employee System : Hybrid Inheritence
// follows ->  Hierarchical + Multilevel Inheritence...

class employee{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    work(){
        console.log(`${this.name} is working`);
    }

    showDetails(){
        console.log(`ID : ${this.id}`);
        console.log(`name : ${this.name}`);
    }
}

class developer extends employee{
    constructor(id, name, language){
        super(id,name);
        this.language = language;
    }
    writeCode(){
        console.log(`${this.name} is working with ${this.language} very perfectly`);
    }
    work(){
        console.log(`${this.name} is working in a MERN project`);
    }
}

class frontendDeveloper extends employee{
    constructor(id, name, framework){
        super(id,name);
        this.framework = framework;
    }

    buildUI(){
        console.log(`${this.name} is building the User Interface with ${this.framework} framework`);
    }

    work(){
        console.log(`${this.name} is working in frontend side`);
    }
}

class manager extends employee{
    constructor(id, name, teamSize){
        super(id,name);
        this.teamSize = teamSize;
    }
    conductMeeting(){
        console.log(`${this.name} is conducting the meeting with a team size of ${this.teamSize} alone`);
    }
    work(){
        console.log(`${this.name} is attending and managing the meeting.`);
    }
}

// Object creation... and calling methods...

const Employee = new employee(101,"Yash");
Employee.work();
Employee.showDetails();

const Developer = new developer(100, "Aman", "MERN stack");
Developer.writeCode();
Developer.work();

const FrontEnd = new frontendDeveloper (102, "Aryan", "Javascript","Bootstrap");
FrontEnd.buildUI();
FrontEnd.work();

const Manager = new manager(103, "Naman Sir", 100);
Manager.conductMeeting();
Manager.work();