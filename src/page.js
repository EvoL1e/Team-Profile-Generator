 // Create a function to generate the html file
function generateHTML() {
    
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
    <section>

        <article>
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