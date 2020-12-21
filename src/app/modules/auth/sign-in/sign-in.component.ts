import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription, interval } from "rxjs";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  fullName:any;
  email:any;
  timerFlag: number=0;
  constructor(private service:ApiService,private router:Router) { }
  // private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date("Jan 01 2021 00:00:00");
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  timeDifference:any;
  secondsToDday:any;
   minutesToDday:any;
  hoursToDday:any;
  daysToDday:any;
  ngOnInit(): void {
    this.loadScript('../../../../assets/js/counter.js');
    if(!!localStorage.getItem('token')){
      this.router.navigate(['home'])
    }else{
     var localtimerflag=sessionStorage.getItem('timer')
      if(localtimerflag=="0"){
        this.timerFlag=1
        console.log(this.timerFlag)
      }else{
        this.timerFlag=0
        console.log(this.timerFlag)
      }
    }
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

    SignIn(){
      var d = new Date();
      var data={
        "username":this.fullName,
        "email":this.email,
        "logintime":d
      }
      if(this.nonEmpty()){
        this.service.post(this.service.user_signIn,data).subscribe(res=>{
          console.log(res)
          localStorage.setItem('user_id',res.details.user_id)
          localStorage.setItem('username',res.details.username)
          localStorage.setItem('email',res.details.email)
          console.log(res.token)
          localStorage.setItem('token',res.token);
          let viewcount = localStorage.getItem('view')
          if (viewcount == '1') {
    
          } else {
            localStorage.setItem('view', '0');
          }
          this.router.navigate(['home'])
          this.empty()
          this.loginClick(1)
        },err=>{
          console.log(err)
          this.empty()
        })
      }
      
      console.log(data)
    }
    nonEmpty(){
      if(this.email!="" && this.fullName!=""){
        return true;
      }else{
        alert("Please Fill the credentials")
        return false;
      }
    }
    empty(){
      this.fullName="";
      this.email="";
    }
    loginClick(btn_id:any){
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
  }
