const bar = document.querySelector(".bar");
const roller = document.querySelector(".roller");
const toggler = document.querySelector(".toggler");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const arr = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99,
};

bar.addEventListener("click", () => {
  roller.classList.toggle("click");

  if (roller.classList.contains("click")) {
    bar.style.background = "#c9cbf4";
    one.innerHTML = `<div class="card-amount one">
      <h1>
        <span>$</span>${arr.basic}
      </h1>
    </div>`;
    two.innerHTML = ` <div class="card-amount two">
              <h1><span>$</span>${arr.professional}</h1>
            </div>`;

    three.innerHTML = `<div class="card-amount three">
              <h1><span>$</span>${arr.master}</h1>
            </div>`;
  } else {
    bar.style.background = "var(--Linear-Gradient)";
    one.innerHTML = `<div class="card-amount one">
      <h1>
        <span>$</span>199.99
      </h1>
    </div>`;
    two.innerHTML = ` <div class="card-amount two">
              <h1><span>$</span>249.99</h1>
            </div>`;

    three.innerHTML = `<div class="card-amount three">
              <h1><span>$</span>399.99</h1>
            </div>`;
  }
});
