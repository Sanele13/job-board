import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../services/auth.service';
import {ToastController} from '@ionic/angular';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  user: User = new User();
  file: File;

  constructor(private router: Router, private authService: AuthService,
              private toastController: ToastController,
              private userService: UserService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  goBack(): void {
    this.router.navigate(['/tabs/profile']);
  }

  onFileSelected($event: Event): void {
    this.file = ($event.target as HTMLInputElement).files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.user.avatar = reader.result as string;
    };
  }

  save(): void {
    if (this.file) {
      this.userService.uploadAvatar(this.file).subscribe(user => {
        this.user.avatar = user.avatar;

        this.authService.save(this.user).subscribe(u => {
          this.user = u;
          this.presentToast().then(() => {
            this.router.navigate(['/tabs/profile']);
          });
        });
      });
    } else {
      this.authService.save(this.user).subscribe(() => {
        this.presentToast().then(() => {
          this.router.navigate(['/tabs/profile']);
        });
      });
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Profile saved successfully',
      duration: 2000,
      color: 'success',
      position: 'bottom',
    });

    await toast.present();
  }

  getRefresherValue(): string {
    return this.user.avatar && this.user.avatar.includes('.png?') ? '&val=' + new Date().getTime() : '?val=' + new Date().getTime();
  }
}
