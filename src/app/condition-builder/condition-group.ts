import { ConditionComparison } from './condition-comparison';
import { ConditionGroupOperator } from './condition-group-operator.enum';

export class ConditionGroup {
    operator: ConditionGroupOperator;
    operands: Array<ConditionGroup | ConditionComparison>;

    constructor() {
        this.operands = new Array<ConditionGroup | ConditionComparison>();
    }
}
