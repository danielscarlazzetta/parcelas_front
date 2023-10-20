import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../../interfaces';

@Component({
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {

  private authService = inject( AuthService );
  private router = inject( Router )

  public finishAuthCheck = computed<boolean>(() => {
    if(this.authService.authStatus () === AuthStatus.checking){
      return false;
    } 
    return true;
  });

  public authStatusChangedEffect = effect(() => {
    
    console.log('auth status: ', this.authService.authStatus());
    
    switch( this.authService.authStatus() ){
      
      case AuthStatus.checking:
        break;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        break;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        break;
    }
    
  });
}
