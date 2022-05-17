// **Open/Closed Principle**
// GOOD
var iceCreamFlavors = ["chocolate", "vanilla"];
var iceCreamMaker = {
    makeIceCream(flavor) {
        if (iceCreamFlavors.indexOf(flavor) > -1) {
            console.log("Great success. You now have ice cream.")
        } else {
            console.log("Epic fail. No ice cream for you.")
        }
    }
    addFlavor(flavor) {
        iceCreamFlavors.push(flavor);
    }
}
export default iceCreamMaker;

// **Single Responsibility Principle**
class UserAuth {
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {
        // ...
    }
}


class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }
}