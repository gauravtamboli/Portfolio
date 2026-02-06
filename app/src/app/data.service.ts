import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    name = 'Gaurav Tamboli';
    email = 'gtamboli20@gmail.com';

    skills = [
        { name: 'Angular', icon: 'logo-angular', level: 'Expert' },
        { name: 'Ionic', icon: 'phone-portrait-outline', level: 'Expert' },
        { name: 'React', icon: 'logo-react', level: 'Advanced' },
        { name: 'Node.js', icon: 'logo-nodejs', level: 'Advanced' },
        { name: 'TypeScript', icon: 'text-outline', level: 'Expert' },
        { name: 'PHP', icon: 'code-slash-outline', level: 'Advanced' },
        { name: 'JavaScript', icon: 'logo-javascript', level: 'Expert' },
        { name: 'VB.NET', icon: 'desktop-outline', level: 'Advanced' },
        { name: 'HTML5', icon: 'logo-html5', level: 'Expert' },
        { name: 'Bootstrap', icon: 'grid-outline', level: 'Advanced' },
        { name: 'SCSS & CSS', icon: 'grid-outline', level: 'Advanced' },
        { name: 'MySQL', icon: 'grid-outline', level: 'Advanced' },
        { name: 'SQL Server', icon: 'grid-outline', level: 'Advanced' },

    ];

    projects = [
        {
            title: 'Kishan Vrikshmitra Yojna',
            category: 'Mobile App',
            description: 'A specialized platform for agricultural tracking and tree plantation management.',
            tags: ['Ionic', 'Angular', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Enterprise CRM Software',
            category: 'Web Solution',
            description: 'Advanced Customer Relationship Management system for managing sales pipelines and client data.',
            tags: ['PHP', 'MySQL', 'Angular'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Hostel Management System',
            category: 'Desktop/Web App',
            description: 'Comprehensive software for managing hostel facilities, student records, and billing.',
            tags: ['VB.NET', 'SQL Server', 'Web'],
            image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80'
        }
    ];

    constructor() { }
}
