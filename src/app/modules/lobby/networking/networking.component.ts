import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent implements OnInit {

  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
    var data={
      "user_id":localStorage.getItem('user_id'),
      "pages":"networking",
      "token":localStorage.getItem('token'),
    }
    this.service.post(this.service.inseruservisitpages,data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  
    // this.loadScript('../../../../assets/js/validation.js');
    this.loadScript('https://chatwee-api.com/v2/script/5fda2bf5746ed6272a1475b2.js');
// this.loadScript('../../../../assets/js/form-submission-handler.js');
  }
loadScript(url: string) {
  const body = <HTMLDivElement>document.body;
  const script = document.createElement('script');
  script.innerHTML = '';
  script.src = url;
  script.async = false;
  script.defer = true;

  body.appendChild(script);
}
}
