const fs = require("fs");
const path = require("path");
const generateCSS = require("./generateCSS");
let cardArr = [];
let cardFill = "";

class Card {
  constructor(content) {
    this.content = content;
  }
}


const getSpec = (e) => {
  let specTitle, specVal;
  if (e.getRole() == "Manager") {
    specTitle = "Office Number";
    specVal = e.officeNumber;
    iconA = '<i class="bi bi-kanban-fill"></i>';
    iconB = '<i class="bi bi-telephone-fill"></i>';
  } 
  else if (e.getRole() == "Engineer") {
    specTitle = "GitHub";
    specVal = e.github;
    iconA = '<i class="bi bi-rulers"></i>';
    iconB = '<i class="bi bi-github"></i>';
  } 
  else {
    specTitle = "School";
    specVal = e.school;
    iconA = '<i class="bi bi-eyeglasses"></i>';
    iconB = '<i class="bi bi-book-fill"></i>';
  }
   let spec = {
     title: specTitle,
     value: specVal,
     iconA: iconA,
     iconB: iconB
   };
  return spec;
};

const createCards = (emp) => {
  console.log("creating cards");
  console.log(emp);
  emp.forEach((e) => {
    // create a card for each person and add it to the section
    let card = `<div class="col mt-4 d-flex justify-content-center">
        <div class="card h-100" style="width: 19rem">
          <div class="card-header bg-info">
            <h5 class="card-title">${e.name}</h5>
            <h6 class="card-subtitle mb-2">${
              getSpec(e).iconA
            } ${e.getRole()}</h6>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">
              <table class="table table-striped table-bordered">
                <tr>
                  <th scope="col"><i class="bi bi-person-badge-fill"></i> ID</th>
                  <td>${e.id}</td>
                </tr>
                <tr>
                  <th scope="col"><i class="bi bi-envelope-fill"></i> Email</th>
                  <td><a href="mailto:${e.email}">${e.email}</a></td>
                </tr>
                <tr>
                  <th scope="col">${getSpec(e).iconB} ${getSpec(e).title}</th>
                  <td>${getSpec(e).value}</td>
                </tr>
              </table>
            </p>
          </div>
        </div>
      </div> `;
    cardArr.push(new Card(card));
  });
  cardArr.forEach((e) => (cardFill += e.content));
  generateHtml(cardFill);
};

const generateHtml = (data) => {
  let content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Meet The Team!</title>
  </head>
  <body>
    <header class="jumbotron bg-info p-3"><h1 class="text-center">Meet The Team!</h1></header>
    <main class="container main-wrapper min-vh-100"">
      <div class="row">
      ${data}
      </div>
    </main>
  <footer class="bg-info text-center py-4 h5">A Casey Rowlands Product</footer>
  </body>
</html>
  `;
  writeToFile("index.html", content);
  writeToFile("style.css", generateCSS.styling());
};

// Creates files using path and fs
const writeToFile = (fileName, content) => {
  // Create file path
  fs.writeFileSync(path.join(process.cwd(),'/dist/', fileName), content);
};

module.exports = createCards;