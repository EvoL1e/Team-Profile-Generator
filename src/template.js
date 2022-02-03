const theTeam = (team) => {

    const generateManager = (manager) => {
        return` 
        <div class="container">
        <div class="team-cards row">
            <div class="card">
                <div class="card-body">
                    <div class="container">
                        <div class="team-cards row">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title" > ${manager.getName()} </h4>
                                    <h5 class="card-subtitle"> ${manager.getRole()} </h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> ID: ${manager.getId()} </li>
                                        <li class="list-group-item"> Email: ${manager.getEmail()} </li>
                                        <li class="list-group-item"> ${manager.getOfficeNumber()} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`
    };

    const generateEngineer = (engineer) => {
        return` 
        <div class="container">
        <div class="team-cards row">
            <div class="card">
                <div class="card-body">
                    <div class="container">
                        <div class="team-cards row">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title" > ${engineer.getName()} </h4>
                                    <h5 class="card-subtitle"> ${engineer.getRole()} </h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> ID: ${engineer.getId()} </li>
                                        <li class="list-group-item"> Email: ${engineer.getEmail()} </li>
                                        <li class="list-group-item"> ${engineer.getGithub()} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`
    };

    const generateIntern = (intern) => {
        return` 
        <div class="container">
        <div class="team-cards row">
            <div class="card">
                <div class="card-body">
                    <div class="container">
                        <div class="team-cards row">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title" > ${intern.getName()} </h4>
                                    <h5 class="card-subtitle"> ${intern.getRole()} </h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> ID: ${intern.getId()} </li>
                                        <li class="list-group-item"> Email: ${intern.getEmail()} </li>
                                        <li class="list-group-item"> ${intern.getSchool()} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`
    };
    
    const htmlPage = [];
      htmlPage.push(
        team
  
          .filter((employee) => employee.getRole() === "Manager")
          .map((manager) => generateManager(manager))
      );
      htmlPage.push(
        team
  
          .filter((employee) => employee.getRole() === "Engineer")
          .map((engineer) => generateEngineer(engineer))
          .join("")
      );
  
      htmlPage.push(
        team
  
          .filter((employee) => employee.getRole() === "Intern")
          .map((intern) => generateIntern(intern))
          .join("")
      );

      return htmlPage.join("");
    };

    module.exports = (team) => {
        return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>

<body>

    <header>
            <h1> My Team </h1>
         
        </header>

        ${theTeam(team)}

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                        crossorigin="anonymous"></script>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                        crossorigin="anonymous"></script>
</body>

</html> `

}

