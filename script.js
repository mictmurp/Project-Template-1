// Let's start with some default data.
var myData = [
  {
    front: "Title 1",
    back: "Detail 1"
  },
  {
    front: "Title 2",
    back: "Detail 2"
  }
];

// This is the first function to run when the page loads
function setup() {
  render();
}

// We will handle what is displayed in this function
function render() {
  var myOutput = "";
  myData.forEach(function (item, index) {
    myOutput += `
      <div class="item flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            ${item.front}
          </div>
          <div class="flip-card-back">
            ${item.back}
          </div>
        </div>
      </div>`;
  });
  document.querySelector("#results").innerHTML = myOutput;
}

// This kicks things off once the page is loaded
window.onload = setup();