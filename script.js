var btn = document.querySelector("button")
var numbers = document.querySelector("p")
var counter = 0

btn.addEventListener("click", function() {
    var interval = window.setInterval(() => {
        var count = counter++
        if(count >= 101) {
            numbers.innerHTML = numbers.innerHTML
            clearInterval(interval)
        } else {
            numbers.innerHTML = count

        }
    }, 20);
})
