const tabName = document.querySelector(".tab-name");
const tabContent = document.querySelector(".p-content");
const inputEl = document.querySelectorAll(".tab-name input")
const tabWrap = document.querySelector(".tab-content");
const numInp = document.querySelector(".num-input");
const changeTab = document.querySelector(".change-tab")
// console.log(inputEl)
function changeInp() {

    let inVal = numInp.value;
    if (inVal === inputEl[0].value) {
        inputEl[1].checked = false
        inputEl[2].checked = false
        tabContent.textContent = `${inputEl[0].id}`
    } if (inVal === inputEl[1].value) {
        inputEl[0].checked = false
        inputEl[2].checked = false
        tabContent.textContent = `${inputEl[1].id}`
    } if (inVal === inputEl[2].value) {
        inputEl[0].checked = false
        inputEl[1].checked = false
        tabContent.textContent = `${inputEl[2].id}`
    }
}

changeTab.addEventListener("click", changeInp);




tabName.addEventListener("input", function (e) {
    const target = e.target;
    if (target && target.type) {
        inputEl.forEach(item => {
            if (target == item) {
                tabContent.textContent = ""
                tabContent.textContent = `${target.id} ` + " content"
            }
        });
    }
})




// const tabPositive = document.getElementById("tab-positive");
// tabPositive.addEventListener("input", function () {
//     tabChange("Positive", tabPositive, 1)
// });

// const tabNegative = document.getElementById("tab-negative");
// tabNegative.addEventListener("input", function () {
//     tabChange("Negative", tabNegative, 2)
// });

// const tabNeutral = document.getElementById("tab-neutral");
// tabNeutral.addEventListener("input", function () {
//     tabChange("Neutral", tabNeutral, 3)
// });

// const pContent = document.getElementById("p-content");

// const btnTab = document.getElementById("btnTab");

// btnTab.addEventListener("click", indexChange);

// function tabChange(content, theTab, number) {
//     if (number === 1) {
//         tabPositive.checked = true;
//     } else if (number === 2) {
//         tabNegative.checked = true;
//     } else if (number === 3) {
//         tabNeutral.checked = true;
//     }

//     if (theTab.checked === true) {
//         pContent.innerHTML = content + " content";
//     }
// }

// function indexChange() {
//     let inputValue = document.getElementById("index-field").value;
//     if (inputValue === "1") {
//         tabChange("Positive", tabPositive, 1);
//     } else if (inputValue === "2") {
//         tabChange("Negative", tabNegative, 2);
//     } else if (inputValue === "3") {
//         tabChange("Neutral", tabNeutral, 3);
//     } else if (inputValue !== "") {
//         alert("Index is invalid");
//     }
// }





