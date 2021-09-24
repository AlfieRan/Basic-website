
let formDocument = document.forms['isUserAlpha'];
let FailedAlpha = document.getElementById("FailedTestThing");
let Alpha = document.getElementById("AlphaStatus");
let Sigma = document.getElementById("SigmaStatus");

console.log("it's alpha time");
formDocument.hidden = false;
FailedAlpha.hidden = true;
Alpha.hidden = true;
Sigma.hidden = true;

function FailedTest(e){
    e.preventDefault();
    console.log("Failed");
    formDocument.hidden = true;
    Alpha.hidden = true;
    Sigma.hidden = true;
    FailedAlpha.hidden = false;
}

function CalcResults(e){
    e.preventDefault();
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
    if (Score < 4)
    {
        FailedAlpha.hidden = false;
        Alpha.hidden = true;
        Sigma.hidden = true;
        formDocument.hidden = true;
    }
    else if(Score == 4)
    {
        FailedAlpha.hidden = true;
        Alpha.hidden = false;
        Sigma.hidden = true;
        formDocument.hidden = true;
    }
    else if (Score == 5)
    {
        FailedAlpha.hidden = true;
        Alpha.hidden = true;
        Sigma.hidden = false;
        formDocument.hidden = true;
    }
}

function RetryTest(){
    console.log("Trying Again");
    formDocument.hidden = false;
    FailedAlpha.hidden = true;
}