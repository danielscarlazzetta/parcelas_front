import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthStatus } from '../../../auth/interfaces/auth-status.enum';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  private authService= inject(AuthService);
  public user = computed( () => this.authService.currentUser())

  ngOnInit(): void {
    this.prueba_de_rol()
  }

  prueba_de_rol(){
    if(this.user()?.name === 'daniel'){
      console.log('prueba para mostrar distintos landing page')
    }
  }

  onLogout(){
    this.authService.logout();
  }
}
