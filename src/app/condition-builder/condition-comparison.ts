import { Condition } from './condition';
import { ConditionComparisonOperator } from './condition-comparison-operator.enum';

export class ConditionComparison extends Condition {
    leftOperand: number | string | Array<number | string>;
    rightOperand: number | string | Array<number | string>;
    operator: ConditionComparisonOperator;

    constructor(parent: Condition) {
        super(parent);
    }
}
