import { Component } from '@angular/core';
import {Job} from '../../models/job.model';
import {JobService} from '../../services/job.service';
import {ModalController} from "@ionic/angular";
import {JobDetailPage} from "../job-detail/job-detail.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'jobs.page.html',
  styleUrls: ['tab2.page.scss']
})
export class JobsPage {
  jobs: Job[] = [];

  constructor(private jobService: JobService, private modalCtrl: ModalController) {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  async onJobClick(job: Job) {
    const modal = await this.modalCtrl.create({
      component: JobDetailPage,
      componentProps: {
        job
      }
    });
    await modal.present();
  }

  like(job: Job) {
    this.jobService.likeJob(job).subscribe(likedJob => {
      const index = this.jobs.findIndex(j => j.id === likedJob.id);
      this.jobs[index] = likedJob;
    });
  }

  share(job: Job) {

  }
}
