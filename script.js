document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 1000 } },
                "color": { "value": "#c5a059" },
                "opacity": { "value": 0.15 },
                "size": { "value": 1.5 },
                "line_linked": {
                    "enable": true,
                    "distance": 180,
                    "color": "#c5a059",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": { "enable": true, "speed": 0.5 }
            },
            "retina_detect": true
        });
    }
});