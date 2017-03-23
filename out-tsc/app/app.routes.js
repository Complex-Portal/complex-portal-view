import { HomeComponent } from './home/home.component';
import { ComplexResultsComponent } from './complex/complex-results/complex-results.component';
import { DownloadComponent } from './download/download.component';
import { ComplexDetailsComponent } from './complex/complex-details/complex-details.component';
import { BasketComponent } from './basket/basket.component';
export var rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'download', component: DownloadComponent },
    { path: 'search', component: ComplexResultsComponent },
    { path: 'complex/:id', component: ComplexDetailsComponent },
    { path: 'basket', component: BasketComponent }
];
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/app.routes.js.map