document.getElementById('numberInput').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});
document.getElementById('Aa').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});
document.getElementById('Ak').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});
document.getElementById('Ko').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});
document.getElementById('Lo').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});
document.getElementById('Hj').addEventListener('input', function(event) {
    let input = event.target.value;
    if (input.length > 1) {
        event.target.value = input.slice(0, 1);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            let value = event.target.value;
            
            // If input has a value and it's not the last input, move focus to the next input
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            let value = event.target.value;
            
            // If input has a value and it's not the last input, move focus to the next input
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(event) {
            if (event.keyCode === 8 && !input.value && index > 0) {
                inputs[index - 1].focus(); // Move focus to the previous input
            }
        });
    });
});
