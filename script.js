// Selectors
d3.selectAll(".selectiontest").style("background-color", "hotpink")

//Note - Can use any CSS selector - class, id, element, attribute etc



// Dynamic Properties
//Give a random color
d3.selectAll(".dynamictest").style("background-color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

//Set width according to data
d3.selectAll(".box")
  .data([40, 80, 150, 160, 230, 420])
    .style("width", function(d) { return d + "px"; });



// Enter and Exit - allow us to change our data set dynamically
//Data
let numbers = [4, 8, 15, 16, 23, 42]

function enterAndExit() {
//Initial Changes
  var selection = d3.select(".enter-and-exit")
    .selectAll(".circle")
    .data(numbers)
      .text(function(d) { return d;})
//New divs for extra data
  selection.enter()
    .append("div").attr("class", "circle")
    .text(function(d) { return d; })
//Remove divs if not enough data
  selection.exit().remove();
}

enterAndExit()



// Transitions
// d3.select("body").transition().delay(3000).style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });
