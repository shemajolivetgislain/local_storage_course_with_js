document.getElementById("data-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  console.log("Added title", title);

  const data = JSON.parse(localStorage.getItem("data")) || [];

  data.push({ title, description, date });

  localStorage.setItem("data", JSON.stringify(data));

  dataFetch();
});

function dataFetch() {
  const data = JSON.parse(localStorage.getItem("data"));
  const list = document.getElementById("data-list");
  list.innerHTML = "";

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
    <h1>${item.title}</h1>
    <p>${item.description}</p>
    <p>${item.date}
    <div class="card-actions">
      <button class="edit" onclick="">Edit</button>
      <button class="delete" onclick="deleteBlog(${index})">Delete</button>
    </div>
    `;

    list.appendChild(div);
  });
}
dataFetch();

function deleteBlog(index) {
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);

  localStorage.setItem("data", JSON.stringify(data));
  dataFetch();
}
