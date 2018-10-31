import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { ScientificCalculatorComponent } from './scientific-calculator/scientific-calculator.component';

const routes: Routes = [
  {
    path: "Basic",
    component: BasicCalculatorComponent
  },
  {
    path: "Scientific",
    component: ScientificCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
