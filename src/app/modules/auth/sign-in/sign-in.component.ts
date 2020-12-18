import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  fullName:any;
  email:any;
  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('token')){
      this.router.navigate(['home'])
    }
    }

    SignIn(){
      var data={
        "username":this.fullName,
        "email":this.email
      }
      if(this.nonEmpty()){
        this.service.post(this.service.user_signIn,data).subscribe(res=>{
          console.log(res)
          localStorage.setItem('user_id',res.details[0].user_id)
          localStorage.setItem('username',res.details[0].username)
          localStorage.setItem('email',res.details[0].email)
          localStorage.setItem('email',res.details[0].country)
          localStorage.setItem('email',res.details[0].status)
          console.log(res.token)
          localStorage.setItem('token',res.token);
          this.router.navigate(['home'])
          this.empty()
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
  }
