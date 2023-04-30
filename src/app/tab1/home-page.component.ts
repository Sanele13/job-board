import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {Job} from "../../models/job.model";
import {RecommendationsService} from "../../services/recommendations.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage implements OnInit {
  user: User;
  recommendedJobs: Job[] = [];

  constructor(private authService: AuthService, private recommendationsService: RecommendationsService){}

  ngOnInit() {
    this.authService.getUser().subscribe((user: User) => {
      this.user = user;
    });

    this.recommendationsService.getRecommendedJobs().subscribe((jobs: Job[]) => {
      this.recommendedJobs = jobs;
    });
  }

}
