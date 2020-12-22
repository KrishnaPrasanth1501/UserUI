import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-think-book',
  templateUrl: './think-book.component.html',
  styleUrls: ['./think-book.component.css']
})
export class ThinkBookComponent implements OnInit {
  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":"think-book",
      "token":localStorage.getItem('token'),
    }
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    this.loadScript('../../../../assets/js/validation.js');
    // this.loadScript('../../../../assets/js/twak.js');
    this.loadScript('../../../../assets/js/form-submission-handler.js');
  }
  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    script.type = 'text/javascript';
    body.appendChild(script);
  }
  enterClick(btn_id:any){
    var data={
      "user_id":localStorage.getItem('user_id'),
      "btn_id":btn_id,
      "token":localStorage.getItem('token')
    }
    this.service.post(this.service.insertuserpoints,data).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      })
    }
  viewProducts(userdata:string){
    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":userdata,
      "token":localStorage.getItem('token'),
    }
    this.enterClick(17)
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }
  formJson={
    "fullname":"",
    "email":"",
    "phone":"",
    "company":"",
    "job_title":"",
    "product_type":"",
    "receiveqoute":false,
    "giveacall":false,
    "country":""
  }
  formFlag: number=0;
  resetFlag(){
    this.formFlag=0
  }
  formsubmit(){
    console.log(this.formJson)
    this.service.post(this.service.googleFormsSubmit,this.formJson).subscribe(
      res=>{
        console.log(res)
        this.formJson={
          "fullname":"",
          "email":"",
          "phone":"",
          "company":"",
          "job_title":"",
          "product_type":"",
          "receiveqoute":false,
          "giveacall":false,
          "country":""
        }
        this.formFlag=1;
      },
      err=>{
        console.log(err)
        this.formJson={
          "fullname":"",
          "email":"",
          "phone":"",
          "company":"",
          "job_title":"",
          "product_type":"",
          "receiveqoute":false,
          "giveacall":false,
          "country":""
        }
      })
  }
  
}
