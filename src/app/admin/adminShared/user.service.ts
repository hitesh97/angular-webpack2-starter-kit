import { Injectable } from '@angular/core';

import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    LoggedInUser : string;
    authUser: any;

    constructor(private router: Router) {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyC_IxxPjK5_9yj0vKV0WrchS4faGFxwGqA",
            authDomain: "angularblog-f0195.firebaseapp.com",
            databaseURL: "https://angularblog-f0195.firebaseio.com",
            projectId: "angularblog-f0195",
            storageBucket: "angularblog-f0195.appspot.com",
            messagingSenderId: "975111454186"
        };
        firebase.initializeApp(config);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;

        if(this.authUser) {
            alert(`Welcome ${this.authUser.email}`);
            this.LoggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    verifyLogin(url: string) : boolean {
        if(this.userLoggedIn) { return true;}

        this.router.navigate(['/admin/login']);
        return false;
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
            alert(`${error.message} unable to login. Try again!`);
        })
    }

    logout() {
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function(){
            alert('Logged out success!!');
        },function(error) {
            alert(`${error.message} unable to logout. Try again!`);
        });
    }

    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
            alert(`${error.message} unable to register !!`);
        });
    }
}