import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cursoAngular';
  public person!: IPerson;
  //public person: IPerson = { name: '', lastName: '', age: 0 };

  getPrint(event:IPerson) {
    console.log('Hi parent component:', event);
    this.person = event;
  }
  /*
  getPrint(event:string) {
    console.log(event);
  }*/

  constructor() {
    console.log('hi harry');
    
    /** ----------------------- TASK#2 ------------------------
    //Operator Splice
	  const A = ['a','b','c','d','e'];
	  const auxSplice = A.splice(1,1)
	  console.log('auxSplice:', A, auxSplice)
	
	  //Operator Reduce
	  const auxReduce = [1,2,3,4,5].reduce((prev, value, index) => prev + value, 0)
	  console.log("auxReduce: ", auxReduce)
	
	  //JSON Operators
	  const auxJson = {id: 1, name: 'Juan', lastName: 'Perez'};
	
    //Entries, Keys, Values
    const auxEntries = Object.entries(auxJson)
    console.log("auxEntries: ", auxEntries)
    
    const auxKeys = Object.keys(auxJson)
    console.log("auxEntries: ", auxEntries)
    
    const auxValues = Object.values(auxJson)
    console.log("auxEntries: ", auxEntries)
	
    //CONST
    //LET
    const a = 1
    console.log('CONST:', a)
    
    for(let i=1; i<=5; i++) {
      //console.log('INDEX:', i)
    }
    
    for(let i=1; i<=5; i++) {
      //console.log('INDEX:', i)
    }
    
    for(let i=1; i<=5; i++) {
      //console.log('INDEX:', i)
    }

    //Spread Operator
    const b = [1,2,3,4,5,6]
    const c = [...b,7,8,9,10]
    console.log("SPREAD", c)
	
    //Rest Operator
    this.getRest(1,2, 'hola')
	
    const person = {
      id: 1, name: 'Juan', country: {idCountry:1, cod: 'LP'}
    }

    //DESESTRUCTURACION
    //const C = person.country
    //const ID = person.id
	
    const {country, id} = person;
    console.log('country:', country)

    const data = {
      0: {id:1, name: 'juan', age:24},
      1: {id:2, name: 'maria', age:10}
    }
	
    //convert to an array and get the sum of ages
    const resp = Object.values(data).reduce((prev, value) => prev + value.age, 0)
    console.log("resp:", resp)

    //convert to an array and filter the person over 10, shows only IDs as array
	  //Result: [1]
	  const resp1 = Object.values(data).filter(p => p.age > 10).map(p => p.id)
	  console.log("resp1", resp1)

    /** ----------------------- TASK#1 ------------------------ 
    const auxMap = [1,2,3,4,5].map(num => num * 2)
    console.log("auxMap", auxMap);
    
    const auxForEach = [1,2,3,4,5].forEach(num => num * 2)
    console.log("auxForEach", auxForEach);
    
    const auxFind = [1,2,3,4,5].find(num => num === 3)
    console.log("auxFind", auxFind);
    
    const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 5)
    console.log("auxFindIndex", auxFindIndex);
    
    const auxIndexOf = [1,2,3,4,5].indexOf(5)
    console.log("auxIndexOf", auxIndexOf);
    
    const auxIndexOfString = "Hola Mundo Test".indexOf("Test")
    console.log("auxIndexOfString", auxIndexOfString);
    
    const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
    console.log("auxFilter", auxFilter);
    
    const auxJoin = [1,2,3,4,5].join('-')
    console.log("auxJoin", auxJoin);
    
    const auxSplit = "hola, mundo, test".split(',')
    console.log("auxSplit", auxSplit);
    
    /*
    private getName(name: string): string {
      return 'hi' + name;
    }
    
    /* ---Arrow function
    const getName = (name: string) => {return "hi"+name;}
    const getName = (name: string) => "hi" + name
    const getName = () => "hi"
    const getName = (name: string, lastName:string) => lastName
    const mult = num => num *2 */
  }
  
	getRest(...params: any[]) {
		console.log('REST:', params)
	} //TASK#2 Rest Operator

}