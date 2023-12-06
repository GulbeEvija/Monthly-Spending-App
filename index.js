const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTwo = document.querySelector("#addPlan");
buttonTwo.addEventListener("click", showSpendingPlan);


function showSpendingPlan(e) {
    e.preventDefault();
    plan.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const moneyOne = document.querySelector("#salaryOne").value;
    const moneyTwo = document.querySelector("#salaryTwo").value;
    const spendingPlan = document.querySelector("#plan").value;


    if (moneyOne === "" || moneyTwo === "") {
        Swal.fire({
            icon: 'error',
            text: 'Please enter your information!',
        })
      return false
    }


    let totalMoney = Number(moneyOne) + Number(moneyTwo);
    let payYourself = totalMoney * 0.10;
    let livingExpenses = totalMoney * spendingPlan;
    let otherExpenses = (totalMoney - (livingExpenses + payYourself)) / 2;

    totalMoney = totalMoney.toFixed(2);
    payYourself = payYourself.toFixed(2);
    livingExpenses = livingExpenses.toFixed(2);
    otherExpenses = otherExpenses.toFixed(2);


    document.querySelector("#salaryTotal").textContent = totalMoney;
    document.querySelector("#payYourself").textContent = payYourself;
    document.querySelector("#expenses").textContent = livingExpenses;
    document.querySelector("#savings").textContent = otherExpenses;
    document.querySelector("#investment").textContent = otherExpenses;


}