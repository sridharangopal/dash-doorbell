// Dial Liquid Hand Soap Dash MAC - ac:63:be:66:90:d3
var dash_button = require('node-dash-button');
var config = require('config');

console.log("Press Ctrl + C to stop script ...");
var dash = dash_button(config.get('dash.backdoor-mac'), null, 5000, "all"); //address from step above

dash.on("detected", function (){
  console.log("dash button pressed");
});
