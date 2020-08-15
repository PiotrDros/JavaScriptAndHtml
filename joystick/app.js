window.addEventListener("load", function () {
  const circle = document.getElementsByClassName("circle")[0];
  const defaultTop = circle.style.top;
  const defaultLeft = circle.style.left;

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") {
      circle.style.top = "0px";
    }

    if (e.code === "ArrowDown") {
      circle.style.top = "750px";
    }

    if (e.code === "ArrowLeft") {
      circle.style.left = "0px";
    }

    if (e.code === "ArrowRight") {
      circle.style.left = "750px";
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
      circle.style.top = defaultTop;
    }

    if (e.code === "ArrowDown") {
      circle.style.top = defaultTop;
    }

    if (e.code === "ArrowLeft") {
      circle.style.left = defaultLeft;
    }

    if (e.code === "ArrowRight") {
      circle.style.left = defaultLeft;
    }
  });
});
