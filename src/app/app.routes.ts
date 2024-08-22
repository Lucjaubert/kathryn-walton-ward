import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import("./pages/homepage/homepage.component").then(m => m.HomepageComponent), title: 'Accueil' },
    {path: "mentions-legales", loadComponent: () => import("./pages/legal-documents/LegalNotices/legal-notices.component").then(m => m.LegalNoticesComponent), title: 'Mentions Légales' },
    {path: "404", loadComponent: () => import("./pages/not-found/not-found.component").then(m => m.NotFoundComponent), title: 'Page non trouvée' },
    {path: "**", redirectTo: "404" },
];

