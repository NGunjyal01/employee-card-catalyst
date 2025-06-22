
export interface Employee {
  id: string;
  name: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  picture: string;
  phone: string;
  address: string;
  bio: string;
  projects: Project[];
  feedback: Feedback[];
  isBookmarked?: boolean;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'on-hold';
  description: string;
  startDate: string;
  endDate?: string;
}

export interface Feedback {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
}

export interface FilterState {
  search: string;
  departments: string[];
  ratings: number[];
}
