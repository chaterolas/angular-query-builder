import { Component } from '@angular/core';

import { ConditionComparison } from './condition-comparison';
import { ConditionGroup } from './condition-group';
import { ConditionComparisonOperator } from './condition-comparison-operator.enum';
import { ConditionGroupOperator } from './condition-group-operator.enum';

@Component({
  selector: 'app-condition-builder',
  templateUrl: './condition-builder.component.html',
  styleUrls: ['./condition-builder.component.css'],
  inputs: ['data', 'parentComponent']
})
export class ConditionBuilderComponent {
  data : ConditionComparison | ConditionGroup;
  parentComponent : ConditionBuilderComponent;
  thisComponent: ConditionBuilderComponent;
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
    this.thisComponent = this;
  }

  isGroup() {
    return (this.data.hasOwnProperty('operands'));
  }

  addGroup() {
    this.addElement(new ConditionGroup);
  }

  addComparison() {
    this.addElement(new ConditionComparison);
  }

  addElement(condition : ConditionGroup | ConditionComparison) {
    if(this.data instanceof ConditionGroup) {
      let group : ConditionGroup = this.data as ConditionGroup;
      group.operands.push(condition);
    }
    else {
      console.log("Imposible to add elements to a comparison");
    }
  }

  removeElement() {
    if(this.parentComponent != null) {
      let parentContainer: ConditionGroup = this.parentComponent.data as ConditionGroup;
      let thisComponentData = this.data;
      parentContainer.operands = parentContainer.operands.filter(element => element != thisComponentData);
    }
  }

}
