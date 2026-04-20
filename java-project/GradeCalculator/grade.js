let subjectCount = 0;

// Add subjects dynamically
function addSubject() {
    subjectCount++;

    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Subject " + subjectCount + " Marks";

    document.getElementById("inputs").appendChild(input);
}

// Calculate using LOOP
function calculate() {
    let inputs = document.querySelectorAll("#inputs input");

    if (inputs.length === 0) {
        alert("Add at least one subject!");
        return;
    }

    let total = 0;

    // 🔥 LOOP (IMPORTANT FOR YOUR REQUIREMENT)
    inputs.forEach(input => {
        total += Number(input.value);
    });

    let average = total / inputs.length;
    let grade = "";

    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("total").innerText = "Total: " + total;
    document.getElementById("average").innerText = "Average: " + average.toFixed(2) + "%";
    document.getElementById("grade").innerText = "Grade: " + grade;
}

// Add default subjects
for (let i = 0; i < 5; i++) {
    addSubject();
}