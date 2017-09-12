import { Condition } from './condition';
import { ConditionGroupOperator } from './condition-group-operator.enum';

export class ConditionGroup extends Condition {
    operator: ConditionGroupOperator;
    operands: Array<Condition>;

    constructor(parent: Condition) {
        super(parent);
        this.operands = new Array<Condition>();
    }
}
