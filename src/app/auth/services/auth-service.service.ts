import { Injectable, computed, signal } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  public authStatus = computed(() => this._authStatus());

  constructor() { }
}
