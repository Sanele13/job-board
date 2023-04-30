import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {Job} from "../../models/job.model";

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

  apply() {
    console.log('apply');
  }
}
