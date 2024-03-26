document.onmousemove = (event) => {
    const balls = document.getElementsByClassName('ball');

    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        const eyeRect = ball.parentElement.getBoundingClientRect();

        const mouseX = event.clientX - eyeRect.left;
        const mouseY = event.clientY - eyeRect.top;

        const centerX = eyeRect.width / 2;
        const centerY = eyeRect.height / 2;

        // Calculate the translation values based on the mouse position relative to the center of the container
        const offsetX = Math.min(Math.max((mouseX - centerX) / 8, -centerX), centerX);
        const offsetY = Math.min(Math.max((mouseY - centerY) / 8, -centerY), centerY);

        ball.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    }
};