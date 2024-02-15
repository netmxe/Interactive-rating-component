document.querySelectorAll('.rate span').forEach(function (span) {
    span.addEventListener('mouseover', function () {
        let prevElement = this.previousElementSibling;
        if (prevElement) {
            prevElement.style.backgroundColor = 'var(--light-grey)';
            prevElement.style.color = 'var(--white)';
        }
    });

    span.addEventListener('mouseout', function () {
        let prevElement = this.previousElementSibling;
        if (prevElement) {
            prevElement.style.backgroundColor = '';
            prevElement.style.color = '';
        }
    });

    span.addEventListener('click', function () {
        document.querySelectorAll('.rate span').forEach(function (otherSpan) {
            otherSpan.classList.remove('active');
        });

        // Ajouter la classe 'selected' au span cliqué
        this.classList.add('active');
    });
});

document.querySelector('#submit').addEventListener('click', function () {
    let selectedRate = document.querySelector('.rate span.active').dataset.value;
    document.getElementById('rated').innerText = selectedRate;
    document.querySelector('.thank-you').style.display = 'flex';
    document.querySelector('.start').style.display = 'none';
});
