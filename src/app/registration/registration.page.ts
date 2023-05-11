import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthData} from '../../models/user.model';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user: AuthData = new AuthData();

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(_ => {
      this.router.navigate(['login']);
    }, error => {
      console.log(error);
      this.toastController.create({
        message: error.status === 400 ? error.error : 'Something went wrong',
        buttons: ['OK']
      }).then(toast => toast.present());
    });
  }
}
