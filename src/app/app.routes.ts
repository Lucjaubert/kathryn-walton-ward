import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LegalNoticesComponent } from './pages/legal-documents/LegalNotices/legal-notices.component';
import { PrivacyPolicyComponent } from './pages/legal-documents/PrivacyPolicy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/legal-documents/TermsConditions/terms-conditions.component';

export const routes: Routes = [
    { path: 'accueil', component: HomepageComponent, title: 'Accueil' },
    { path: 'mentions-legales', component: LegalNoticesComponent, title: 'Mentions Légales' },
    { path: 'politique-de-confidentialite', component: PrivacyPolicyComponent, title: 'Politique de Confidentialité' },
    { path: 'conditions-generales-de-vente', component: TermsConditionsComponent, title: 'Conditions Générales de Vente' },
];

