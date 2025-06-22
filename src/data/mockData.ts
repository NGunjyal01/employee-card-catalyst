
import { Employee } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    age: 28,
    department: 'Engineering',
    rating: 5,
    picture: 'https://images.unsplash.com/photo-1494790108755-2616b9f15543?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, San Francisco, CA 94105',
    bio: 'Senior Software Engineer with 5+ years of experience in full-stack development. Passionate about creating scalable solutions and mentoring junior developers.',
    projects: [
      { id: '1', name: 'Dashboard Redesign', status: 'active', description: 'Complete UI overhaul', startDate: '2024-01-15' },
      { id: '2', name: 'API Integration', status: 'completed', description: 'Third-party API integration', startDate: '2023-11-01', endDate: '2024-01-10' }
    ],
    feedback: [
      { id: '1', author: 'John Manager', date: '2024-01-15', rating: 5, comment: 'Exceptional performance on the Q4 project delivery.' },
      { id: '2', author: 'Jane Lead', date: '2023-12-20', rating: 4, comment: 'Great collaboration skills and technical expertise.' }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    age: 32,
    department: 'Marketing',
    rating: 4,
    picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 234-5678',
    address: '456 Marketing Ave, New York, NY 10001',
    bio: 'Creative Marketing Manager with expertise in digital campaigns and brand strategy. Led multiple successful product launches.',
    projects: [
      { id: '3', name: 'Q1 Campaign', status: 'active', description: 'Product launch campaign', startDate: '2024-01-01' }
    ],
    feedback: [
      { id: '3', author: 'Marketing Director', date: '2024-01-10', rating: 4, comment: 'Innovative approach to campaign strategy.' }
    ]
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    age: 26,
    department: 'Design',
    rating: 5,
    picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 345-6789',
    address: '789 Design Blvd, Austin, TX 78701',
    bio: 'UX/UI Designer focused on user-centered design and accessibility. Winner of multiple design awards.',
    projects: [
      { id: '4', name: 'Mobile App Redesign', status: 'active', description: 'Complete mobile experience overhaul', startDate: '2024-02-01' }
    ],
    feedback: [
      { id: '4', author: 'Design Lead', date: '2024-01-20', rating: 5, comment: 'Outstanding design thinking and execution.' }
    ]
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    age: 35,
    department: 'Sales',
    rating: 3,
    picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 456-7890',
    address: '321 Sales Street, Chicago, IL 60601',
    bio: 'Experienced Sales Representative with a track record of exceeding targets. Specializes in enterprise client relationships.',
    projects: [
      { id: '5', name: 'Enterprise Outreach', status: 'on-hold', description: 'Large client acquisition', startDate: '2023-12-01' }
    ],
    feedback: [
      { id: '5', author: 'Sales Manager', date: '2024-01-05', rating: 3, comment: 'Good performance, room for improvement in follow-ups.' }
    ]
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    age: 29,
    department: 'HR',
    rating: 4,
    picture: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 567-8901',
    address: '654 HR Plaza, Seattle, WA 98101',
    bio: 'HR Specialist focused on employee engagement and talent development. Certified in organizational psychology.',
    projects: [
      { id: '6', name: 'Employee Wellness Program', status: 'active', description: 'Company-wide wellness initiative', startDate: '2024-01-10' }
    ],
    feedback: [
      { id: '6', author: 'HR Director', date: '2024-01-12', rating: 4, comment: 'Great initiative on the wellness program.' }
    ]
  },
  {
    id: '6',
    name: 'James Anderson',
    email: 'james.anderson@company.com',
    age: 31,
    department: 'Engineering',
    rating: 4,
    picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    phone: '+1 (555) 678-9012',
    address: '987 Tech Drive, Boston, MA 02101',
    bio: 'Backend Engineer specializing in cloud architecture and DevOps. AWS certified solutions architect.',
    projects: [
      { id: '7', name: 'Cloud Migration', status: 'active', description: 'AWS infrastructure migration', startDate: '2024-01-20' }
    ],
    feedback: [
      { id: '7', author: 'Tech Lead', date: '2024-01-18', rating: 4, comment: 'Solid technical skills and reliable delivery.' }
    ]
  }
];

export const departments = ['Engineering', 'Marketing', 'Design', 'Sales', 'HR'];
