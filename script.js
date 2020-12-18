
let x = 0;
let y = 0;
let rotation = 0
let timer = null;
let timeout = 20
function animate(event) {
    if (timer == null) {
        document.getElementById('music').play();

        timer = setInterval(() => {
            timeout = timeout - 1
            document.getElementById('timer').innerHTML = timeout + " seconds"
            if (timeout == 0) {
                alert("Time out, you lose !")
                window.location.reload();
            }
        }, 1000)
    }
    switch (event.keyCode) {
        case 37:
            x = x - 100
            rotation = -90
            break
        case 39:
            x = x + 100
            rotation = 90
            break
        case 38:
            y = y - 100
            rotation = 0
            break
        case 40:
            y = y + 100
            rotation = -180

            break
        default:
            console.log("unknown key")
    }
    gsap.to("#ship", {
        duration: 0.5,
        rotate: rotation,
        x: x,
        y: y
    })
    checkCollisionWithEnnemies()
    checkCollisionWithTreasures()

}


function checkCollision(div1, div2) {
    // la sensibilité : à ajuster si besoin
    let threshold = 50;
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();
    return !(
        rect1.right < rect2.left + threshold ||
        rect1.left > rect2.right - threshold ||
        rect1.bottom < rect2.top + threshold ||
        rect1.top > rect2.bottom - threshold
    );
}


function checkCollisionWithEnnemies() {
    // on récupère tous les ennemis : 
    let all_ennemies = document.querySelectorAll(".ennemy")
    let player = document.getElementById('ship')
    // on regarde s'il y a une collision
    all_ennemies.forEach(function (element) {
        if (checkCollision(player, element)) {
            alert("You lose !")
            // on recharge la page
            window.location.reload()
        }
    })
}

function checkCollisionWithTreasures() {
    // on récupère tous les ennemis : 
    let all_treasures = document.querySelectorAll(".treasure")
    let player = document.getElementById('ship')
    // on regarde s'il y a une collision
    all_treasures.forEach(function (element) {
        if (checkCollision(player, element)) {
            alert("You win !")
            // on recharge la page
            window.location.reload()
        }
    })
}

let timeline1 = gsap.timeline();
let timeline2 = gsap.timeline();
let timeline3 = gsap.timeline();
let timeline4 = gsap.timeline();

function animateRedShip1() {
    // première animation
    timeline1.to("#redship1", {
        duration: 0.3,
        rotation: 90,

    });
    // première animation
    timeline1.to("#redship1", {
        duration: 3,
        x: 200,
        y: 0
    });
    timeline1.to("#redship1", {
        duration: 0.3,
        rotation: -90,
    });
    timeline1.to("#redship1", {
        duration: 3,
        x: -200,
        y: 0
    });

}
function animateRedShip2() {
    // première animation
    timeline2.to("#redship2", {
        duration: 0.3,
        rotation: 180,

    });
    // première animation
    timeline2.to("#redship2", {
        duration: 3,
        x: 0,
        y: 200
    });
    timeline2.to("#redship2", {
        duration: 0.3,
        rotation: 360,
    });
    timeline2.to("#redship2", {
        duration: 3,
        x: 0,
        y: -200
    });


}
function animateRedShip3() {
    // première animation
    timeline3.to("#redship3", {
        duration: 0.3,
        rotation: 180,

    });
    // première animation
    timeline3.to("#redship3", {
        duration: 3,
        x: 0,
        y: 200
    });
    timeline3.to("#redship3", {
        duration: 0.3,
        rotation: 360,
    });
    timeline3.to("#redship3", {
        duration: 3,
        x: 0,
        y: -200
    });


}
function animateRedShip4() {
    // première animation
    timeline4.to("#redship4", {
        duration: 0.3,
        rotation: 90,

    });
    // première animation
    timeline4.to("#redship4", {
        duration: 3,
        x: 200,
        y: 0
    });
    timeline4.to("#redship4", {
        duration: 0.3,
        rotation: -90,
    });
    timeline4.to("#redship4", {
        duration: 3,
        x: -200,
        y: 0
    });

}



window.onload = () => {
    animateRedShip1()
    animateRedShip2()
    animateRedShip3()
    animateRedShip4()

    setInterval(() => {
        animateRedShip1()
        animateRedShip2()
        animateRedShip3()
        animateRedShip4()

    }, 7000)
    document.onkeydown = function (e) {
        e = e || window.event;
        // use e.keyCode
        animate(e)
    };





}