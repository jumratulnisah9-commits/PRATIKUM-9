function prosesLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "ratu2802" && pass === "jaehyun") {
        alert("Login Berhasil!");
        document.getElementById("hasil").innerHTML = "<h1>Login Sukses</h1>";
        return false;
    } else {
        alert("Login Gagal! Username atau Password salah!");
        return false;
    }
}
