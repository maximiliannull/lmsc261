const priceofIceCream = 5;
let paymentReceived = prompt("How much are you willing to pay");
let isPaymentEnough = paymentReceived >= priceofIceCream;
if (isPaymentEnough){
    print("Thanks! Enjoy the Ice Cream!")
    print(paymentReceived - priceofIceCream + "$ Extra! Thanks bud.")
}else{
    print("Not enough cash!")
};

