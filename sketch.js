let rockets;

function setup() {

  createCanvas(displayWidth, displayHeight*0.884);

  rockets = [];
  for (let i = 0; i < 4; i++) {
    rockets.push(new Rocket);
  }
}

function draw() {

  background(0);

  
  for (let i = 0; i < rockets.length; i++) {
    rockets[i].calculate();
  }
}
