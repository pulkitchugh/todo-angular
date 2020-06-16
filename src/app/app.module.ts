import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-list/todo-item/todo-item.component";
import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component';
import { StatsComponent } from './components/stats/stats.component';

import { HighchartsChartModule } from 'highcharts-angular';


const appRoutes: Routes = [{
  path:"",
  component:TodoListComponent,
},{
  path:"completed",
  component: TodoCompletedComponent
},
  {
    path:"stats",
    component:StatsComponent
  }]

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoItemComponent, TodoCompletedComponent, StatsComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
