import { ConditionComparisonOperator } from './condition-comparison-operator.enum';

export class ConditionComparison  {
    leftOperand: number | string | Array<number | string>;
    rightOperand: number | string | Array<number | string>;
    operator: ConditionComparisonOperator;
}
