var saveBtn = document.querySelector("#btn1");
var saveBtn2 = document.querySelector("#btn2");
var saveBtn3 = document.querySelector("#btn3");
var saveBtn4 = document.querySelector("#btn4");
var saveBtn5 = document.querySelector("#btn5");
var saveBtn6 = document.querySelector("#btn6");
var saveBtn7 = document.querySelector("#btn7");
var saveBtn8 = document.querySelector("#btn8");
var saveBtn9 = document.querySelector("#btn9");
var formIput1 = document.querySelector("#nineAm");
var formIput2 = document.querySelector("#tenAm");
var formIput3 = document.querySelector("#elevenAm");
var formIput4 = document.querySelector("#twelve");
var formIput5 = document.querySelector("#one");
var formIput6 = document.querySelector("#two");
var formIput7 = document.querySelector("#three");
var formIput8 = document.querySelector("#four");
var formIput9 = document.querySelector("#five");
var a = moment().hours();

console.log("hours is: ",a);

$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'))

function timeColor() {
        var currentTime = a;
        var timePick = $(".timePick");
    
        for (var i= 0; i < timePick.length; i++) {
               var location = timePick[i].id;
               var change = document.getElementById(timePick[i].id);
               
    
             if (location < currentTime) {
                change.classList.add("past");
             } else if (location > currentTime) {
                change.classList.add("future");
                } else {
                change.classList.add("present");
             }
            
        }
}

renderLast();
timeColor();



saveBtn.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea1 = document.querySelector("#nineAm").value;
    localStorage.setItem("textArea1", textArea1);
    renderLast();
    
})

saveBtn2.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea2 = document.querySelector("#tenAm").value;
    localStorage.setItem("textArea2", textArea2);
    renderLast();
})

saveBtn3.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea3 = document.querySelector("#elevenAm").value;
    localStorage.setItem("textArea3", textArea3);
    renderLast();
})

saveBtn4.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea4 = document.querySelector("#twelve").value;
    localStorage.setItem("textArea4", textArea4);
    renderLast();
})

saveBtn5.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea5 = document.querySelector("#one").value;
    localStorage.setItem("textArea5", textArea5);
    renderLast();
})

saveBtn6.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea6 = document.querySelector("#two").value;
    localStorage.setItem("textArea6", textArea6);
    renderLast();
})

saveBtn7.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea7 = document.querySelector("#three").value;
    localStorage.setItem("textArea7", textArea7);
    renderLast();
})

saveBtn8.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea8 = document.querySelector("#four").value;
    localStorage.setItem("textArea8", textArea8);
    renderLast();
})

saveBtn9.addEventListener("click", function(event)  {
    event.preventDefault();

    var textArea9 = document.querySelector("#five").value;
    localStorage.setItem("textArea9", textArea9);
    renderLast();
})
// This will render the last locally saved item when refreshed
function renderLast() {
    var textArea1 = localStorage.getItem("textArea1");
    formIput1.textContent = textArea1;
    var textArea2 = localStorage.getItem("textArea2");
    formIput2.textContent = textArea2;
    var textArea3 = localStorage.getItem("textArea3");
    formIput3.textContent = textArea3;
    var textArea4 = localStorage.getItem("textArea4");
    formIput4.textContent = textArea4;
    var textArea5 = localStorage.getItem("textArea5");
    formIput5.textContent = textArea5;
    var textArea6 = localStorage.getItem("textArea6");
    formIput6.textContent = textArea6;
    var textArea7 = localStorage.getItem("textArea7");
    formIput7.textContent = textArea7;
    var textArea8 = localStorage.getItem("textArea8");
    formIput8.textContent = textArea8;
    var textArea9 = localStorage.getItem("textArea9");
    formIput9.textContent = textArea9;

    
}

