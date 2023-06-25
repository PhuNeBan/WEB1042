function kiemtra() {
    var thanhcong = true;
    var thongbao = "";
    check = 0;
    // Kiểm tra mã hóa đơn
    var mahd = document.getElementById("mahd");
    if (mahd.value.length < 2) {
        thongbao = "Nhập mã hóa đơn từ 2 đến 20 ký tự !!!";
        check = 1;
        thanhcong = false;
        document.getElementById("1").innerHTML = thongbao;
    } else document.getElementById("1").innerHTML = "";

    // Kiểm tra tên khách hàng
    var tenkh = document.getElementById("tenkh");
    if (tenkh.value.length < 2) {
        thongbao = "Nhập tên khách hàng từ 2 đến 40 ký tự !!!";
        check = 1;
        thanhcong = false;
        document.getElementById("2").innerHTML = thongbao;
    } else document.getElementById("2").innerHTML = "";

    //Kiểm tra gender
    var gender = document.getElementsByName("gender");
    if (gender[0].checked == false &&
        gender[1].checked == false &&
        gender[2].checked == false) {
        thongbao = "Khu vực chưa được chọn !!!"
        check = 1;
        thanhcong = false;
        document.getElementById("3").innerHTML = thongbao;
    } else document.getElementById("3").innerHTML = "";

    //Kiểm tra địa chỉ khách hàng
    var diachi = document.getElementById("diachi")
    if (diachi.value.length < 2) {
        thongbao = "Nhập địa chỉ từ 2 đến 50 ký tự !!!";
        check = 1;
        thanhcong = false;
        document.getElementById("4").innerHTML = thongbao;
    } else document.getElementById("4").innerHTML = "";

    //Kiểm tra phường xã
    var phuongxa = document.getElementById("phuongxa")
    if (phuongxa.value.length < 2) {
        thongbao = "Nhập thông tin từ 2 đến 50 ký tự !!!";
        check = 1;
        thanhcong = false;
        document.getElementById("5").innerHTML = thongbao;
    } else document.getElementById("5").innerHTML = "";

    // Kiểm tra loại tranh
    var loaitranh = document.getElementById("loaitranh");
    if(loaitranh.value == 0){
        thongbao = "Bạn chưa chọn loại tranh";
        check = 1;
        thanhcong = false;
        document.getElementById("6").innerHTML = thongbao;
    } else document.getElementById("6").innerHTML = "";

    // Kiểm lỗi số điện thoại
    var sodt = document.getElementById("sodt");
    if(sodt.value.length < 10 || num.value.length > 10){
        thongbao = "Đã nhập sai số điện thoại !!!";
        check = 1;
        thanhcong = false;
        document.getElementById("7").innerHTML = thongbao;
    } else document.getElementById("7").innerHTML = "";
}