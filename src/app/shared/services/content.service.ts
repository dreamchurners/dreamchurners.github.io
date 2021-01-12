import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Home content <p>Weaving visual tales for today and beyond!</p> <p>For fast prototyping and small customers projects.</p>', image: 'assets/background11.jpg'},
    'about': {title: 'About', subtitle: 'About Us!', content: 'About us content <p> Our Team</p> <p> Prabhu</p> <p> Jayaram</p> <p> Jayan</p>', image: 'assets/bg00.jpg'},
    'services': {title: 'Service', subtitle: 'Services!', content: 'Services content<p> Media </p> <p>TriCloudWorks</p> <p>Automation</p>', image: 'assets/dc-logo-jpg.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us!', content: 'Contact content<p>Phone: 1908 248-4779</p> <p> Email: contactus@dreamchurners.com </p>', image: 'assets/bg00.jpg'}
  };
}

