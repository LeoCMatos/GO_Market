import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

  constructor(private categoriaService : CategoriaService) {
  }

  pie: any = [];

  janeiroSorvetes!: any;
  janeiroBebidas!: any;
  janeiroCarnes!: any;

  fevereiroSorvetes!: any;
  fevereiroBebidas!: any;
  fevereiroCarnes!: any;

  marcoSorvetes!: any;
  marcoBebidas!: any;
  marcoCarnes!: any;

  ngOnInit(): void {
    this.categoriaService.getCategoriaMaisVendida().subscribe(
      categoria => {
                    const janeiro = categoria.find((item: { mes: string; }) => item.mes === "Janeiro");
                    this.janeiroSorvetes = janeiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Sorvetes");
                    this.janeiroBebidas = janeiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Bebidas");
                    this.janeiroCarnes = janeiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Carnes");

                    const fevereiro = categoria.find((item: { mes: string; }) => item.mes === "Fevereiro");
                    this.fevereiroSorvetes = fevereiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Sorvetes");
                    this.fevereiroBebidas = fevereiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Bebidas");
                    this.fevereiroCarnes = fevereiro.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Carnes");

                    const marco = categoria.find((item: { mes: string; }) => item.mes === "Março");
                    this.marcoSorvetes = marco.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Sorvetes");
                    this.marcoBebidas = marco.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Bebidas");
                    this.marcoCarnes = marco.categorias.find((categoria: { categoria: string; }) => categoria.categoria === "Carnes");
                    
                          this.pie = [
                              {
                                "name": "Janeiro",
                                "series": [
                                  {
                                    "name": "Sorvetes",
                                    "value": this.janeiroSorvetes.valor
                                  },
                                  {
                                    "name": "Bebidas",
                                    "value": this.janeiroBebidas.valor
                                  },
                                  {
                                    "name": "Carnes",
                                    "value": this.janeiroCarnes.valor
                                  }
                                ],
                              },

                              {
                                "name": "Fevereiro",
                                "series": [
                                  {
                                    "name": "Sorvetes",
                                    "value": this.fevereiroSorvetes.valor
                                  },
                                  {
                                    "name": "Bebidas",
                                    "value": this.fevereiroBebidas.valor
                                  },
                                  {
                                    "name": "Carnes",
                                    "value": this.fevereiroCarnes.valor
                                  }
                                ]
                              },

                              {
                                "name": "Março",
                                "series": [
                                  {
                                    "name": "Sorvetes",
                                    "value": this.marcoSorvetes.valor
                                  },
                                  {
                                    "name": "Bebidas",
                                    "value": this.marcoBebidas.valor
                                  },
                                  {
                                    "name": "Carnes",
                                    "value": this.marcoCarnes.valor
                                  }
                                ]
                              }
                            ]
                            },
                              (error: any) => {
                          console.log('Ocorreu um erro ao buscar o faturamento:', error);
                        }
                      
                    );
  }

  view: [number, number] = [500, 300];
  legendPosition: LegendPosition = LegendPosition.Below;
  Below = LegendPosition.Below
  showLegend = true;
  showLabels = true;
  explodeSlices = false;
  isDoughnut = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Meses';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Valor em reais';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'linear';

}
