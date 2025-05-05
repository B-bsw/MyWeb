window.onload = function() {
    const image = document.getElementById('fan');
    
    const sub = document.getElementById('subtitle');
    // var i = 0;
    
    setTimeout(function() {
        for (let index = 0; index < 100; index++) {
            setTimeout(function() {
                sub.style.opacity = index / 100;
            }, index * 1);
        }
    }, 1000); // 1 seconds delay for loading screen
}