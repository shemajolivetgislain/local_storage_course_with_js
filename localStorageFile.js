document.getElementById("data-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  const data = JSON.parse(localStorage.getItem("data")) || [];
  console.log("Before pushing into local storage ", data);
  data.push({ title, description, date });
  localStorage.setItem("data", JSON.stringify(data));
  getBlog();
});

function getBlog() {
  const data = JSON.parse(localStorage.getItem("data"));
  const list = document.getElementById("data-list");
  list.innerHTML = "";

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <h1>${item.title}</h1>
    <p>${item.description}</p>
    <p>${item / date}</p>
    <div class="card-action>
        <button class="delete" onclick="deleteBlog(${index})">Delete</button>
    </div>
    `;
    list.appendChild(div);
  });
}

getBlog();
