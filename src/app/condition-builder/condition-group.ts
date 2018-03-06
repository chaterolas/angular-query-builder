import { Condition } from './condition';
import { ConditionGroupOperator } from './condition-group-operator.enum';

export class ConditionGroup extends Condition {
    operator: ConditionGroupOperator;
    operands: Array<Condition>;

    constructor() {
        super();
        this.operands = new Array<Condition>();
    }
}
