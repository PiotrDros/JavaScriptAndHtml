const state = {
};

const controls = {};

const treeImg = document.getElementById("tree");
const mainDiv = document.getElementById("main");

const updateImage = () => {
  treeImg.style.filter = Object.entries(state)
    .map((a) => a[0] + "(" + a[1] + ")")
    .join(" ");

  for (const [controlName, control] of Object.entries(controls)) {
    for (const [stateName, stateValue] of Object.entries(state)) {
      if (controlName.startsWith(stateName)) {
        control.value = stateValue
          .replace("deg", "")
          .replace("%", "")
          .replace("px", "")
      }
    }
  }
}

function register(id, unit, defaultValue = 0, minValue = 0, maxValue = 100) {
  state[id] = defaultValue + unit;

  const div = document.createElement("div");
  mainDiv.appendChild(div);
  const p = document.createElement("p");
  p.innerHTML = id;
  div.appendChild(p)

  const slider = document.createElement("input");
  slider.type = "range"
  slider.value = defaultValue;
  slider.min = minValue;
  slider.max = maxValue;
  div.appendChild(slider)

  controls[id + "Slider"] = slider;
  slider.oninput = () => {
    state[id] = slider.value + unit;
    updateImage();
  };


  const p2 = document.createElement("p");
  p2.innerHTML = "Value "
  div.appendChild(p2)
  const sliderValue =  document.createElement("input");
  p2.appendChild(sliderValue)
  controls[id + "SliderValue"] = sliderValue;
  sliderValue.oninput = () => {
    state[id] = sliderValue.value + unit;
    updateImage();
  };
}

register("hue-rotate", "deg", 0, 0, 360);
register("blur", "px");
register("invert", "%");
register("saturate", "%", 100, 0, 1000);
register("sepia", "%");

updateImage();

