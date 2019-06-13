function convert() {
    let r = parseInt(document.getElementById("Radian").value)
    let pi=3.1416
    let g = r*180/pi
    document.getElementById("out").innerHTML = g.toFixed(3) + " grados"
}
function convert2() {
    let gd = parseInt(document.getElementById("Grado").value)
    let pi=3.1416
    let rd = gd*pi/180
    document.getElementById("out2").innerHTML = rd.toFixed(3) + " radianes"
}