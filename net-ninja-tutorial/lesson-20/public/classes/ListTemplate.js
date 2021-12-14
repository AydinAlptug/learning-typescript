/*
    1. register a list container (ul) in the costructor
    2. create a render method to render a new 'li' to the container
        -- accepts arguments: invoice or payment, a heading, a position
        -- create the html temlate (li, h4, p)
        -- add the 'li' template to the start/end of the list
*/
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        h4.textContent = heading;
        li.append(h4);
        p.textContent = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
export { ListTemplate };
