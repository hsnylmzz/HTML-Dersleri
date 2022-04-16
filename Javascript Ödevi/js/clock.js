let ad = prompt("Adınızı Girin : ")

let info = document.querySelector("#myName")

info.innerHTML = `${ad}`


window.onload = function showTime()
{
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let second= time.getSeconds()
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let day = time.getDay()
    minutes = checkTime(minutes)
    second = checkTime(second)

    document.getElementById("myClock").innerHTML= hours + ":" + minutes + ":" + second + " " + days[day]
    setTimeout(showTime, 1000)
}

function checkTime(i)
{
    if (i < 10) {i = "0" + i}
    return i
}