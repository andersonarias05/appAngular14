import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name:string = "Harry";
  @Input() lastName:string = "Yustiz";
  @Input() age:number = 20;

  @Output() print = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPrint(event:any) {
    this.print.emit("hola por event")
  }

}