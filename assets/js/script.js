var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");

var htmlPromedio = document.getElementById("htmlPromedio");

// + antes del prompt para decirle que es un numero
var nota1Html = + prompt("Ingrese la nota 1 de HTML");
var nota2Html = + prompt("Ingrese la nota 2 de HTML");
var nota3Html = + prompt("Ingrese la nota 3 de HTML");

// tambien podemos convertir las notas en numeros
// nota1Html = parseInt(nota1Html);
// nota2Html = parseInt(nota2Html);
// nota3Html = parseInt(nota3Html);


html1.innerHTML = nota1Html;
html2.innerHTML = nota2Html;
html3.innerHTML = nota3Html;
//   ---------------------------------------------- REDONDEAR                 
htmlPromedio.innerHTML = ((nota1Html + nota2Html + nota3Html) / 3).toFixed(2);





//CSS-----notas-----------------

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");

var cssPromedio = document.getElementById("cssPromedio");

// + antes del prompt para decirle que es un numero
var nota1css = + prompt("Ingrese la nota 1 de CSS");
var nota2css = + prompt("Ingrese la nota 2 de CSS");
var nota3css = + prompt("Ingrese la nota 3 de CSS");

// tambien podemos convertir las notas en numeros
// nota1css = parseInt(nota1css);
// nota2css = parseInt(nota2css);
// nota3css = parseInt(nota3css);


css1.innerHTML = nota1css;
css2.innerHTML = nota2css;
css3.innerHTML = nota3css;
//   ---------------------------------------------- REDONDEAR                 
cssPromedio.innerHTML = ((nota1css + nota2css + nota3css) / 3).toFixed(2);




//JS-----notas-----------------

var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");

var jsPromedio = document.getElementById("jsPromedio");

// + antes del prompt para decirle que es un numero
var nota1js = + prompt("Ingrese la nota 1 de JAVASCRIPT");
var nota2js = + prompt("Ingrese la nota 2 de JAVASCRIPT");
var nota3js = + prompt("Ingrese la nota 3 de JAVASCRIPT");

// tambien podemos convertir las notas en numeros
// nota1js = parseInt(nota1js);
// nota2js = parseInt(nota2js);
// nota3js = parseInt(nota3js);


js1.innerHTML = nota1js;
js2.innerHTML = nota2js;
js3.innerHTML = nota3js;
//   ---------------------------------------------- REDONDEAR                 
jsPromedio.innerHTML = ((nota1js + nota2js + nota3js) / 3).toFixed(2);


