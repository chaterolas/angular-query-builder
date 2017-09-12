import { Component } from '@angular/core';

import { Condition } from './condition';
import { ConditionComparison } from './condition-comparison';
import { ConditionGroup } from './condition-group';
import { ConditionComparisonOperator } from './condition-comparison-operator.enum';
import { ConditionGroupOperator } from './condition-group-operator.enum';

@Component({
  selector: 'app-condition-builder',
  templateUrl: './condition-builder.component.html',
  styleUrls: ['./condition-builder.component.css'],
  inputs: ['condition']
})
export class ConditionBuilderComponent {
  condition : ConditionComparison | ConditionGroup;
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

  isGroup() {
    return (this.condition.hasOwnProperty('operands'));
  }

  addGroup() {
    this.addElement(new ConditionGroup(this.condition));
  }

  addComparison() {
    this.addElement(new ConditionComparison(this.condition));
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
    if(this.condition.parent != null) {
      let parentCondition: ConditionGroup = this.condition.parent as ConditionGroup;
      let thisCondition: Condition = this.condition;
      parentCondition.operands = parentCondition.operands.filter(element => element != this.condition);
    }
  }

}
