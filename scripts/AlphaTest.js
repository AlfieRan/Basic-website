
let formDocument = document.forms['isUserAlpha'];
let FailedAlpha = document.getElementById("FailedTestThing");
let Alpha = document.getElementById("AlphaStatus");
let Sigma = document.getElementById("SigmaStatus");

console.log("it's alpha time");
formDocument.hidden = false;
FailedAlpha.hidden = true;
Alpha.hidden = true;
Sigma.hidden = true;

function FailedTest(){
    console.log("Failed");
    formDocument.hidden = true;
    Alpha.hidden = true;
    Sigma.hidden = true;
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

    formDocument.hidden = true;
    if (score < 4)
    {
        FailedAlpha.hidden = false;
        Alpha.hidden = true;
        Sigma.hidden = true;
    }
    else if(score == 4)
    {
        FailedAlpha.hidden = true;
        Alpha.hidden = false;
        Sigma.hidden = true;
    }
    else if (score == 5)
    {
        FailedAlpha.hidden = true;
        Alpha.hidden = true;
        Sigma.hidden = false;
    }
}

function RetryTest(){
    console.log("Trying Again");
    formDocument.hidden = false;
    FailedAlpha.hidden = true;
}