import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {Job} from "../../models/job.model";
import {ApplicationPage} from "../application/application.page";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

  @Input() job: Job = new Job();
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onWillDismiss($event: any) {
    console.log($event);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log('confirm');
  }

  async apply(job: Job) {

    const modal = await this.modalCtrl.create({
      component: ApplicationPage,
      componentProps: {
        job
      }
    });
    await modal.present();
  }
}
