function ktra() {
    let y = +document.getElementById('year').value;
    let tbao = document.getElementById('thongbao');
    if (y%4 ==0){
        if (y%100==0) {
            if (y%400==0){
                tbao.innerText = "la nam nhuan";
            } else { tbao.innerText = "khong phai nam nhuan"}
        } else { tbao.innerText = "la nam nhuan"}

    } else { tbao.innerText="khong phai nam nhuan"}

}