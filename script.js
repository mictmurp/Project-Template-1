// Let's start with some default data.
var myData = [
  {
    front: "PlumberWrench.png",
    //credit: "Photo by Wikipedia",
    back: "<b>Plumber Wrench</b></br>Handtool</br>A plumber wrench is a pipe wrench used to rotate plumbing pipes. It is adjusted to different pipe diameters by rotating the key ring. Its advantage is that it grips with significant force without needing to engage a nut."
  },
  {
    front: "CompoundMiterSaw.png",
    //credit: "Photo by DeWalt"
    back: "<b>Compound Miter Saw</b></br>Power Tool</br>A specialized tool that lets you make cuts at a variety of angles featuring blades that pivot left and right for angled cuts and tilt in a single direction for beveled cuts. Manipulating the saw on both of its axes at once yields a compound miter cut."
  },
  {
    front: "HammerDrill.png",
    //credit: "Photo by DeWalt"
    back: "<b>Hammer Drill</b></br>Power Tool</br>A power drill that works by delivering a rapid succession of blows, used chiefly for drilling in masonry or rock."
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
           <img src="imgs/${item.front}">
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