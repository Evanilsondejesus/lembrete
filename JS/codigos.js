
 
 setTimeout(() => {
     meus()
 }, 1000);
 
 
 
 function salvar() {
      
 var lista = document.getElementById("lista")
 var digite_notas = document.getElementById("digite_notas").value;
 
 
 
 
 var novas_listas = document.createElement("div")
 
 novas_listas.innerHTML = `<li>${digite_notas} </li>`;
 novas_listas.setAttribute("ondblclick", "mudar_cor(this)");
 novas_listas.style.background="white";
 
 document.getElementById("digite_notas").value = "";
 
 lista.appendChild(novas_listas)
 
 
 
 
 
 memoria_local()
 
     
 }
 
 
 
 
 function meus() {
 
 if (localStorage.nov !== undefined) {
     document.getElementById("lista").innerHTML = localStorage.nov;
 
 
 }
 
 
     
 }
 
 
 
 
 function excluir_tudo() {
 
   //  btn.hidden= true;  btn.hidden= true;
 
    localStorage.clear()
     window.location.reload(true);
      
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function mudar_cor(cor) {
 var mud = document.querySelector("#menu_principal");
 var div_cor = document.querySelectorAll('ol div')
 
 //alert(li[0].innerHTML)
 
  var btn =document.querySelector('#btn_selecao');
 var excluir_tudo = document.getElementById("excluir_tudo");
  //excluir_tudo
 
 
 
 
 
 
 
 
 
 if (cor.style.background=="white") {
     cor.style.background="grey";
 }else if(cor.style.background=="grey"){
 
 cor.style.background = "white"
 
 }
 
 
     
 
 
 
 
 
 var n= 0;
 var n2=0;
 while (n<div_cor.length) {
 
    
     if (div_cor[n].style.background == "grey") {
         n2++
        
 
     } 
     
 
 
 
 
 
 
 if (n2 >= 1) {
 
     btn.hidden= false;
 excluir_tudo.hidden = false;
 
 } else {
     btn.hidden= true;
     excluir_tudo.hidden= true;
     n2=0;
     
 
 
 }
 
 
 
 
 
 
 
 
 
     n++
 }
 
 
 n2=0;
 
 
 
 
 
 }
 
 
 
 
 
 function remover_selecionado() {
 
     var div_cor = document.querySelectorAll('ol div')
  
 
 
 var n = 0;
 
 
 while (n<div_cor.length) {
 
  //alert("entrou..."+ li)
 
   
 
 if (div_cor[n].style.background == "grey") {
     div_cor[n].remove();
 //alert(n2)
 
    
 }n++
 
 }
 document.querySelector('#btn_selecao').hidden = true;
 document.querySelector('#excluir_tudo').hidden = true;
 //a
 
 
 memoria_local()
     
 }
 
  
 
 
 
 
 
 
 
 function memoria_local() {
 
 
 
 
     var seu = document.getElementsByTagName('ol')
  
  localStorage.setItem("nov",     document.getElementById('lista').innerHTML= seu[0].innerHTML                  );
  
  
 
 
     
 }
 
 
 
 
 
 
 
 
 
 
 
 
  