import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(username,password){
    this.login(username, password)
        .subscribe(
            data => {
              if(data['status'] === 0){
              }else{
                this.router.navigate(['products']);
              }
            });
  }

  login(username: string, password: string) {
    return this.http.post(`https://dev-api.alldaydr.com/api/users/sign_in.json`, { username: username, password: password });
  }
}
