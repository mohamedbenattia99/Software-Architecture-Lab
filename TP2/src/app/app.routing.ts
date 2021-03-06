import { RouterModule, Routes } from "@angular/router";
import { AccountpageComponent } from "./pages/profil/accountpage.component";
import { AppointmentspageComponent } from "./pages/appointments/appointmentspage.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";


const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'me', children: [
        { path: 'appointment', component: AppointmentspageComponent, pathMatch:'full' },
        { path: '', component: AccountpageComponent, pathMatch: 'full' },
    ]},
]
export const Routing = RouterModule.forRoot(routes)