import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
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
}
