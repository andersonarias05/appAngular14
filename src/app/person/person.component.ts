import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name:string = '';
  @Input() lastName:string = '';
  @Input() age:number = 0;

  @Output() print = new EventEmitter<IPerson>();

  /*
  @Input() name:string = "Harry";
  @Input() lastName:string = "Yustiz";
  @Input() age:number = 20;

  @Output() print = new EventEmitter();*/

  constructor() { }

  ngOnInit() {
  }

  onPrint():void {
    this.print.emit({
      name: this.name, lastName: this.lastName, age: this.age
    })
  }

  /*
  onPrint(event:any) {
    this.print.emit("hola por event")
  }*/

}