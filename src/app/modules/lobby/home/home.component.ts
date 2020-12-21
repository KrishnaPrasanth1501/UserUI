import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import{ModalDirective} from 'ngx-bootstrap/modal';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('closebutton') closebutton:any;
  constructor(private router:Router,private service:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {

    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":"home",
      "token":localStorage.getItem('token'),
    }
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    // this.loadScript('../../../../assets/js/validation.js');
    this.loadScript('../../../../assets/js/twak.js');
    // this.loadScript('../../../../assets/js/form-submission-handler.js');
    var viewcount = localStorage.getItem('view')
    if (viewcount == '0') {
      ($('#videopopup') as any).modal('show');
    }
    window.onbeforeunload = (function () {
  localStorage.setItem('view', '1');

  return null;
})()
// setTimeout(function(){ $('#videopopup').modal('hide'); }, 163000);
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
  
  enterClickExhibition(){
    this.enterClick(2)
    this.router.navigate(['home/exhibition'])
  }
  
  enterClicksolutions(){
    this.enterClick(3)
    this.router.navigate(['home/solutions'])
  }
  
  enterClickNetworking(){
    this.enterClick(5)
    this.router.navigate(['home/networking'])
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
      }
      )
  }
  logout(){
    var data={
      "user_id":localStorage.getItem('user_id')
    }
    this.service.post(this.service.logout,data).subscribe(
      res=>{
        console.log(res)
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('status')
        this.router.navigate([''])
      },
      err=>{
        console.log(err)
      }
      )
  }

}
