var user = prompt("You're walking through the mall and come to a fork in the road.  You can shop kiosks, play in the arcade, or eat in the food court.  Do you choose shop, play or eat?").toUpperCase();

switch(user){
    case 'SHOP':
        console.log("Cool. Big sale on crimpers.");
        var shop = prompt("Would you like a coupon? (YES or NO)").toUpperCase();
        var sample = prompt("Would you like a sample sliver of soap? (YES or NO)").toUpperCase();
        if (shop === 'YES' || sample === 'YES') {
            console.log("Okay, here you go!");
        } else {
            console.log("Fine, then.");
        }
        break;
    case 'PLAY':
        console.log("Here's some quarters. Earn only 400 tickets for a plastic slinky!");
        break;
    case 'EAT':
        console.log("Don't just try the free samples. Buy something.");
        var chinese = prompt("Would you like to order an egg roll? (YES or NO)").toUpperCase();
        var wok = prompt("What about Fried Rice? (YES or NO)").toUpperCase();
        if (chinese === 'YES' && wok === 'YES'){
            console.log("Try Wok 'n Roll!");
        } else {
            console.log("Try Sbarro's!");
        }
        break;
    default:
        console.log("You can't do that at this mall.");
}
