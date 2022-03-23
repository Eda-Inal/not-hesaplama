let examGrade = prompt("Notunuzu giriniz")

let TextInfo;






if(examGrade >= 0 && examGrade <=100) {
   if(examGrade >= 90) {
    TextInfo = "AA"
}
else if(examGrade >= 85) {
    TextInfo = "BA"
}
else if(examGrade >= 80) {
    TextInfo = "BB"
}
else if(examGrade >= 75) {
    TextInfo = "CB"
}
else if(examGrade >= 70) {
    TextInfo = "CC"
}
else if(examGrade >= 65) {
    TextInfo = "DC"
}
else if(examGrade >= 60) {
    TextInfo = "DD"
}
else if(examGrade >= 50) {
    TextInfo = "FD"
}
else if(examGrade < 50) {
    TextInfo =  `FF`
}

}
else{
    TextInfo = "Bilgiler doğru değil."
}


let info = document.querySelector("#info")
info.innerHTML = `${TextInfo}--> ${examGrade}`

console.log(TextInfo)

