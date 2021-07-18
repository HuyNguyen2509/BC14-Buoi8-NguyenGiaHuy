document.getElementById('Nhap').addEventListener('click', nhapMang);
document.getElementById('soDuong').addEventListener('click', tinhSoDuong);
document.getElementById('demSoDuong').addEventListener('click', demSoDuong);
document.getElementById('soNhoNhat').addEventListener('click', timSoNhoNhat);
document.getElementById('soDuongNhoNhat').addEventListener('click', timDuongSoNhoNhat);
document.getElementById('soChanCuoi').addEventListener('click', timSoChanCuoi);
document.getElementById('sapXepMang').addEventListener('click', sapXepMangTangDan);
document.getElementById('timSNT').addEventListener('click', timSoNguyenTo);
document.getElementById('soSanh').addEventListener('click', soSanhAmDuong);

function nhapMang() {
    var arr = Mang();
    console.log("Mảng lúc đầu nhập: ", arr)
}

function Mang() {
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;

    var arr = [];

    arr.push(number1, number2, number3, number4, number5);

    return arr;
}

/* Câu 1 */
function tinhSoDuong() {
    var arr = Mang();

    var arrSoDuong = [];
    arr.filter(function (value) {
        if (value > 0) {
            arrSoDuong.push(value)
        }
    })
    var tongSoDuong = 0;
    for (var i = 0; i < arrSoDuong.length; i += 1) {
        tongSoDuong = tongSoDuong + arrSoDuong[i];
    }

    console.log(`Tổng của các Số Dương là: ${tongSoDuong}`)
}
/* Câu 2 */
function demSoDuong() {
    var arr = Mang();

    var arrSoDuong = [];
    arr.filter(function (value) {
        if (value > 0) {
            arrSoDuong.push(value)
        }
    })

    var totalSoDuong = arrSoDuong.length
    console.log("Số Lượng số Dương có là: ", totalSoDuong)
}
/* Câu 3 */
function timSoNhoNhat() {
    var arr = Mang();

    var soMin = Math.min.apply(null, arr);

    console.log("Số Nhỏ Nhất: ", soMin)
}
/* Câu 4 */
function timDuongSoNhoNhat() {
    var arr = Mang();

    var arrDuong = [];
    arr.filter(function (value) {
        if (value > 0) {
            arrDuong.push(value)
        }
    })

    var soDuongMin = Math.min.apply(null, arrDuong);

    console.log("Số Dương nhỏ nhất trong mảng là: ", soDuongMin)
}
/* Câu 5 - chưa chạy dc */
function timSoChanCuoi() {
    var arr = Mang();

    var soChanCuoi = 0;
    for (var i = 0; i < arr.length; i--) {
        if (arr[i] % 2 === 0) {
            soChanCuoi = a[i];
            console.log("Số Chẳn Cuối Trong Mảng: ", soChanCuoi)
            break;
        }
        return -1;
    }

}
/* Câu 6 - chưa có hướng làm */
/* Câu 7 */
function sapXepMangTangDan() {
    var arr = Mang();

    arr.sort(function (a, b) {
        return a - b;
    })

    console.log("Mảng Tăng Dần: ", arr)
}
/* Câu 8 - chưa đúng kết quả */
function timSoNguyenTo() {
    var arr = Mang();
    for (var i = 2; i <= arr.length; i++) {
        if (arr[i] < 2) {
            console.log("Không có số nguyên tố");
            return;
        }
        var flag = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log("Số Nguyên Tố: ", arr[i])
        }
    }
}
/* Câu 9 - chưa có hướng làm */
/* Câu 10 */
function soSanhAmDuong() {
    var arr = Mang();

    var arrSoDuong = [];
    var arrSoAm = [];

    arrSoDuong = arr.filter(function (value) {
        if (value % 2 === 0) {
            arrSoDuong.push(arr)
        }
    })
    arrSoAm = arr.filter(function (value) {
        if (value % 2 !== 0) {
            arrSoAm.push(arr)
        }
    })

    var totalAm = arrSoAm.length;
    var totalDuong = arrSoDuong.length;

    if (totalAm > totalDuong) {
        console.log(` Số Âm nhìu hơn số Dương `)
    }
    else {
        console.log(` Số Dương nhìu hơn số Âm `)
    }

}