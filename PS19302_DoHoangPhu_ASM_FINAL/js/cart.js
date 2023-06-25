function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    document.getElementById("cart").appendChild(row);
    var xoa = row.getElementsByTagName("button")[0];
    xoa.innerText = "Xoá";
    xoa.setAttribute('onclick', 'xoa(this)');
    total();

}
function total(){
    var nf = new Intl.NumberFormat();
    var soluong_arr = document.getElementsByClassName("soluong");
    var giatien_arr = document.getElementsByClassName("giatien");
    var total = 0, all = 0;
    for (var i = 0; i < soluong_arr.length;i++){
        //Lấy giá trị mảng đổi thành Int
        var soluong = soluong_arr[i].value;
        soluong = parseInt(soluong);
        var giatien = giatien_arr[i].innerHTML;
        giatien = parseInt(giatien);
        //Tính tổng và gán vào
        total = soluong * giatien;
        all += total;
    }
    document.getElementById("total").innerHTML = nf.format(all);
}


function xoa(button){
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    total();
}
function daott(obj){
    var rows = obj.parentElement.parentElement;
    var button = rows.getElementsByTagName("button")[0];
    button.disabled= ! button.disabled;
}