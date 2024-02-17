let counter = 0

function increment() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}

function decrement() {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}
function reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}


// btn1 working ;

const press1 = document.getElementById("btn1");

press1.addEventListener("mouseover", function () {

    press1.innerHTML = "+";

    press1.style.backgroundColor = "yellow";

}
)
press1.addEventListener("mouseout", function () {

    press1.innerHTML = "Increment";

    press1.style.backgroundColor = "aqua";

}
)

// btn2 working ;

const press2 = document.getElementById("btn2");

press2.addEventListener("mouseover", function () {

    press2.innerHTML = "-";

    press2.style.backgroundColor = "yellow";

}
)
press2.addEventListener("mouseout", function () {

    press2.innerHTML = "Decrement";

    press2.style.backgroundColor = "aqua";

}
)

// btn3 working :

const press3 = document.getElementById("btn3");

press3.addEventListener("mouseover", function () {

    press3.innerHTML = "try again";

    press3.style.backgroundColor = "yellow";

}
)
press3.addEventListener("mouseout", function () {

    press3.innerHTML = "Reset";

    press3.style.backgroundColor = "aqua";

}
)



