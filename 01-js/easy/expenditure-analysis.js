/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let n=transactions.length
  let result=[]
  for (let i=0;i<n;i++){
    let cat=transactions[i]['category']
    let price=transactions[i]['price']
    let isNull=true
    for(j=0;j<result.length;j++){
      if(result[j]['category']==cat){
        isNull=false
        result[j]['totalSpent']+=price
      }
    }
    if (isNull){
      result.push({'category':cat,'totalSpent':price})
    }

  }
  return result
}

module.exports = calculateTotalSpentByCategory;
