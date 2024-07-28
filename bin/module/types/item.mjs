export class Item {

    constructor(name) {
        this.name = name;
    }

    /**
     * returns the items included in the item if any.
     * 
     * @returns {Map} the items included, null if none
     */
    items() {
        return (this.items ? this.items : null);
    }

    /**
     * returns the Ego Id used to print or accquire the Item.
     * 
     * @returns {Object} the Ego Id used to print or accquire this Item, or null if none.
     */
    egoId() {
        return (this.egoId ? this.egoId : null);
    }
}