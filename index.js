const checkbox = document.querySelector("#check")

function clicar(){
    const body = document.body 
   


if (checkbox.checked) {
    localStorage.setItem("dark", "ativado")
    body.classList.add("dark-mode")

}
else 
{
    localStorage.setItem("dark", "desativado")
    body.classList.remove("dark-mode")
}
}

addEventListener("DOMContentLoaded", ()=>{
    let status = localStorage.getItem("dark")

    if(status === "ativado"){
        checkbox.checked = true
    }
    else {
        checkbox.checked =  false
    }
    clicar()
})

checkbox.addEventListener("change", clicar())