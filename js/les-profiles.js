function handleItems(items) {
  console.log(items);

  items = items.map(
    ({ id, name, email, phone, address: { city } }) =>
      `
    <div class="card col">
        <img src="https://randomuser.me/api/portraits/men/${id}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${email}</p>
            <p class="card-text">${phone}</p>
            <a href="js/les-profiles/${id}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
  );
  document.getElementById("les-profiles").innerHTML = items.join("");
}

function display() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  fetch(URL)
    .then((Response) => Response.json())
    .then((items) => handleItems(items));
}
