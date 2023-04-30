import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../models/job.model";

@Component({
  selector: 'app-job-listing-card',
  templateUrl: './job-listing-card.component.html',
  styleUrls: ['./job-listing-card.component.scss'],
})
export class JobListingCardComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit() {}

}
