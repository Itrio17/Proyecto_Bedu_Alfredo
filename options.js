
// document.getElementsByClassName("option-column").addEventListener("mouseover", mouseOver);
// document.getElementsByClassName("option-column").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementsByClassName("option-column").style.box-shadow === "black";
//     return mouseOver();
// }

// function mouseOut() {
//     document.getElementsByClassName("option-column").style.box-shadow === none;
//     return mouseOut();
// }

let shadow = document.getElementsByClassName("card");

shadow.addEventListener("mouseover", function( event ) {
    event.target.style.border == "1px solid";
    // event.target.style.padding == "10px";
    // event.target.style.box-shadow == "5px 10px 20px 2px red";
});



let test = document.getElementById("test");

test.addEventListener("mouseenter", function( event ) {

    event.target.style.color = "purple";
    setTimeout(function() {
        event.target.style.color = "";
}, 500);
}, false);


test.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
}, 500);
}, false);