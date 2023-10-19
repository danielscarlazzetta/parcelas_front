import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PARCELAS PARRAL';

  private AuthService = inject( AuthService );
  private router = inject( Router )

  public finishAuthCheck = computed<boolean>(() => {
    if(this.AuthService.authStatus () === AuthStatus.checking){
      return false;
    } 
    return true;
  });

  public authStatusChangedEffect = effect(() => {
    
    switch( this.AuthService.authStatus() ){
      
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;
    }
    
  });


}
