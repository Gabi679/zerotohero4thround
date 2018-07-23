import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from "../services/login.service";
/**
 * define the component
 */
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * loged user's name
   */
  userName;
      /**
     * @ignore
     */
  constructor(private router: Router,private loginService: LoginService) { }


  ngOnInit() {

  }
  /**
   * call when push the login button.
   * change the active user in the userService
   */
  login(){
    if(this.userName){
      this.loginService.changeUser(this.userName)
      //this.router.navigate(['/questions']);
    }
  }

}