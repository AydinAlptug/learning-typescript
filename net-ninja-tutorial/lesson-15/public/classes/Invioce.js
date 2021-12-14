// exporting the class Invoice to allow to be imported in other files
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20AC" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export { Invoice };
