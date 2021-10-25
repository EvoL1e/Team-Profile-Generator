const { Module } = require("module");

 // Create a function to generate the html file
function initialHTML() {
    
  return (
  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our Team</title>
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <section id= "Team">

        <article id = "">
            <p> ${name} </p>
            <p> ${jobTitle}
            <p> ${id} </p>
            <p> ${email} </p>
            <p> ${officeNum} <p>
        </article>

    </section>

  </body>
</html>
  `);
}

function managerHTML(data) {
  return (`
        <article id = "Manager">
            <p> ${data.name} </p>
            <p> ${data.role}
            <p> ${data.id} </p>
            <p> ${data.email} </p>
            <p> ${data.officeNum} <p>
        </article>
  `);

}

function engineerHTML(data) {
  return (`
        <article id = "Engineer">
            <H2> ${data.name} </H2>
            <H3> ${data.role} </H3>
            <p> ${data.id} </p>
            <p> ${data.email} </p>
            <p> ${data.github} <p>
        </article>
  `);
}

function internHTML(data) {
  return (`
        <article id = "Intern">
            <p> ${data.name} </p>
            <p> ${data.role}
            <p> ${data.id} </p>
            <p> ${data.email} </p>
            <p> ${data.school} <p>
        </article>
  `);
}

function closingHTML() {
  return(`
    </section>

  </body>
</html>
    `)
}

export { initialHTML, managerHTML, engineerHTML, internHTML, closingHTML };