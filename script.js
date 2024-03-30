// Function to dynamically adjust button width based on window size
function adjustButtonWidth() {
    var buttons = document.querySelectorAll('.link-item');
    var containerWidth = document.querySelector('.links').offsetWidth;
    var buttonWidth = containerWidth / buttons.length;

    buttons.forEach(function(button) {
        if (button.style.width >= 500){
            button.style.width = buttonWidth + 'px';
        }
        else {
            button.style.width = '500px';
        }
    });
}

// Call the function initially and on window resize
adjustButtonWidth();
window.addEventListener('resize', adjustButtonWidth);
