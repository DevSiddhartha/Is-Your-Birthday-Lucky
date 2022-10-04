const inputDate = document.querySelector("#input-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const output = document.querySelector("#output");

function calculateSum(dob)
{
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++)
    {
        sum += Number(dob[i]);
    }
    return sum;
}

function compareValues(sum, luckyNumber)
{
    if (sum % luckyNumber === 0)
    {
        output.value = "Your birthday is lucky!!";
    } else
    {
        output.value = "Your birthday is not lucky :("
    }
}

function clickHandler()
{
    const dob = inputDate.value;
    const sum = calculateSum(dob);
    if (sum && dob)
    {
        compareValues(sum, luckyNumber.value);
    } else
    {
        output.value = "Please enter both the fields";
    }
}

checkNumberBtn.addEventListener("click", clickHandler)
