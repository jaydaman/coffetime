// This is where it all goes :)

// Random Box-color generator.
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var boxes = document.querySelectorAll(".grid-h-brick");

for (i = 0; i < boxes.length; i++) {
  // Pick a random color from the array 'colors'.
  boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  // boxes[i].style.width = '100px';
  // boxes[i].style.height = '100px';
  // boxes[i].style.display = 'inline-block';
}
