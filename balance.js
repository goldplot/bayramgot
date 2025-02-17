// Bakiye sistemini LocalStorage ile tutan şans oyunları kodu

document.addEventListener("DOMContentLoaded", function () {
    const balanceDisplay = document.createElement("div");
    balanceDisplay.id = "balance";
    balanceDisplay.style.fontSize = "20px";
    balanceDisplay.style.margin = "10px";
    balanceDisplay.style.fontWeight = "bold";
    document.body.prepend(balanceDisplay);

    // Başlangıç bakiyesi (Eğer LocalStorage'da yoksa 1000₺ ile başlat)
    if (!localStorage.getItem("balance")) {
        localStorage.setItem("balance", 1000);
    }
    
    updateBalanceDisplay();

    // Şans Testi Butonu
    const chanceButton = document.querySelector("button");
    if (chanceButton) {
        chanceButton.addEventListener("click", function () {
            if (getBalance() <= 0) {
                alert("Bakiye yetersiz! Lütfen tekrar dene.");
                return;
            }
            
            const randomChance = Math.floor(Math.random() * 100);
            const winAmount = Math.floor(Math.random() * 500) + 50; // 50-500₺ kazanılabilir
            const lossAmount = Math.floor(Math.random() * 200) + 50; // 50-200₺ kaybedilebilir
            
            if (randomChance < 50) { // %50 kazanma şansı
                alert(`Tebrikler! ${winAmount}₺ kazandın!`);
                updateBalance(winAmount);
            } else {
                alert(`Maalesef ${lossAmount}₺ kaybettin.`);
                updateBalance(-lossAmount);
            }
        });
    }
});

function getBalance() {
    return parseInt(localStorage.getItem("balance")) || 0;
}

function updateBalance(amount) {
    let currentBalance = getBalance();
    currentBalance += amount;
    localStorage.setItem("balance", currentBalance);
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById("balance");
    if (balanceDisplay) {
        balanceDisplay.textContent = `Bakiye: ${getBalance()}₺`;
    }
}
