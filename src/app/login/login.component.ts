import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthguardServiceService } from '../shared/authguard-service.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../models/users';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    private formSubmitAttempt: boolean;

    username: string;
    password: string;
    

    constructor(
        private fb: FormBuilder,
        private authService: AuthguardServiceService
    ) { }

    ngOnInit() {

    }

    isFieldInvalid(field: string) {

    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');

        let user: User = {
            userName: this.username,
            password: this.password,
            role: null
        };

        this.authService.login(user);

        this.formSubmitAttempt = true;
    }
}
