import { Injectable, computed, signal } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = <AuthStatus>AuthStatus.authenticated;
  public authStatus = this._authStatus;

  constructor() {
    console.log(this.authStatus)
  }

  public toggleAuthStatus(): void {
    if (this._authStatus === <AuthStatus>AuthStatus.authenticated) {
      this._authStatus = AuthStatus.notAuthenticated;
      this.authStatus = this._authStatus;
    } else {
      this._authStatus = AuthStatus.authenticated;
      this.authStatus = this._authStatus;
    }
  }
}
