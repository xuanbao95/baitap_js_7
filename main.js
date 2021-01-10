function getEle(id) {
    return document.getElementById(id);
}
document.getElementById("bamDi").addEventListener("click", listNumbers);
var danhSachSoNguyen = [];
function listNumbers() {
    var soNguyenn = getEle("soNguyen").value;
    soNguyenn = parseInt(soNguyenn);
    danhSachSoNguyen.push(soNguyenn);
}
//tổng các só dương trong mảng
getEle("tongSoDuong").addEventListener("click", function () {
    var tong = 0;
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (danhSachSoNguyen[i] % 2 === 0) {
            tong += danhSachSoNguyen[i];
        }
    }
    getEle("xuatRa").innerHTML = "tổng số dương : " + tong;
});

//đếm có bao nhiêu số dương trong mảng
getEle("demSoDuong").addEventListener("click", function () {
    var dem = 0;
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (danhSachSoNguyen[i] % 2 === 0) {
            dem++;
        }
    }
    getEle("xuatRa").innerHTML = "đếm số dương : " + dem;
});

// tìm số nhỏ nhất
getEle("timSoNhoNhat").addEventListener("click", function () {
    var min = danhSachSoNguyen[0];
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (min > danhSachSoNguyen[i]) {
            min = danhSachSoNguyen[i];
        }
    }
    getEle("xuatRa").innerHTML = "số nhỏ nhất trong mảng : " + min;
});

//tìm số dương nhỏ nhất
getEle("soDuongNhoNhat").addEventListener("click", function () {
    var soDuongNhoNhat = danhSachSoNguyen[0];
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (soDuongNhoNhat > danhSachSoNguyen[i]) {
            soDuongNhoNhat = danhSachSoNguyen[i];
        };
        if (soDuongNhoNhat > 0) {
            return soDuongNhoNhat;
        };
    }
    getEle("xuatRa").innerHTML = "số dương nhỏ nhất trong mảng : " + soDuongNhoNhat;
});

//tìm số chẳn cuối cùng trong mảng
getEle("soChanCuoiCung").addEventListener("click", function () {
    var max = danhSachSoNguyen[0];
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (max < danhSachSoNguyen[i]) {
            max = danhSachSoNguyen[i];
        };
        if (max % 2 === 0) {
            return max;
        } else {
            max = -1;
        }
    }
    getEle("xuatRa").innerHTML = "số chẵn cuối cùng : " + max;
});

//sắp xếp mảng theo thứ tự tăng dần
getEle("tangDan").addEventListener("click", function () {
    for (var i = 0; i < danhSachSoNguyen.length - 1; i++) {
        for (var j = i + 1; j < danhSachSoNguyen.length; j++) {
            if (danhSachSoNguyen[i] > danhSachSoNguyen[j]) {
                var temp = danhSachSoNguyen[i];
                danhSachSoNguyen[i] = danhSachSoNguyen[j];
                danhSachSoNguyen[j] = temp;
            }
        }
    }
    getEle("xuatRa").innerHTML = "sắp xếp tăng dần : " + danhSachSoNguyen;
});

//đỏi chổ 2 giá trị
getEle("doiViTri").addEventListener("click", function () {
    var viTri1 = getEle("viTri1").value;
    var viTri2 = getEle("viTri2").value;
    for (viTri1; viTri1 < danhSachSoNguyen.length - 1; viTri1++) {
        for (viTri2 = viTri1 + 1; viTri2 < danhSachSoNguyen.length; viTri2++) {
            if (danhSachSoNguyen[i] > danhSachSoNguyen[j]) {
                var temp = danhSachSoNguyen[i];
                danhSachSoNguyen[i] = danhSachSoNguyen[j];
                danhSachSoNguyen[j] = temp;
            }
        }
    }
});


