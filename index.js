const checkBox = document.querySelector("input");
const para = document.querySelector("p");
let shoppingDone = false;

checkBox.addEventListener("change", () => {
    if (shoppingDone === false) {
        shoppingDone = true;
    } else {
        shoppingDone = false;
    }
    updateAllowance();
});

function updateAllowance() {
    let childALLowance;
    if (shoppingDone === true) {
        childALLowance = 10;
    } else childALLowance= 5;


para.textContent = `child has earned $${childALLowance} this week.`;
}
updateAllowance();