function onButton() {
    document.getElementById("myLightBulb").style.backgroundColor = "yellow";
    document.getElementById("myLightBulb").style.color = "black";
}

function offButton() {
    document.getElementById("myLightBulb").style.backgroundColor = "rgb(71, 71, 73)";
    document.getElementById("myLightBulb").style.color = "white";
}


function toggleButton() {
    var property = document.getElementById("myLightBulb");
    property.className = 'toggled' == property.className ? '' : 'toggled';
}

function endButton() {
    document.getElementById("buttons").disabled = true;
  }