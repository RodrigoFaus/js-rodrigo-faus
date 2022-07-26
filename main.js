// Ejercicio 1

alert("Ingresa un año entre 2012 y 2022, para saber cual fue el precio más alto y más bajo de bitcon en cada año ")
let numIngresado1 = prompt("Ingresar el año");
while(numIngresado1 != "Salir" ){
       switch (numIngresado1) {
           case "2012":
                alert("All Time Low: $3.78 " + "\n" +"All Time High:$16.4 ");
                break;
            case "2013":
                alert("All Time Low: $12.7 " + "\n" +"All Time High:$1158 ");
                break;
            case "2014":
                alert("All Time Low: $275 " + "\n" +"All Time High:$996 ");
               break;
            case "2015":
                alert("All Time Low: $152 " + "\n" +"All Time High:$501 ");
                break;
            case "2016":
                alert("All Time Low: $352" + "\n" +"All Time High:$976 ");
                break;
               case "2017":
                  alert("All Time Low: $739 " + "\n" +"All Time High:$19662 ");
                  break;
              case "2018":
                  alert("All Time Low: $3120 " + "\n" +"All Time High:$17229 ");
                  break;
              case "2019":
                  alert("All Time Low: $3121 " + "\n" +"All Time High:$13875 ");
                 break;
              case "2020":
                  alert("All Time Low: $3848 " + "\n" +"All Time High:$29304 ");
                  break;
              case "2021":
                  alert("All Time Low: $27706 " + "\n" +"All Time High:$69026 ");
                  break;
               case "2022":
                  alert("All Time Low: $17599 " + "\n" +"All Time High:$48240 ");
                  break;
             default:
                 alert("Año fuera de rango")
                 break;
       }
       numIngresado1 = prompt("Ingresar el año");
    }

// Ejercicio 2 
// Juego de adivinanza

// alert("Bienvenidos a este juego de adivinanza, tenés solo 3 intentos para responder la pregunta correctamente" + "\n" + 
//       "¿Cual es el verbo que describe capacidad de un cuerpo para sostenerse dentro de un fluido ?")

// for (let adivina =! "flotar"; adivina <= 2; adivina++) {
//    let adivina = prompt("Ingrese su respuesta")
//    if (adivina == "flotar" || "Flotar" || "Flotar") {
//       alert("Respuesta CORRECTA")
//       break;
//    } else {
//      alert("Respuesta INCORRECTA")
//    }

// }