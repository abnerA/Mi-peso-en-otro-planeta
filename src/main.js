const peso = document.getElementById("peso");
const kilo = document.getElementById("kilo");
const libra = document.getElementById("libra");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const gravityEarth = 9.8;
const gravityMars = 3.7;
const gravityJupiter = 24.79;

peso.oninput = function () {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 5);
  }
};

const planets = (planet, gravity) => {
  planet.addEventListener("click", () => {
    const value = peso.value;
    const kl = kilo.checked;
    const lb = libra.checked;
    if (kl) {
      const myPesoPlanet = (value * gravity) / gravityEarth;
      console.log(myPesoPlanet.toFixed(2));
    } else if (lb) {
      const deLbaKl = value / 2.205;
      console.log(`Este es el peso en kilos: ${deLbaKl.toFixed(2)}`);
      const myPesoPlanet = (deLbaKl * gravity) / gravityEarth;
      console.log(myPesoPlanet.toFixed(2));
    } else {
      alert("Error!!");
    }
  });
};

planets(jupiter, gravityJupiter);
planets(mars, gravityMars);

/*mars.addEventListener("click", () => {
  const value = peso.value;
  const kl = kilo.checked;
  const lb = libra.checked;
  if (kl) {
    const myPesoMars = (value * gravityMars) / gravityEarth;
    console.log(myPesoMars.toFixed(2));
  } else if (lb) {
    console.log(value);
    const deLbaKl = value / 2.205;
    console.log(`Este es el peso en kilos: ${deLbaKl.toFixed(2)}`);
    const myPesoMars = (deLbaKl * gravityMars) / gravityEarth;
    console.log(myPesoMars.toFixed(2));
  } else {
    alert("Error!!");
  }
});*/
