const conesSoldPerHour = 14;
let hour = 0;
const inventory = {amount: 1000};

for (let i = 1; i <= 12; i++)  {
  hour++
    print(conesSoldPerHour * hour + " sold at hour " + hour);
    console.log(inventory)
    inventory.amount = inventory.amount - conesSoldPerHour
    print(inventory.amount)
};