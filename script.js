const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
const treck = document.querySelector(".treck")
s2.onclick = function () {
    treck.scrollBy({ behavior: "smooth", left: 10000 })
}
s1.onclick = function () {
    treck.scrollBy({ behavior: "smooth", left: -10000 })
}

// btn to start
const btn = document.querySelector(".btn_to_start")
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth" 
    })

}