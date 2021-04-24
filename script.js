// counter

const btn = document.querySelectorAll('.btn')

let total = 0;

btn.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('btn-low')) {
            total--
        } else if (button.classList.contains('btn-high')) {
            total++
        }
        
        const count = document.getElementById('counter')
        count.textContent = total
        if (total < 0) {
            count.style.color = 'red'
        } else if (total > 0) {
            count.style.color = 'green'
        } else {
            count.style.color = 'black'
        }
    })
    })
