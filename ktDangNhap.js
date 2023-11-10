
function ktra() {
    let ten = document.getElementById("name").value;
    let mk = document.getElementById("pass").value;

    if (ten == "admin"){
        if (mk == "TheMaster"){
            alert("Welcome");
        } else {
            mk? alert("Sai mật khẩu"):alert("Yêu cầu nhập mật khẩu");
        }
    } else if (ten == "") {
        alert("Canceled");
        location.reload();
    } else {
        alert("Tôi không biết bạn là ai");
    }
}