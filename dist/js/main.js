"use strict";

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
            console.log("Strona 1. Sprawdź czy user może przejśc dalej.")
            allowNext = true
        }

        if (allowNext) {
            formPagesLoc.style.left = newLeftValue + "px"
            // e.target.closest(".form-page").nextElementSibling.scrollTo(0, 0);
           
            
            // navButtonsArrLoc.forEach((el)=>{
            //     el.style.display = "none"
            // })
            // actualPage.nextElementSibling.querySelector(".fixed-buttons").style.display = "flex"
            
            allowNext = false
        }
    })
})

const fillSendingForm = ()=> {
    const sendingForm = document.querySelector("#hidden-summary-form")
    const sendingFormInputsArray = sendingForm.querySelectorAll("input")

    sendingFormInputsArray[0].value = page1radios
    sendingFormInputsArray[1].value = page3radios
    sendingFormInputsArray[2].value = inputText4_1
    sendingFormInputsArray[3].value = inputText4_2
    sendingFormInputsArray[4].value = select4_1
    sendingFormInputsArray[5].value = inputText4_3
    sendingFormInputsArray[6].value = inputText4_4
    sendingFormInputsArray[7].value = inputText4_5
    sendingFormInputsArray[8].value = inputText4_6
    sendingFormInputsArray[9].value = inputText4_7
    sendingFormInputsArray[10].value = inputText4_8
    sendingFormInputsArray[11].value = page4boolean
    sendingFormInputsArray[12].value = inputText4_9
    sendingFormInputsArray[13].value = inputText4_10
    sendingFormInputsArray[14].value = select4_2
    sendingFormInputsArray[15].value = inputText4_11
    sendingFormInputsArray[16].value = inputText4_12
    sendingFormInputsArray[17].value = inputText4_13
    sendingFormInputsArray[18].value = inputText4_14
    sendingFormInputsArray[19].value = inputText4_15
    sendingFormInputsArray[20].value = inputText4_16
    sendingFormInputsArray[21].value = page5radios
    sendingFormInputsArray[22].value = inputText5_1
    sendingFormInputsArray[23].value = inputText5_2
    sendingFormInputsArray[24].value = inputText5_3
    sendingFormInputsArray[25].value = inputText5_4
    sendingFormInputsArray[26].value = page6radios
    sendingFormInputsArray[27].value = inputText6_1
    sendingFormInputsArray[28].value = inputText6_2
    sendingFormInputsArray[29].value = date6_1
    sendingFormInputsArray[30].value = page7radios
    sendingFormInputsArray[31].value = inputText7_1
    sendingFormInputsArray[32].value = inputText7_2
    sendingFormInputsArray[33].value = inputText7_3
    sendingFormInputsArray[34].value = inputText7_4
    sendingFormInputsArray[35].value = inputText7_5
    sendingFormInputsArray[36].value = inputText7_6
    sendingFormInputsArray[37].value = inputText7_7
    sendingFormInputsArray[38].value = inputText8_1
    sendingFormInputsArray[39].value = inputText8_2
    sendingFormInputsArray[40].value = page8radios
    sendingFormInputsArray[41].value = page9checkbox1
    sendingFormInputsArray[42].value = page9checkbox2
    sendingFormInputsArray[43].value = page9checkbox3
    sendingFormInputsArray[44].value = page9checkbox4
    sendingFormInputsArray[45].value = page9checkbox5
    sendingFormInputsArray[46].value = page9checkbox6
    sendingFormInputsArray[47].value = page9checkbox7
    sendingFormInputsArray[48].value = page9checkbox8
    sendingFormInputsArray[49].value = inputText9_1
    sendingFormInputsArray[50].value = inputText9_2
    sendingFormInputsArray[51].value = inputText9_3
    sendingFormInputsArray[52].value = inputText9_4
    sendingFormInputsArray[53].value = inputText9_5
    sendingFormInputsArray[54].value = inputText9_6
    sendingFormInputsArray[55].value = inputText9_7
    sendingFormInputsArray[56].value = inputText9_8
    sendingFormInputsArray[57].value = page9unitsPower
    sendingFormInputsArray[58].value = page9consumptionMeter
    sendingFormInputsArray[59].value = inputText9_9
    sendingFormInputsArray[60].value = page10radiosF
    sendingFormInputsArray[61].value = date10_1
    sendingFormInputsArray[62].value = date10_2
    sendingFormInputsArray[63].value = page10checkbox10_1
    sendingFormInputsArray[64].value = page10radiosG
    sendingFormInputsArray[65].value = page11radios
    sendingFormInputsArray[66].value = page12checkbox12_1
    sendingFormInputsArray[67].value = inputText12_1
    sendingFormInputsArray[68].value = inputText12_2
    sendingFormInputsArray[69].value = inputText12_3
    sendingFormInputsArray[70].value = page13radios
    sendingFormInputsArray[71].value = page14radiosJ
    sendingFormInputsArray[72].value = page14radiosK
    sendingFormInputsArray[73].value = page14radiosL
    sendingFormInputsArray[74].value = page14radiosM
    sendingFormInputsArray[75].value = page14radiosN
    sendingFormInputsArray[76].value = page14radiosO
    sendingFormInputsArray[77].value = page14radiosP
    sendingFormInputsArray[78].value = textarea16_1

    sendingFormInputsArray[79].files = page10file10_1Loc.files
    sendingFormInputsArray[80].files = page16file16_1Loc.files
}

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

        formPagesLoc.style.left = newLeftValue + "px"

        // e.target.closest(".form-page").previousElementSibling.scrollTo(0, 0);

        // const actualPage = e.target.closest(".form-page")

        // navButtonsArrLoc.forEach((el)=>{
        //     el.style.display = "none"
        // })
        // actualPage.previousElementSibling.querySelector(".fixed-buttons").style.display = "flex"
        
    })
})