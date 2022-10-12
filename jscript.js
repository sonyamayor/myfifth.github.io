/*jslint devel: true */
function sum() {
    var x = document.getElementById("kol").value;
    var y = document.getElementById("ed").value;
    var z = document.getElementById("result");
    z.innerHTML = x * y;
    if (x * y === 0) {
        alert("Ввод данных");
    }
}
window.document.addEventListener("DOMContentLoaded", function (sum) {
    console.log("DOM fully loaded and parsed");
    var c = document.getElementById("button");
    c.addEventListener("click", sum);
});
