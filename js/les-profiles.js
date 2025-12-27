let allUsers = [];
function handleItems(items) {
  allUsers = items;
  displayItems(items);
}

function displayItems(items) {
  items = items.map(({ id, name, email, phone }) => {
    return `
    <div class="card col">
        <img src="https://randomuser.me/api/portraits/men/${id}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${email}</p>
            <p class="card-text">${phone}</p>
            <a href="js/les-profiles/${id}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
  });
  document.getElementById("les-profiles").innerHTML = items.join("");
}

function display() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  fetch(URL)
    .then((Response) => Response.json())
    .then((items) => handleItems(items));
}

//fonction classique
function check(user, query) {
  const { name } = user;
  if (name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
    return true;
  }
  return false;
}

//fonction stocker
const checkUser = function (user, query) {
  const { name } = user;
  return name.toLowerCase().indexOf(query.toLowerCase()) > -1 ? true : false;
};

//fonction flecher toutes les trois fonctions sont valables
const checkOneUser = (user, query) => {
  const { name } = user;
  return name.toLowerCase().indexOf(query.toLowerCase()) > -1 ? true : false;
};

function filter() {
  const query = document.getElementById("search").value;
  //const userToDisplay = allUsers.filter((user) => checkUser(user, query));
  const userToDisplay = allUsers.filter(({ name }) =>
    name.toLowerCase().indexOf(query.toLowerCase()) > -1 ? true : false
  );
  displayItems(userToDisplay);
}
