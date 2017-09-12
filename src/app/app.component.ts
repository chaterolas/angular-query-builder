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
    this.comparison = new ConditionGroup;
  }
}
