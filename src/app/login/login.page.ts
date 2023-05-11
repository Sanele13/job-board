import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthData} from '../../models/user.model';
import {Router} from '@angular/router';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authData: AuthData = new AuthData();

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.authData).subscribe(_ => {
      this.router.navigate(['tabs', 'home']);
    }, error => {
      console.log(error);
      this.toastController.create({
        message: error.status === 403 ? 'Invalid credentials' : 'Something went wrong',
        buttons: ['OK']
      }).then(toast => toast.present());
    });
  }
}
