import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LegalNoticesComponent } from './pages/legal-documents/LegalNotices/legal-notices.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Accueil' },
    { path: 'mentions-legales', component: LegalNoticesComponent, title: 'Mentions Légales' },
];

