import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
    var data={
      "user_id":localStorage.getItem('user_id'),
      "token":localStorage.getItem('token'),
      "pages":"solutions"
    }
    this.enterClick(4)
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    // this.loadScript('../../../../assets/js/validation.js');
    // this.loadScript('../../../../assets/js/twak.js');
    // this.loadScript('../../../../assets/js/form-submission-handler.js');
  }
  // loadScript(url: string) {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   script.type = 'text/javascript';
  //   body.appendChild(script);
  // }
 
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
}
