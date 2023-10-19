import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { enviroment } from 'src/enviroment/enviroment';
import { AuthStatus, LoginResponse, User, checkTokenResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = enviroment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! al muindo exterior
  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  constructor() { 
    this.checkAuthStatus().subscribe();
  }

  private setAuthenticatrion(user: User, token: string): boolean {

    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = {
      email: email,
      password: password
    }

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthenticatrion(user, token)),
        catchError(err => throwError(() => err.error.message)
        )
      );
  }

  //! Vamos a chequear el token
  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;
    const token = localStorage.getItem('token')

    if (!token) return of(false);


    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)


    return this.http.get<checkTokenResponse>(url, { headers })
      .pipe(
        map(({ user, token }) => this.setAuthenticatrion(user, token)),

        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false);
        })
      );
  }


}
