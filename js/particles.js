var particles = 
    Particles.init({
        selector: '.background',
        sizeVariations: 7,
        maxParticles: 100,
        color: ["#baa7b0", "#b2abbf", "#b1b5c8", "bfd5e2", "c7ebf0"],
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 50
                }
            }
            , {
                breakpoint: 525,
                options: {
                    maxParticles: 25
                }
            }
            , {
                breakpoint: 320,
                options: {
                    maxParticles: 12
                }
            }
        ]
    });
