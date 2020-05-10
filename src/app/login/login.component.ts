import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin/admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message:string;
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  dologin(data)
  {

this.adminservice.login(data.username,data.password).subscribe((data)=>{
console.log(data);
},(error)=>{
if(error.error.text=="success")
{
sessionStorage.setItem("username",data.username);
this.router.navigate(['']);
}
else{


this.message=`<center>Username or password is incorrect. Please Try again</center>`;

}




});



  }

}
 