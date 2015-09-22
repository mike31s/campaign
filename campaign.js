/**
 * Created by mike on 9/22/2015.
 */

//Create a function called contributionsByParty(data) that can be passed campaignContributions and that returns an object specifying a party and the total amount of money they received in contributions. For example: {Democrat: 3038674.969999999, Republican: 187827.87, Non-Partisan: 498217.2000000001, Independent: 35350, Green: 2000}.


function currencyToNum(currencyString) {
    return Number(currencyString.replace(/[^0-9\.]+/g,""));
}
var testdata = campaignContributions.splice(0,2);

console.log(currencyToNum("$123.45") + currencyToNum("$20.00"));  // prints 143.45
//contributionsByParty(data)


function groupByParty(data)
{
    return _.groupBy(data, "Party");
}

function addAmount(memo, record)
{
    return memo += currencyToNum(record["Amount"]);   //memo is whats geting added to
}

function totalAmount(data)
{

    return _.reduce(data,addAmount,0);
}




var parties = groupByParty(campaignContributions);
console.log((parties));
console.log("*******");

console.log(totalAmount(testdata));
console.log("*************************");

console.log(_.mapObject(parties,totalAmount ) );

