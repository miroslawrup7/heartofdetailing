"use strict";

const containerLoc = document.querySelector(".container")
const formPagesLoc = document.querySelector(".form-pages")
const formPageArrLoc = document.querySelectorAll(".form-page")
const buttonNextArrLoc = document.querySelectorAll(".button.next")
const buttonPrevArrLoc = document.querySelectorAll(".button.prev")

// przewijanie stron

buttonNextArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition - containerWidthWithoutBorder

        const actualPage = e.target.closest(".form-page")

        let allowNext = false

        if (actualPage.classList.contains("page1")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page2")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page3")) {
            allowNext = true
        }
        if (actualPage.classList.contains("page4")) {
            allowNext = true
        }

        if (allowNext) {
            formPagesLoc.style.left = newLeftValue - 100 + "px"
            setTimeout(()=> {
                formPagesLoc.style.transition = "left 0.3s ease-out";
                formPagesLoc.style.left = newLeftValue + "px"
            },500)
            setTimeout(()=> {
                formPagesLoc.style.transition = "left 0.5s ease-in";
            },600)
            
            allowNext = false
        }
    })
})

buttonPrevArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition + containerWidthWithoutBorder

        formPagesLoc.style.left = newLeftValue + 100 + "px"
        setTimeout(()=> {
            formPagesLoc.style.transition = "left 0.3s ease-out";
            formPagesLoc.style.left = newLeftValue + "px"
        },550)
        setTimeout(()=> {
            formPagesLoc.style.transition = "left 0.5s ease-in";
        },600)
    })
})

// rozszerzenie działania checboxów

// const inputSelectBoxArrLoc = document.querySelectorAll(".select-box input")

// inputSelectBoxArrLoc.forEach((elem) => {
//     elem.closest(".select-box").addEventListener("click", ()=>{
//         elem.click()
//     })
// })

// włączanie klasy selected dla wybranej opcji (boxa)

const contentArrLoc = document.querySelectorAll(".content")
contentArrLoc.forEach((elem)=>{
    const selectBoxArrLoc = elem.querySelectorAll(".select-box")
    selectBoxArrLoc.forEach((el)=>{
        el.addEventListener("click", ()=>{
            if (elem.classList.contains("once")) {
                selectBoxArrLoc.forEach((element)=>{
                    element.classList.remove("selected")
                })
                el.classList.add("selected")
            }
            if (elem.classList.contains("multi")) {
                console.log(el, "multi")
                el.classList.toggle("selected")
            }
        })
    })
})