import { Component } from '@angular/core';
import{NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent {


  constructor(private _services:NewsapiservicesService){}
businessNewsDisplay:any=[];

  ngOnInit():void{

this._services.businessNews().subscribe((result)=>{
this.businessNewsDisplay=result.articles;
});


  }

}
