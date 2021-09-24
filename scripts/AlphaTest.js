
let formDocument = document.forms['isUserAlpha'];
let FailedAlpha = document.getElementById("FailedTestThing");

console.log("it's alpha time");
formDocument.hidden = false;
FailedAlpha.hidden = true;

function FailedTest(){
    console.log("Failed");
    formDocument.hidden = true;
    FailedAlpha.hidden = false;
}

function CalcResults(){
    var Score = 0;
    if (formDocument["Q1"].value === "alpha")
    {
        Score += 1;
    }
    if (formDocument["Q2"].value === "apples")
    {
        Score += 1;
    }
    if (formDocument["Q3"].value === "yes")
    {
        Score += 1;
    }
    if (formDocument["Q4"].value === "scone")
    {
        Score += 1;
    }
    if (formDocument["Q5"].value === "yes")
    {
        Score += 1;
    }


    console.log(Score);
}

function RetryTest(){
    console.log("Trying Again");
    formDocument.hidden = false;
    FailedAlpha.hidden = true;
}