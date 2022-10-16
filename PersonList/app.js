// prettier-ignore
const persons = [
  "John Doe",
  "Jane Doe", 
  "Frank Dane", 
  "Simon Waber", 
].map((p) => {
  const elem = document.createElement("li");
  elem.textContent = p;
  elem.classList.add("person");

  elem.addEventListener("click", () => elem.classList.toggle("strike"));
  return elem;
});

const list = document.querySelector(".list");
persons.forEach((p) => list.append(p));

const searchBox = document.querySelector("input");

searchBox.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  persons.forEach((p) => {
    const isVisible = p.textContent.toLocaleLowerCase().includes(value);

    p.classList.toggle("hide", !isVisible);
  });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  clear(searchBox, persons);
});

function clear(input, persons) {
  input.value = "";
  persons.forEach((p) => p.classList.remove("hide"));
}

document.onkeydown = function(e) {
  if (e.key === "Escape") { 
    clear(searchBox, persons);
}
}
