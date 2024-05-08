import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MolduraGraficosComponent } from './components/graficos/moldura-graficos/moldura-graficos.component';
import { NumberCardsComponent } from './components/graficos/number-cards/number-cards.component';
import { LineChartsComponent } from './components/graficos/line-charts/line-charts.component';
import { PieChartComponent } from './components/graficos/pie-chart/pie-chart.component';
import { PieChart2Component } from './components/graficos/pie-chart2/pie-chart2.component';
import { VerticalchartComponent } from './components/graficos/verticalchart/verticalchart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FinanceiroComponent,
    DashboardComponent,
    MolduraGraficosComponent,
    NumberCardsComponent,
    LineChartsComponent,
    PieChartComponent,
    PieChart2Component,
    VerticalchartComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
