let passtxt = document.getElementById("passtxt");

function rpg() {
    let pass = "";
    const alphabet = '!@#$%&abcdefghijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    while (pass.length < 10) {
        pass += alphabet[Math.floor(Math.random() * 74)];
    }

    return pass;
}

function gp() {
    let gp = rpg();
    passtxt.textContent = gp;
    gsap.fromTo("#passtxt", { scale: .1 }, { scale: 1, duration: 0.5, ease: "power4.out(1, 0.3)" });
}

function copyPassword() {
    const passText = document.getElementById("passtxt").textContent;

    if (passText) {
        const tempInput = document.createElement("input");
        tempInput.value = passText;

        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert("Password copied to clipboard!");
    }
}

gsap.to(".function", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".function", {
    y: -50,
    duration: 1,
    ease: "power4.out"
});
