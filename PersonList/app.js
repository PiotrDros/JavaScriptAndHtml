const persons = [
  "John Doe", //
  "Jane Doe", //
  "Frank Dane", //
  "Simon Waber", //
].map((p) => {
  const elem = document.createElement("li");
  elem.textContent = p;
  elem.classList.add("person");

  elem.addEventListener("click", () => elem.classList.toggle("strike"));
  return elem;
});

console.log(persons);

const list = document.querySelector(".list");
persons.forEach((p) => list.append(p));

const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  persons.forEach((p) => {
    const isVisible = p.textContent.toLocaleLowerCase().includes(value);

    p.classList.toggle("hide", !isVisible);
  });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  input.value = "";
  persons.forEach((p) => p.classList.remove("hide"));
});
