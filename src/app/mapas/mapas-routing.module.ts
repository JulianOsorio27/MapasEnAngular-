import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreamComponent } from './pages/full-scream/full-scream.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'fullscream', component: FullScreamComponent },
      { path:'zoom-range', component: ZoomRangeComponent },
      { path:'marcadores', component: MarcadoresComponent },
      { path:'propiedades', component: PropiedadesComponent },
      { path:'**', redirectTo:'fullscream' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
