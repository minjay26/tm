/**
 * Created by minjay on 2017/8/11.
 */
import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Http} from "@angular/http";
import "bootstrap/dist/css/bootstrap.css";
import "rxjs/add/operator/toPromise";

@Component({
  templateUrl: 'views/login.html'
})
export class LoginComponent {

  private headers = new Headers({'Content-Type': 'application/json'});

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, public http: Http) {
  }

  doLogin(event: Event): Promise<boolean> {
    let email = this.loginForm.controls.email.value
    let password = this.loginForm.controls.password.value
    return this.http
      .post("localhost:3000/login", JSON.stringify({username: email, password: password}))
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);
    ;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
