import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  details : any;
  gender: string;
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  getGender(gender){
    this.gender = gender;
  }
  onSubmit(firstName,lastName,email,password,no,role,date_of_birth){
    this.signUp(firstName,lastName,email,password,no,role,date_of_birth)
    .subscribe(
        data => {
          if(data['status'] === 0){
          }else{
            this.router.navigate(['products']);
          }
        });
  }
  signUp(firstName,lastName,email,password,no,role,date_of_birth) {
    const user = {
      email : email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      phone: +no,
      role: role,
      gender: this.gender ,
      date_of_birth: date_of_birth,
      device_type: "web",
      player_id: '',
    } 
  
    return this.http.post(`https://dev-api.alldaydr.com/api/users/sign_up.json`, { ...user });
  }
}
