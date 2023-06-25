function slg() {
    var slg = sessionStorage.getItem("soLanGiai");
    if (slg == null) slg = 0;
    slg++;
    sessionStorage.setItem("soLanGiai", slg);
    document.getElementById('slg').innerHTML = slg;
}

function random() {
    document.getElementById('giai-pt').disabled = false

    ptb2.a = Math.floor(Math.random() * 11);
    document.getElementById('a').innerHTML = ptb2.a;
    hsa.value = ptb2.a;
    ptb2.b = Math.floor(Math.random() * 11);
    document.getElementById('b').innerHTML = ptb2.b;
    hsb.value = ptb2.b;
    ptb2.c = Math.floor(Math.random() * 11);
    document.getElementById('c').innerHTML = ptb2.c;
    hsc.value = ptb2.c;
}

var ptb2 = {
    giaiPt: function () {
        if (ptb2.a == 0) {
            if (ptb2.b == 0) {
                if (ptb2.c == 0) {
                    ptb2.result = "Phương trình vô số nghiệm";
                } else {
                    ptb2.result = "Phương trình vô nghiệm";
                }
            } else {
                ptb2.x = (-ptb2.c / ptb2.b).toFixed(2);
                ptb2.result = "Phương trình có 1 nghiệm x= " + ptb2.x;
            }
        } else {
            ptb2.delta = ptb2.b * ptb2.b - 4 * ptb2.a * ptb2.c;
            if (ptb2.delta > 0) {
                x1 = ((-ptb2.b + Math.sqrt(ptb2.delta)) / (2 * ptb2.a)).toFixed(2);
                x2 = ((-ptb2.b - Math.sqrt(ptb2.delta)) / (2 * ptb2.a)).toFixed(2);
                ptb2.result = "Phương trình có 2 nghiệm<br> x1= " + x1 + "<br> x2 = " + x2;

            } else if (ptb2.delta == 0) {
                ptb2.x = (- ptb2.b / 2 * ptb2.a).toFixed(2);
                ptb2.result = "Phương trình có nghiệm kép x = " + x;
            } else {
                ptb2.result = "Phương trình vô nghiệm";
            }
        }
        document.getElementById("result").innerHTML = ptb2.result;

        hsa.value = "";
        hsb.value = "";
        hsc.value = "";

        document.getElementById('giai-pt').disabled = true;
    },

    kiemtra: function () {
        check = true;
        if (isNaN(ptb2.a) || isNaN(ptb2.b) || isNaN(ptb2.c)) {
            check = false;
            document.getElementById("result").innerHTML = "Sai kiểu dữ liệu";
        }
    }
}

function tinh() {
    ptb2.a = document.getElementById('hsa').value;
    ptb2.b = document.getElementById('hsb').value;
    ptb2.c = document.getElementById('hsc').value;
    ptb2.kiemtra()
    if (check == false) {
        document.getElementById("result").innerHTML = "Sai kiểu dữ liệu";
    } else {
        ptb2.giaiPt();
    }

    slg();
}

