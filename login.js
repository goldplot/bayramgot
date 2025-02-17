function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (!username || !password) {
        document.getElementById("message").innerText = "Lütfen tüm alanları doldurun!";
        return;
    }

    if (localStorage.getItem(username)) {
        document.getElementById("message").innerText = "Bu kullanıcı zaten kayıtlı!";
        return;
    }

    let user = {
        username: username,
        password: password,
        balance: 1000  // Yeni kullanıcı başlangıç bakiyesi
    };

    localStorage.setItem(username, JSON.stringify(user));
    document.getElementById("message").innerText = "Kayıt başarılı! Giriş yapabilirsiniz.";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userData = localStorage.getItem(username);

    if (!userData) {
        document.getElementById("message").innerText = "Kullanıcı bulunamadı!";
        return;
    }

    let user = JSON.parse(userData);

    if (user.password !== password) {
        document.getElementById("message").innerText = "Şifre hatalı!";
        return;
    }

    localStorage.setItem("currentUser", username);
    window.location.href = "profile.html"; // Kullanıcıyı profil sayfasına yönlendir
}
