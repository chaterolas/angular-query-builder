import { Component, OnInit } from '@angular/core';

import { ConditionComparison } from './condition-builder/condition-comparison';
import { ConditionComparisonOperator } from './condition-builder/condition-comparison-operator.enum';
import { ConditionGroup } from './condition-builder/condition-group';
import { ConditionGroupOperator } from './condition-builder/condition-group-operator.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comparison : ConditionGroup;

  constructor() {
    this.comparison = {
      operator: ConditionGroupOperator.AND,
      operands: [
        {
          leftOperand: 3,
          rightOperand: 4,
          operator: ConditionComparisonOperator.Lt
        },
        {
          leftOperand: 6,
          rightOperand: 3,
          operator: ConditionComparisonOperator.Gt
        },
        {
          operator: ConditionGroupOperator.OR,
          operands: [
            {
              leftOperand: 3,
              rightOperand: 4,
              operator: ConditionComparisonOperator.Lt
            },
            {
              leftOperand: 6,
              rightOperand: 3,
              operator: ConditionComparisonOperator.Gt
            }
          ]
        }
      ]
    };
    
  }
}
