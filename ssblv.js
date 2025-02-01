const mon = document.querySelector(".mon")
const tue = document.querySelector(".tue")
const wed = document.querySelector(".wed")
const thu = document.querySelector(".thu")
const fri = document.querySelector(".fri")
const sat = document.querySelector(".sat")
const sun = document.querySelector(".sun")

const monnum = document.querySelector(".monnum")
const tuenum = document.querySelector(".tuenum")
const wednum = document.querySelector(".wednum")
const thunum = document.querySelector(".thunum")
const frinum = document.querySelector(".frinum")
const satnum = document.querySelector(".satnum")
const sunnum = document.querySelector(".sunnum")


mon.addEventListener("mouseover", () => {
    monnum.style.display = "block"
})

mon.addEventListener("mouseleave", () => {
    monnum.style.display = "none"
})

tue.addEventListener("mouseover", () => {
    tuenum.style.display = "block"
})

tue.addEventListener("mouseleave", () => {
    tuenum.style.display = "none"
})

wed.addEventListener("mouseover", () => {
    wednum.style.display = "block"
})

wed.addEventListener("mouseleave", () => {
    wednum.style.display = "none"
})

thu.addEventListener("mouseover", () => {
    thunum.style.display = "block"
})

thu.addEventListener("mouseleave", () => {
    thunum.style.display = "none"
})

fri.addEventListener("mouseover", () => {
    frinum.style.display = "block"
})

fri.addEventListener("mouseleave", () => {
    frinum.style.display = "none"
})

sat.addEventListener("mouseover", () => {
    satnum.style.display = "block"
})

sat.addEventListener("mouseleave", () => {
    satnum.style.display = "none"
})

sun.addEventListener("mouseover", () => {
    sunnum.style.display = "block"
})

sun.addEventListener("mouseleave", () => {
    sunnum.style.display = "none"
})
