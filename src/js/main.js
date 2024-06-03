"use strict";

const containerLoc = document.querySelector(".container")
const formPagesLoc = document.querySelector(".form-pages")
const formPageArrLoc = document.querySelectorAll(".form-page")
const buttonNextArrLoc = document.querySelectorAll(".button.next")
const buttonPrevArrLoc = document.querySelectorAll(".button.prev")

// stan auta
let page1; // nowe 1, używane 2

// wielkość auta
let page2; // małe 1, średnie 2, duże i suv 3, duże suv i większe 4

// kategoria
let page3_1; // stylizacja
let page3_2; // renowacja i ochrona lakieru
let page3_3; // bezbarwne folie ochronne ppf
let page3_4; // wnętrze
let page3_5; // dodatkowe
let page3Array = [page3_1, page3_2, page3_3, page3_4, page3_5]

//stylizacja
let page3_1_1; // przyciemnianie szyb
let page3_1_2; // przyciemnianie lamp
let page3_1_3; // dechroming
let page3_1_4; // zmiana koloru całego auta
let page3_1_5; // zmiana koloru dachu
let page3_1_6; // zmiana koloru lusterek
let page3_1Array = [page3_1_1, page3_1_2, page3_1_3, page3_1_4, page3_1_5, page3_1_6]

// przewijanie stron

const movePage = (factor) => {

    const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
    const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
    const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
    const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

    const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
    const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

    const containerWidthWithoutBorder = containerWidth * factor - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
    const newLeftValue = actualPosition - containerWidthWithoutBorder

    // if (allowNext) {
        let animation_time = 0.5 * factor
        let delay_time = 500 * factor
        console.log(animation_time)
        
        formPagesLoc.style.transition = `left ${animation_time}s ease-out`;
        formPagesLoc.style.left = newLeftValue - 100 + "px"
        setTimeout(()=> {
            formPagesLoc.style.transition = `left ${animation_time}s ease-out`;
            formPagesLoc.style.left = newLeftValue + "px"
        },delay_time)
        setTimeout(()=> {
            formPagesLoc.style.transition = `left ${animation_time}s ease-in`;
        },delay_time+100)
        
        // allowNext = false
    // }
}

buttonNextArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {

        const actualPage = e.target.closest(".form-page")

        // let allowNext = false

        if (actualPage.classList.contains("page1")) {
            if (page1 !== undefined) {
                movePage(1)
            }
        }

        if (actualPage.classList.contains("page2")) {
            if (page2 !== undefined) {
                movePage(1)
            }
        }

        if (actualPage.classList.contains("page3")) {
            if (page3Array.some((item)=>(item !== undefined && item !== false))) {
                if (page3_1) {
                    movePage(1)
                }
            }
        }

        if (actualPage.classList.contains("page3_1")) {
            if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
                movePage(1)
            }
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



// włączanie klasy selected dla wybranej opcji (boxa) i ustawienie wartości dla odp. zmiennej

const changeVariableOnce = (varname, varvalue) => {
    if (varname === "page1") {page1 = varvalue}
    if (varname === "page2") {page2 = varvalue}
}

const changeVariableMulti = (varname, varvalue) => {
    if (varname === "page3_1") {page3_1 = varvalue}
    if (varname === "page3_2") {page3_2 = varvalue}
    if (varname === "page3_3") {page3_3 = varvalue}
    if (varname === "page3_4") {page3_4 = varvalue}
    if (varname === "page3_5") {page3_5 = varvalue}

    page3Array = [page3_1, page3_2, page3_3, page3_4, page3_5]

    if (varname === "page3_1_1") {page3_1_1 = varvalue}
    if (varname === "page3_1_2") {page3_1_2 = varvalue}
    if (varname === "page3_1_3") {page3_1_3 = varvalue}
    if (varname === "page3_1_4") {page3_1_4 = varvalue}
    if (varname === "page3_1_5") {page3_1_5 = varvalue}
    if (varname === "page3_1_6") {page3_1_6 = varvalue}

    page3_1Array = [page3_1_1, page3_1_2, page3_1_3, page3_1_4, page3_1_5, page3_1_6]
}

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
                changeVariableOnce(el.dataset.var_name, el.dataset.var_value)
            }

            if (elem.classList.contains("multi")) {
                if (el.classList.contains("selected")) {
                    el.classList.remove("selected")
                    changeVariableMulti(el.dataset.var_name, false)
                } else {
                    el.classList.add("selected")
                    changeVariableMulti(el.dataset.var_name, true)
                }
            }
            console.log(
                "page1", page1, 
                "page2", page2, 
                "page3_1", page3_1, "page3_2", page3_2, "page3_3", page3_3, "page3_4", page3_4, "page3_5", page3_5,
                "page3_1_1", page3_1_1, "page3_1_2", page3_1_2, "page3_1_3", page3_1_3, "page3_1_4", page3_1_4, "page3_1_5", page3_1_5, "page3_1_6", page3_1_6
            )
        })
    })
})