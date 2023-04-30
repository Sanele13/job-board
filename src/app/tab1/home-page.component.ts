import {Component, OnInit} from '@angular/core';
import {Job} from '../../models/job.model';
import {RecommendationsService} from '../../services/recommendations.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage implements OnInit {
  recommendedJobs: Job[] = [];

  constructor(private recommendationsService: RecommendationsService){}

  ngOnInit() {
    this.recommendationsService.getRecommendedJobs().subscribe((jobs: Job[]) => {
      this.recommendedJobs = jobs;
    });
  }

}
