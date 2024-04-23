// Get a reference to the button
var colorBtn = document.getElementById('colorBtn');

// Add a click event listener to the button
colorBtn.addEventListener('click', function() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
