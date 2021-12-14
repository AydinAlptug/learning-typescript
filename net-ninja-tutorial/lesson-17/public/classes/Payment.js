// exporting the class Invoice to allow to be imported in other files
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed \u20AC" + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
