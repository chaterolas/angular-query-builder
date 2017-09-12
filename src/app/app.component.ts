import { Component, OnInit } from '@angular/core';

import { Condition } from './condition-builder/condition';
import { ConditionComparison } from './condition-builder/condition-comparison';
import { ConditionComparisonOperator } from './condition-builder/condition-comparison-operator.enum';
import { ConditionGroup } from './condition-builder/condition-group';
import { ConditionGroupOperator } from './condition-builder/condition-group-operator.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  condition;

  constructor() {
    this.condition = {
      operator: null,
      operands: []
    };
  }
}
