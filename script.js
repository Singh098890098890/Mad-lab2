document.getElementById("Mad-Lab-btn").addEventListener("click", MadLab);
document.getElementById("Mad-Lab-btn2").addEventListener("click", MadLab2);

function MadLab() {
    // Input: Retrieve the user's data
    let Enterafamilymember = document.getElementById("EnterFM-input").value;
    let Enterapluralnoun = document.getElementById("EnterPN-input").value;
    let Enteranaction = document.getElementById("EnterAA-input").value;

    // Processing: Make output statement
    let output = `MY ${Enterafamilymember} loves to eat ${Enterapluralnoun} and then ${Enteranaction}`;

    // Output: Display output in the "Your Order" section of the website
    document.getElementById("Mad-Lab-output").innerHTML = output;
}

function MadLab2() {
    // Input: Retrieve the user's data
    let Enterafamilymember = document.getElementById("EnterFM-input").value;
    let Enterapluralnoun = document.getElementById("EnterPN-input").value;
    let Enteranaction = document.getElementById("EnterAA-input").value;

    // Processing: Make output statement
    let output = `There are too many ${Enterapluralnoun} on this ${Enterafamilymember} airplane! I screamed. "Somebody has to ${Enteranaction} on the ${Enterafamilymember} to solve this problem."`;

    // Output: Display output in the "Your Order" section of the website
    document.getElementById("Mad-Lab-output").innerHTML = output;
}
