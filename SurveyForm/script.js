function saveResponse() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var role = document.getElementById("role").value;
    var recommendations = document.getElementsByClassName("recommendation");
    var language = document.getElementById("language").value;
    var improvements = document.getElementsByClassName("improvement");

    let recommendationValue,
        improvementValues = [];
    for (let i of recommendations) {
        if (i.checked == true) {
            recommendationValue = i.value;
        }
    }

    for (let i of improvements) {
        if (i.checked == true) {
            improvementValues.push(i.value);
        }
    }

    obj = {
        "name": name,
        "email": email,
        "age": age,
        "role": role,
        "recommendation": recommendationValue,
        "language": language,
        "improvements": improvementValues,
    };

    let allResponses = JSON.parse(localStorage.getItem("all_responses"));
    if(allResponses === null)
        allResponses = [];
    allResponses.push(obj);
    localStorage.setItem("all_responses", JSON.stringify(allResponses));

}

function printResponses() {
    console.log(localStorage.getItem("all_responses"));
}
