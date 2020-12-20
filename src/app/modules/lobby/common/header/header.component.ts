import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:any;
  totalpoints: any;
  constructor(private service:ApiService,private router:Router) { }
  
  ngOnInit(): void {
  this.username=localStorage.getItem('username')
  }
  logout(){
    var d=new Date()
    var data={
      "user_id":localStorage.getItem('user_id'),
      "logouttime":""+d
    }
    console.log(data)
    this.service.post(this.service.logout,data).subscribe(
      res=>{
        console.log(res)
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('status')
        this.router.navigate(['signin'])
      },
      err=>{
        console.log(err)
      }
      )
  }
  userpoints(){
    console.log("userpoints")
    var data={
      "user_id":localStorage.getItem('user_id')
    }
    this.service.post(this.service.getuserleaderpoints,data).subscribe(res=>{
      console.log(res)
      this.totalpoints=res.details[0].userpoints
      // for(let data of res.details){
      //   this.totalpoints+=ParseInt(data.userpoints)
      // }
    },err=>{
      console.log(err)
    })

  }


}