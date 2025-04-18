document.getElementById("data-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;

  const data = JSON.parse(localStorage.getItem("data")) || [];
  data.push({ title, date, description });
  localStorage.setItem("data", JSON.stringify(data));
  showBlogs();
});

function showBlogs() {
  const data = JSON.parse(localStorage.getItem("data"));
  const list = document.getElementById("data-list");
  list.innerHTML = "";

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
    <h1>${item.title}</h1>
    <p>${item.description}</p>
    <p>${item.date}</p>
    <div class="card-actions">
     <button class="delete" onclick="deleteBlog(${index})">Delete</button>
    </div>
    `;

    list.appendChild(div);
  });
}

showBlogs();

function deleteBlog(index) {
  console.log("deleted value index", index);
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showBlogs();
}
