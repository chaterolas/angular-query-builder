import { ConditionComparison } from './condition-comparison';
import { ConditionGroupOperator } from './condition-group-operator.enum';

export interface ConditionGroup {
    operator: ConditionGroupOperator;
    operands: Array<ConditionGroup | ConditionComparison>;
}
