import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-builder',
  templateUrl: './condition-builder.component.html',
  styleUrls: ['./condition-builder.component.css']
})
export class ConditionBuilderComponent implements OnInit {
  data = {
    operator: "<"
  };

  constructor() { }

  ngOnInit() {
  }

}
