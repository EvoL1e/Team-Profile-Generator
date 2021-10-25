// Making the constructors for each of the team members with the required data that will be passed through
function Manager(name, id, email, officeNum) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
}

function Employee(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}