import {HomeService} from '../main/home.service';
import {Component} from '@angular/core';

@Component({

selector: 'trans',
template: `
<h2>{{title}}</h2> 
<ul>
<li *ngFor="let tran1 of trans">
{{tran1}}
</li>
</ul>
`
})

export class HomeComponent{
  title = "List of Transaction Support";
  trans;
  
  constructor(service: HomeService){
        this.trans = service.getTrans();
  }
}