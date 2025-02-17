document.body.style.position = "relative";
// 🎲 Zar Atma Oyunu
function zarAt() {
    let zar = Math.floor(Math.random() * 6) + 1;
    let zarSonuc = document.getElementById("zarSonuc");
    zarSonuc.innerHTML = `Zar: 🎲 ${zar}`;
    zarSonuc.style.color = "blue";
}

// 🎰 Slot Makinesi Oyunu
function slotOyna() {
    let semboller = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];
    let slot1 = semboller[Math.floor(Math.random() * semboller.length)];
    let slot2 = semboller[Math.floor(Math.random() * semboller.length)];
    let slot3 = semboller[Math.floor(Math.random() * semboller.length)];

    let slotSonuc = document.getElementById("slotSonuc");
    slotSonuc.innerHTML = `${slot1} | ${slot2} | ${slot3}`;

    if (slot1 === slot2 && slot2 === slot3) {
        slotSonuc.innerHTML += " 🎉 Kazandın!";
        slotSonuc.style.color = "green";
    } else {
        slotSonuc.innerHTML += " 😞 Kaybettin!";
        slotSonuc.style.color = "red";
    }
}
