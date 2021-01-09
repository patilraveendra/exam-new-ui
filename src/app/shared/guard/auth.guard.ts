import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../authguard-service.service';
import { map, take } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthguardServiceService, private router: Router) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isLoggedIn.pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
    }
  }



// implements CanActivate {
//     constructor(private router: Router) {}

//     canActivate() {
//         if (localStorage.getItem('isLoggedin')) {
//             return true;
//         }

//         this.router.navigate(['/login']);
//         return false;
//     }
// }
