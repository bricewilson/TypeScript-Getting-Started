function startGame() {
    // starting new game 
    var messagesElement = document.getElementById('messages');
    // reference to the messages div inside the index.html file // 
    messagesElement.innerText = 'Welcome to MultiMat! Starting a new game... ';
    // Assigns a string to it's innerText property so that it will appear on the screen // 
}
document.getElementById('startGame').addEventListener('click', startGame);
// calls start game function when the start game button is clikced in the app // 


// BEFORE WE CAN USE THIS NEW JS FILE IN THE APP WE NEED TO ADD A REFERENCE TO IT IN THE INDEX.HTML FILE // 
