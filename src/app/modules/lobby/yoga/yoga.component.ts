import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})

export class YogaComponent implements OnInit {
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
  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":"yoga",
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
    const body = <HTMLDivElement> document.body;
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
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    this.enterClick(14)
  }
  formsubmit(){
    console.log(this.formJson)
    this.service.post(this.service.googleFormsSubmit,this.formJson).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      })
  }
  
}
