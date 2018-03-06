import { Component, Input } from '@angular/core';

import { Condition } from './condition';
import { ConditionComparison } from './condition-comparison';
import { ConditionGroup } from './condition-group';
import { ConditionComparisonOperator } from './condition-comparison-operator.enum';
import { ConditionGroupOperator } from './condition-group-operator.enum';

@Component({
  selector: 'app-condition-builder',
  templateUrl: './condition-builder.component.html',
  styleUrls: ['./condition-builder.component.css']
})
export class ConditionBuilderComponent {
  @Input()
  condition: ConditionComparison | ConditionGroup;
  @Input()
  parentCondition: ConditionGroup;

  conditionOperators: Array<string>;
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

  isGroup() {
    return (this.condition.hasOwnProperty('operands'));
  }

  addGroup() {
    this.addElement(new ConditionGroup());
  }

  addComparison() {
    this.addElement(new ConditionComparison());
  }

  addElement(condition : Condition) {
    if(this.condition.hasOwnProperty('operands')) {
      (this.condition as ConditionGroup).operands.push(condition);
    }
    else {
      console.log("Imposible to add elements to a comparison");
    }
  }

  removeElement() {
    if(this.parentCondition != null) {
      let thisCondition: Condition = this.condition;
      this.parentCondition.operands = this.parentCondition.operands.filter(element => element != this.condition);
    }
  }
}
