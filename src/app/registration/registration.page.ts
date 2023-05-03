import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(username: string, password: string, confirmPassword: string) {
    this.authService.register(username, password, confirmPassword).subscribe(_ => {
      this.router.navigate(['login']);
    });
  }
}
