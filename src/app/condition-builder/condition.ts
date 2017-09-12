export abstract class Condition {
    parent: Condition;

    constructor(parent: Condition) {
        this.parent = parent;
    }
}
