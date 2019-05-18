let links = document.querySelectorAll(".nav-link")
let main = document.querySelector("main")

links.forEach(link=>{
  link.addEventListener("click", e => {
    e.preventDefault()
    location.hash = e.target.innerText
  })
})

function manejarResultado(respuesta){
  main.innerHTML = respuesta
}
function ajax(url,callback,metodo = "GET")
{
  let xhr = new XMLHttpRequest
  if(typeof metodo == "string" && typeof url == "string"){
    xhr.open(metodo,url)
  }
  else{
    throw new Error("El metodo y URL tienen que ser tipo String")
  }

  xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
      if(typeof callback == "function"){
        callback(xhr.response)
      }
      else{
        console.log(xhr.response)
      }
    }
  })
  xhr.send()
  return xhr
}

window.addEventListener("hashchange", ()=>{
  contenidoPorHash()
})

if(location.hash) contenidoPorHash(); //si esta vacío da falso

function contenidoPorHash(){
  let url = location.hash.substr(1) + ".html"
  ajax(url,manejarResultado)
}


