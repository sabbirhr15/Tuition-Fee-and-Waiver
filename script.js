function calculateFee() {
    // Define constants
    const totalTuition = 69600;
    const semesterFee = 14667;
    const regTimePayable = 33867;

    // Get values from user input
    const waiver = parseInt(document.getElementById('waiver').value);
    const agree = document.getElementById('agree').value.toUpperCase();
    const paid = parseInt(document.getElementById('paid').value);

    // Calculate waiver amount and total payable amount
    const waveAmount = totalTuition * (waiver / 100);
    const afterWaiver = totalTuition - waveAmount;
    const totalPayable = afterWaiver + semesterFee;

    let resultText = `You have got a waiver of ${waveAmount} taka. Total payable: ${totalPayable} taka.`;

    // Handle final payment logic
    if (agree === 'Y') {
        resultText += `<br>So you have to pay before final = ${totalPayable - regTimePayable} taka.`;
    } else if (agree === 'N') {
        resultText += `<br>So you have to pay before final = ${totalPayable - paid} taka.`;
    } else {
        resultText += `<br>Please enter 'Y' or 'N' for the payment status.`;
    }

    // Display the result on the page
    document.getElementById('result').innerHTML = resultText;
}
