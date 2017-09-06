import { Component } from '@angular/core';

import { ConditionComparison } from './condition-comparison';
import { ConditionGroup } from './condition-group';
import { ConditionComparisonOperator } from './condition-comparison-operator.enum';
import { ConditionGroupOperator } from './condition-group-operator.enum';

@Component({
  selector: 'app-condition-builder',
  templateUrl: './condition-builder.component.html',
  styleUrls: ['./condition-builder.component.css'],
  inputs: ['data']
})
export class ConditionBuilderComponent {
  data : ConditionComparison | ConditionGroup;
  conditionOperators : Array<string>;
  comparisonOperators: Array<string>;

  constructor() {
    this.conditionOperators = new Array<string>();
    for(let condOp in ConditionGroupOperator) {
      this.conditionOperators.push(ConditionGroupOperator[condOp]);
    }
    this.comparisonOperators = new Array<string>();
    for(let compOp in ConditionComparisonOperator) {
      this.comparisonOperators.push(ConditionComparisonOperator[compOp]);
    }
  }
}
