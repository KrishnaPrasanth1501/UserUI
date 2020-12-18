import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
  }
  
  enterClickExhibition(){
    this.enterClick(2)
    this.router.navigate(['/exhibition'])
  }
  
  enterClicksolutions(){
    this.enterClick(3)
    this.router.navigate(['/solutions'])
  }
  
  enterClickNetworking(){
    this.enterClick(5)
    this.router.navigate(['/networking'])
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
        this.router.navigate(['signin'])
      },
      err=>{
        console.log(err)
      }
      )
  }

}
