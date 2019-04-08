// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        return `hello my name is ${this.name}, i am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(){
        return `today we are learning about ${this.subject}`
    }
    grade(){
        return `${this.name} recieves a perfect score on ${this.subject}`
    }
}

class Students extends Instructor{
    constructor(studentsAttributes){
        super(studentsAttributes);
        this.previousBackground = studentsAttributes.previousBackground;
        this.className = studentsAttributes.className;
        this.favSubjects = studentsAttributes.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        return `${this.name} has begun the sprint challenge on ${this.subject}`
    }
}

class ProjectManagers extends Students{
    constructor(projectManagersAttributes){
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp(){
        return `${this.name} announces to ${this.channel}`
    }
    debugsCode(){
        return `${this.name} debugs ${this.name}'s code on ${this.subject}`
    }
}
//// stuff
