import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

  constructor(private router: Router,private service:ApiService) { 

  }

  ngOnInit(): void {
    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":"exhibition",
      "token":localStorage.getItem('token')
    }
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    // this.loadScript('../../../../assets/js/validation.js');
    this.loadScript('../../../../assets/js/twak.js');
    // this.loadScript('../../../../assets/js/form-submission-handler.js');
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
  yogaBooth(){
    this.router.navigate(['home/yoga']);
    this.enterClick(3)

  }
  ideaPad(){
    this.router.navigate(['home/ideapad']);
    this.enterClick(12)
  }
  thinkbooth(){
    this.router.navigate(['home/thinkbook']);
    this.enterClick(13)
  }
  thinkpad(){
    this.router.navigate(['home/thinkpad']);
    this.enterClick(11)
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


}
