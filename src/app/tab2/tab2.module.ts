import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {HeaderModule} from "../header/header.module";
import {JobListingCardComponent} from "../job-listing-card/job-listing-card.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule,
        HeaderModule
    ],
  declarations: [JobsPage, JobListingCardComponent]
})
export class Tab2PageModule {}
