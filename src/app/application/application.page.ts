import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../models/job.model';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {ApplicationService} from '../../services/application.service';
import {Application} from '../../models/application.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  @Input() job: Job = new Job();
  name: string;
  email: string;
  contactNumber: string;
  cvName: string;
  application: Application;
  cv: File;

  constructor(private modalCtrl: ModalController, private authService: AuthService,
              private applicationService: ApplicationService) {
    this.authService.getUser().subscribe(user => {
      this.name = `${user.name} ${user.lastName}`;
      this.email = user.email;
      this.contactNumber = user.contactNumber;
    });
  }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  send(job: Job) {
    this.application = new Application();
    this.application.name = this.name;
    this.application.email = this.email;
    this.application.contactNumber = this.contactNumber;
    this.application.cv = this.cv;
    this.application.jobId = job.id;

    this.applicationService.sendApplication(this.application).subscribe(() => {});
  }

  onFileSelected($event: Event) {
    this.cvName = ($event.target as HTMLInputElement).files[0].name;
    this.cv = ($event.target as HTMLInputElement).files[0];
  }
}
