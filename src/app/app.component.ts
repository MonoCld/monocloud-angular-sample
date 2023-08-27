import { Component } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monocloud-angular-sample';
  isAuthenticated = false;
  userData$: any;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated, userData } = loginResponse;
      this.isAuthenticated = isAuthenticated;
      this.userData$ = userData;
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe();
  }
}
