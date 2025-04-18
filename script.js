document
  .getElementById("data-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({ title, description, date });
    localStorage.setItem("data", JSON.stringify(data));

    document.getElementById("data-form").reset();
    displayData();
  });

function displayData() {
  const list = document.getElementById("data-list");
  const data = JSON.parse(localStorage.getItem("data")) || [];

  list.innerHTML = "";

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <small>Date: ${item.date}</small>
      <div class="card-actions">
        <button class="edit" onclick="editData(${index})">Edit</button>
        <button class="delete" onclick="deleteData(${index})">Delete</button>
      </div>
    `;
    list.appendChild(div);
  });
}
displayData();

function deleteData(index) {
  console.log(index);
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}
