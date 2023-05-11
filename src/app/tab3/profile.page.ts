import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['tab3.page.scss']
})
export class ProfilePage implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  edit() {
    this.router.navigate(['/tabs/profile/edit']);
  }

  getRefresherValue(): string {
    return this.user.avatar && this.user.avatar.includes('.png?') ? '&val=' + new Date().getTime() : '?val=' + new Date().getTime();
  }
}
