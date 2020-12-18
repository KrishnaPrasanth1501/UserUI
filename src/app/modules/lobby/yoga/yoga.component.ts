import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit {
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
  }
}
