import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  @Input() color:string;
  @Input() percent:string;
  @Input() featureName:string;

  //TODO: define Input fields and bind them to the template.

  constructor() { }

  ngOnInit() {
  }

}
