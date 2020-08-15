window.addEventListener("load", function () {
  const circleHorizontal = document.getElementById("circle-horizontal");
  const circleVertical = document.getElementById("circle-vertical");

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") {
      circleVertical.classList.add("vertical-up");
    }

    if (e.code === "ArrowDown") {
      circleVertical.classList.add("vertical-down");
    }

    if (e.code === "ArrowLeft") {
      circleHorizontal.classList.add("horizontal-left");
    }

    if (e.code === "ArrowRight") {
      circleHorizontal.classList.add("horizontal-right");
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
      circleVertical.classList.remove("vertical-up");
    }

    if (e.code === "ArrowDown") {
      circleVertical.classList.remove("vertical-down");
    }

    if (e.code === "ArrowLeft") {
      circleHorizontal.classList.remove("horizontal-left");
    }

    if (e.code === "ArrowRight") {
      circleHorizontal.classList.remove("horizontal-right");
    }
  });
});
