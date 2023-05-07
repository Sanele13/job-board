import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return new Observable<Job[]>(subscriber => {
      subscriber.next([{
        id: 1,
        title: 'System Administrator',
        company: {name: 'Google', logo: '../assets/logoipsum-225.svg'},
        location: 'Mountain View, CA',
        type: 'Full Time',
        postedAt: '2 Days ago',
        logo: 'https://en.wikipedia.org/wiki/File:Facebook_f_logo_%282021%29.svg',
        description: 'Google is looking for a System Administrator to join our team. You will be responsible for managing ' +
          'our internal systems, including our internal network, servers, and workstations. You will also be responsible ' +
          'for managing our cloud infrastructure, including our AWS and GCP accounts. You will be responsible for managing ' +
          'our internal systems, including our internal network, servers, and workstations. You will also be responsible for ' +
          'managing our cloud infrastructure, including our AWS and GCP accounts.',
        requirements: [
          '5+ years of experience as a System Administrator',
          'Experience with Slack',
          'Experience with Zoom',
          'Experience with Microsoft Office',
          'Experience with Microsoft Teams',
          'Experience with Microsoft Azure',
          'Experience with Microsoft Active Directory',
          'Experience with Microsoft Exchange'],
        responsibilities: [
          'Manage Linux and Windows servers',
          'Manage Docker and Kubernetes clusters',
          'Manage Ansible and Terraform scripts'],
        benefits: [
          'Free Drinks',
          'Free Gym Membership',
          'Free Parking',
          'Free Shuttle',
          'Free Bus Pass',
          'Free Uber Rides',
          'Free Lyft Rides',
          'Free Tesla'],
        perks: [],
        salary: 100000,
        remote: true,
        liked: false
      },
        {
          id: 2,
          title: 'Systems Design Lead',
          company: {name: 'Facebook', logo: '../assets/logoipsum-238.svg'},
          location: 'Mountain View, CA',
          type: 'Full Time',
          postedAt: '2 Days ago',
          logo: 'https://en.wikipedia.org/wiki/File:Facebook_f_logo_%282021%29.svg',
          description: 'Google is looking for a System Administrator to join our team. <p>You will be responsible for managing ' +
            'our internal systems, including our internal network, servers, and workstations.</p><p>You will also be responsible ' +
            'for managing our cloud infrastructure, including our AWS and GCP accounts.</p> You will be responsible for managing ' +
            'our internal systems, including our internal network, servers, and workstations. You will also be responsible for ' +
            'managing our cloud infrastructure, including our AWS and GCP accounts.',
          requirements: [
            '5+ years of experience as a System Administrator',
            'Experience with AWS and GCP',
            'Experience with Linux and Windows',
            'Experience with Docker and Kubernetes',
            'Experience with Ansible and Terraform',
            'Experience with Python and Bash'],
          responsibilities: [
            'Manage internal network',
            'Manage internal servers',
            'Manage internal workstations',
            'Manage AWS and GCP accounts'],
          benefits: [
            'Health Insurance',
            'Dental Insurance',
            'Vision Insurance',
            '401k',
            'Stock Options'],
          perks: [],
          salary: 150000,
          remote: true,
          liked: false
        }]);
    });
  }

  likeJob(job: Job): Observable<Job> {
    job.liked = !job.liked;
    return new Observable<any>(subscriber => {
      subscriber.next(job);
    });
  }
}
