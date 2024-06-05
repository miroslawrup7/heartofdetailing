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

//renowacja i ochrona lakieru
let page3_2_1; // stan lakieru: nowy 1, 1-6m 2, 6-12m 3, pow.6 4
let page3_2_2; // efekt: 1-etapowe odśw. lakieru 1, 2-etapowa korekcja lakieru
let page3_2_3; // poziom zabezpieczenia: woskowanie 1, roczna ceramika 2, 3-letnia ceramika 3, 4-letnia ceramika 4

//bezbarwne folie ochronne ppf
let page3_3_1; // pakiety: bikini 1, full front 2, full body 3

//wnętrze
let page3_4_1; // podstawowe czyszcz.
let page3_4_2; // tap. materiał.
let page3_4_3; // tap. skórzana
let page3_4_4; // czyszcz i zab. skór
let page3_4_5; // pranie i impreg. tap. mater.
let page3_4Array = [page3_4_1, page3_4_2, page3_4_3, page3_4_4, page3_4_5]

//dodatkowe
let page3_5_1; // reflekt. ceram
let page3_5_2; // reflekt. folia
let page3_5_3; // felgi ceram
let page3_5_4; // szyby ceram
let page3_5_5; // impreg. dachu
let page3_5_6; // wosk. lakieru
let page3_5Array = [page3_5_1, page3_5_2, page3_5_3, page3_5_4, page3_5_5, page3_5_6]

// przewijanie stron

const movePage = (factor, direction) => {

    const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
    const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
    const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
    const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

    const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
    const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

    const containerWidthWithoutBorder = containerWidth * factor - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
    const newLeftValue = actualPosition + direction * containerWidthWithoutBorder

    let animation_time = 0.5 
    let delay_time = 500
    
    formPagesLoc.style.transition = `left ${animation_time}s ease-out`; // animacja nadmiarowa w prawo
    formPagesLoc.style.left = newLeftValue + direction * 100 + "px"

    setTimeout(()=> {
        formPagesLoc.style.transition = `left 0.5s ease-out`; // animacja wyrównania z powrotem z nadmiaru
        formPagesLoc.style.left = newLeftValue + "px"
    }, delay_time)

    setTimeout(()=> {
        formPagesLoc.style.transition = `left ${animation_time}s ease-in`; // przywrócenie pierwotnego czasu animacji
    }, delay_time + 100)
        
}

buttonNextArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {

        const actualPage = e.target.closest(".form-page")

        formPageArrLoc.forEach((elem)=> {
            if (elem !== actualPage) {
                elem.scrollTop = 0
            }
        })

        if (actualPage.classList.contains("page1")) {
            if (page1 !== undefined) {
                movePage(1, -1)
            }
        }

        if (actualPage.classList.contains("page2")) {
            if (page2 !== undefined) {
                movePage(1, -1)
            }
        }

        if (actualPage.classList.contains("page3")) {
            if (page3Array.some((item)=>(item !== undefined && item !== false))) {
                // if (page3_1) {
                    movePage(1, -1)
                // }
                // } else if (page3_2) {
                //     movePage(2, -1)
                // } else if (page3_3) {
                //     movePage(3, -1)
                // } else if (page3_4) {
                //     movePage(4, -1)
                // } else if (page3_5) {
                //     movePage(5, -1)
                // } else {
                //     movePage(6, -1)
                // }
            }
        }

        if (actualPage.classList.contains("page3_1")) {
            if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
                // if (page3_2) {
                    movePage(1, -1)
                // } 
                // else if (page3_3) {
                //     movePage(2, -1)
                // } else if (page3_4) {
                //     movePage(3, -1)
                // } else if (page3_5) {
                //     movePage(4, -1)
                // } else {
                //     movePage(5, -1)
                // }
            }
        }
        if (actualPage.classList.contains("page3_2")) {
            if (page3_2_1 !== undefined &&
                page3_2_2 !== undefined &&
                page3_2_3 !== undefined) {
                // if (page3_3) {
                    movePage(1, -1)
                // } 
                // else if (page3_4) {
                //     movePage(2, -1)
                // } else if (page3_5) {
                //     movePage(3, -1)
                // } else {
                //     movePage(4, -1)
                // }
            }
        }
        if (actualPage.classList.contains("page3_3")) {
            if (page3_3_1 !== undefined ){
                // if (page3_4) {
                    movePage(1, -1)
                // } 
                // else if (page3_5) {
                //     movePage(2, -1)
                // } else {
                //     movePage(3, -1)
                // }
            }
        }
        if (actualPage.classList.contains("page3_4")) {
            if (page3_4Array.some((item)=>(item !== undefined && item !== false))) {
                // if (page3_5) {
                    movePage(1, -1)
                // } 
                // else {
                //     movePage(2, -1)
                // }
            }
        }
        if (actualPage.classList.contains("page3_5")) {
            if (page3_5Array.some((item)=>(item !== undefined && item !== false))) {
                movePage(1, -1)
            }
        }
    })
})

buttonPrevArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {

        const actualPage = e.target.closest(".form-page")

        formPageArrLoc.forEach((elem)=> {
            if (elem !== actualPage) {
                elem.scrollTop = 0
            }
        })

        if (actualPage.classList.contains("page2")) {
            movePage(1, 1)
        }
        if (actualPage.classList.contains("page3")) {
            movePage(1, 1)
        }
        if (actualPage.classList.contains("page3_1")) {
            movePage(1, 1)
        }
        if (actualPage.classList.contains("page3_2")) {
            if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
               movePage(1, 1)
            } 
            // else {
            //     movePage(2, 1)
            // }
        }
        if (actualPage.classList.contains("page3_3")) {
            if (page3_2_1 !== undefined &&
                page3_2_2 !== undefined &&
                page3_2_3 !== undefined) {
                movePage(1, 1)
            } 
            // else if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
            //     movePage(2, 1)
            //     }
            //  else {
            //     movePage(3, 1)
            // }
        }
        if (actualPage.classList.contains("page3_4")) {
            if (page3_3_1 !== undefined ){
                movePage(1, 1)
            } 
            // else if (page3_2_1 !== undefined &&
            //     page3_2_2 !== undefined &&
            //     page3_2_3 !== undefined) {
            //     movePage(2, 1)
            // } else if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
            //     movePage(3, 1)
            //     }
            //  else {
            //     movePage(4, 1)
            // }
        }
        if (actualPage.classList.contains("page3_5")) {
            if (page3_4Array.some((item)=>(item !== undefined && item !== false))) {
                movePage(1, 1)
            } 
            // else if (page3_3_1 !== undefined ){
            //     movePage(2, 1)
            // } else if (page3_2_1 !== undefined &&
            //     page3_2_2 !== undefined &&
            //     page3_2_3 !== undefined) {
            //     movePage(3, 1)
            // } else if (page3_1Array.some((item)=>(item !== undefined && item !== false))) {
            //     movePage(4, 1)
            //     }
            //  else {
            //     movePage(5, 1)
            // }
        }
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
    if (varname === "page3_2_1") {page3_2_1 = varvalue}
    if (varname === "page3_2_2") {page3_2_2 = varvalue}
    if (varname === "page3_2_3") {page3_2_3 = varvalue}
    if (varname === "page3_3_1") {page3_3_1 = varvalue}
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

    if (varname === "page3_4_1") {page3_4_1 = varvalue}
    if (varname === "page3_4_2") {page3_4_2 = varvalue}
    if (varname === "page3_4_3") {page3_4_3 = varvalue}
    if (varname === "page3_4_4") {page3_4_4 = varvalue}
    if (varname === "page3_4_5") {page3_4_5 = varvalue}

    page3_4Array = [page3_4_1, page3_4_2, page3_4_3, page3_4_4, page3_4_5]

    if (varname === "page3_5_1") {page3_5_1 = varvalue}
    if (varname === "page3_5_2") {page3_5_2 = varvalue}
    if (varname === "page3_5_3") {page3_5_3 = varvalue}
    if (varname === "page3_5_4") {page3_5_4 = varvalue}
    if (varname === "page3_5_5") {page3_5_5 = varvalue}
    if (varname === "page3_6_5") {page3_5_6 = varvalue}

    page3_5Array = [page3_5_1, page3_5_2, page3_5_3, page3_5_4, page3_5_5, page3_5_6]

}

const contentArrLoc = document.querySelectorAll(".content")
contentArrLoc.forEach((elem)=>{
    const selectBoxArrLoc = elem.querySelectorAll(".select-box")
    selectBoxArrLoc.forEach((el)=>{
        el.addEventListener("click", (e)=>{

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

            const actualPage = e.target.closest(".form-page")

            if (actualPage.classList.contains("page3")) {
                console.log(e.currentTarget.dataset.var_name)
                if (e.currentTarget.classList.contains("selected")) {
                    console.log("selected")
                    console.log(formPageArrLoc)
                    document.querySelector(`.${e.currentTarget.dataset.var_name}`).classList.remove("hidden")
                } else {
                    console.log("non-selected")
                    document.querySelector(`.${e.currentTarget.dataset.var_name}`).classList.add("hidden")
                }
            }

        })
    })
})