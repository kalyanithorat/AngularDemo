import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
@Injectable({
    providedIn: 'root'
})


export class AuthGuardService implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
        console.log(localStorage.getItem('auth_token'));
        
        if (localStorage.getItem('auth_token') === null) {
            this.router.navigate(['/'])
            return false;
        }
        return true;
    }
}