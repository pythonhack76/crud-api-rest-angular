import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password : string = '';
  keys : string = '';

  constructor(private auth : AuthService ) { }

  ngOnInit(): void {
  }

  register() {
    if(this.email == ''){
      alert('si prega di inserire una email');
      return; 
    }
    if(this.password == '') {
      alert('si prega di inserire una password');
      return; 
    }
    this.auth.register(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

}
