class Company {
  name: string;
  logo?: string;
}

export class Job {
  id: number;
  title: string;
  logo?: string;
  location: string;
  type: string;
  postedAt: string;
  company: Company;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  perks: string[];
  salary: number;
  remote: boolean;
  liked?: boolean;
}
