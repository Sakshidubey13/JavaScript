const loan = document.getElementById("loan");
const rate = document.getElementById("rate");
const tenure = document.getElementById("tenure");

const loanVal = document.getElementById("loanVal");
const rateVal = document.getElementById("rateVal");
const tenureVal = document.getElementById("tenureVal");

const emiText = document.getElementById("emi");
const interestText = document.getElementById("interest");
const totalText = document.getElementById("total");

function calculateEMI() {

    let P = parseFloat(loan.value);
    let R = parseFloat(rate.value) / 12 / 100;
    let N = parseFloat(tenure.value) * 12;

    let EMI;

    if (R === 0) {
        EMI = P / N;
    } else {
        EMI = (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);
    }

    let totalAmount = EMI * N;
    let totalInterest = totalAmount - P;

    loanVal.innerText = P.toLocaleString();
    rateVal.innerText = rate.value;
    tenureVal.innerText = tenure.value;

    emiText.innerText = "₹" + EMI.toFixed(0);
    interestText.innerText = "₹" + totalInterest.toFixed(0);
    totalText.innerText = "₹" + totalAmount.toFixed(0);
}

loan.addEventListener("input", calculateEMI);
rate.addEventListener("input", calculateEMI);
tenure.addEventListener("input", calculateEMI);

calculateEMI();
