import { Component } from '@angular/core';
import {Job} from '../../models/job.model';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'jobs.page.html',
  styleUrls: ['tab2.page.scss']
})
export class JobsPage {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

}
