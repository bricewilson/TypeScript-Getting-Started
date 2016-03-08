function init() {
    var firstButton = document.getElementById('clickme');
    firstButton.addEventListener("click", function() {
        console.log('Hello from the event listener!');
    })
}

init();