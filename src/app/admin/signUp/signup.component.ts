import { Component } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import {Router} from '@angular/router';

@Component ({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
    email: string;
    password1:string;
    password2: string;
    passwordFail: boolean = false;

    constructor(private userSvc: UserService, private router: Router){

    }

    signUp() {
        if(this.password1 !== this.password2) {
            this.passwordFail = true;
        } else {
            this.passwordFail = false;
            this.userSvc.register(this.email, this.password1);
            this.userSvc.verifyUser()
        }
    }

    cancel() {
        this.router.navigate(['/admin/login']);
    }
}
