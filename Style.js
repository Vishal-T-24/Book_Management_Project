
var overlay = document.getElementById("overlay")
var pop = document.getElementById("popup")



var showpopup = document.getElementById("addbtn")

var cancelpopup = document.querySelector("#cancel")

var addbook = document.getElementById("addbook")

var con = document.querySelector(".navbar")
var bname = document.querySelector(".input1")
var aname = document.querySelector(".input2")
var des = document.getElementById("description")

showpopup.addEventListener("click", function () {
    overlay.style.display = "block"
    pop.style.display = "block"
    bname.value = ""
    aname.value = ""
    des.value = ""

})


cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    overlay.style.display = "none"
    pop.style.display = "none"
})


addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML = `<h1>${bname.value}</h1>
                   <br>
                <h3>${aname.value}</h3>
                    <br>
                    <p>${des.value}</p>
                        
                    <br>
                    <button onclick="deletebook(event)">Delete</button>`
    con.append(div)
    overlay.style.display = "none"
    pop.style.display = "none"

    if (bname.value == "" || aname.value == "" ) {
        alert("Please fill all mandatory field to add book")
        div.style.display = "none"
        overlay.style.display = "block"
    pop.style.display = "block"
        return
    }
})


function deletebook(event) {
    event.target.parentElement.remove()

}



