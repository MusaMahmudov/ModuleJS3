let main = createMain();
let section1Main = createSection();
let section2Main = createSection();
section1Main.setAttribute("class", "heading");
section2Main.setAttribute("class", "content");
let img = new Image();
img.src = "./src/components/main/123.jpg";
section1Main.innerHTML = "Products";
section2Main.appendChild(img);
let info = createDiv();
info.setAttribute("class", "info");

let draft = createDiv();
draft.setAttribute("class", "draft");
let wallPaper = createH1();
let b = createB();
wallPaper.innerHTML = "8K Gradient Wallpaper Pack";
b.innerHTML = "Draft";
draft.appendChild(wallPaper);
draft.appendChild(b);
info.appendChild(draft);

let parts = createDiv();
parts.setAttribute("class", "parts");

let partsArr = [
  {
    h2: "Sales",
    h3: "0",
  },
  {
    h2: "Revenue",
    h3: "0",
  },
  {
    h2: "Views",
    h3: "0",
  },
  {
    h2: "Conversion",
    h3: "0",
  },
];
for (let index = 0; index < partsArr.length; index++) {
  let part = createDiv();
  part.setAttribute("class", "part");
  let values = Object.entries(partsArr[index]);
  console.log(values);
  let h2 = createH2();
  h2.innerHTML = `${values[0][1]}`;
  part.appendChild(h2);
  let h3 = createH3();
  h3.innerHTML = `${values[1][1]}`;
  part.appendChild(h3);

  parts.appendChild(part);
}
info.appendChild(parts);
section2Main.appendChild(info);
main.appendChild(section1Main);
main.appendChild(section2Main);
container.appendChild(main);
