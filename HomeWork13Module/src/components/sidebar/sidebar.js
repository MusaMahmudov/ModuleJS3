export function createSidebar() {
  let container = document.getElementsByClassName("container")[0];

  let sidebar = document.createElement("aside");
  sidebar.innerHTML = ` <div class="icon">
    <i class="fa-brands fa-linkedin"></i>
    </div>
    <section class="items">
    <ul>
      <li><i class="fa-solid fa-house"></i> Dashboard</li>
      <li><i class="fa-solid fa-gift"></i>Products</li>
      <li><i class="fa-solid fa-arrow-trend-up"></i>Analitics</li>
      <li><i class="fa-solid fa-dollar-sign"></i>Affialities</li>
      <li><i class="fa-regular fa-user"></i>Audience</li>
      <li><i class="fa-solid fa-gear"></i>Settings</li>
    </ul>
    </section>
    <button id="close">X</button>
    
    `;
  container.appendChild(sidebar);

  let closeBtn = document.getElementById("close");
  let openBtn = document.createElement("button");
  openBtn.setAttribute("id", "open");

  openBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  container.appendChild(openBtn);

  openBtn.setAttribute("class", "hidden");
  closeBtn.addEventListener("click", () => {
    // sidebar.classList.add("hidden");
    sidebar.style.transform = "translateX(-270px)";
    sidebar.style.width = "0px";

    openBtn.classList.remove("hidden");
  });
  openBtn.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0px)";
    sidebar.style.width = "200px";
    openBtn.classList.add("hidden");
  });
}
