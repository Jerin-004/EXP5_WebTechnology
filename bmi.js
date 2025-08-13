function BMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (weight > 0 && height > 0) {
    let bmi = (weight / (height / 100) ** 2).toFixed(1);
    document.getElementById("result").innerText = bmi;

    let status = "";
    if (bmi < 18) {
      status = "Underweight BMI";
    } else if (bmi >= 18 && bmi < 25) {
      status = "Normal BMI";
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight BMI";
    } else if (bmi >= 30) {
      status = "Obese BMI";
    }

    document.getElementById("status").innerText = status;
  } else {
    document.getElementById("result").innerText = "0.0";
    document.getElementById("status").innerText = "";
  }
}
