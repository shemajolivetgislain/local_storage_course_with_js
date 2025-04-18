document.getElementById("data-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  const data = JSON.parse(localStorage.getItem("data")) || [];

  data.push({ title, description, date });
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

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
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
        </div>
        `;
    list.appendChild(div);
  });
}
