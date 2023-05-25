import {
  createDiv,
  createSection,
  createNav,
  createP,
  createH1,
  createH2,
  createH3,
  createB,
  createMain,
} from "./utils.js";

export function createNavbar() {
  let container = document.getElementsByClassName("container")[0];
  let navbar = createNav();

  let section1 = createSection();
  section1.setAttribute("class", "items");
  let section2 = createSection();
  section2.setAttribute("class", "heading");
  section2.innerHTML = "Stats";
  navbar.appendChild(section2);
  let itemsArr = [
    {
      fr: "Sales",
      sc: "2,273",
      th: "12% MoM",
    },
    {
      fr: "REVENUE",
      sc: "46,920$",
      th: "7% MoM",
    },
    {
      fr: "VIEWS",
      sc: "106,4k",
      th: "4% MoM",
    },
  ];
  for (let index = 0; index < itemsArr.length; index++) {
    let div = createDiv();
    div.setAttribute("class", "item");
    let values = Object.entries(itemsArr[index]);
    for (let i = 0; i < 3; i++) {
      let p = createP();
      p.setAttribute("class", `${values[i][0]}`);
      p.innerHTML = `${values[i][1]}`;
      div.appendChild(p);
    }
    section1.appendChild(div);
  }

  navbar.appendChild(section1);
  container.appendChild(navbar);
}
