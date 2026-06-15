let button = document.querySelector("button")
let moved=0
button.addEventListener("mouseover", function () {

    if (!moved) {
        button.style.marginLeft = "100px"
        moved = true
    } else {
        button.style.marginLeft = "0px"
        moved = false
    }

})