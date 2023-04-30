import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../models/job.model";
import {RecommendationsService} from "../../services/recommendations.service";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {

  @Input() job: Job;

  constructor() { }

}
