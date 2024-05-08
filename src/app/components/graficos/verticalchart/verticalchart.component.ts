import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { LojasQueMaisVendemService } from '../../../services/lojas-que-mais-vendem.service';

@Component({
  selector: 'app-verticalchart',
  templateUrl: './verticalchart.component.html',
  styleUrl: './verticalchart.component.css'
})
export class VerticalchartComponent {

  constructor(private lojasQuemMaisVendemService: LojasQueMaisVendemService){}
  view: [number, number] = [780, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Valor em reais por loja';
  legendTitle: string = '';
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  multi!: any[];
  lojaA!: any;
  lojaB!: any;
  lojaC!: any;
  lojaD!: any;
  lojaE!: any;

  ngOnInit(): void {
    this.lojasQuemMaisVendemService.getLojasMaisVendem().subscribe(
      lojas => {
        this.lojaA = lojas[0];
        this.lojaB = lojas[1];
        this.lojaC = lojas[2];
        this.lojaD = lojas[3];
        this.lojaE = lojas[4];

        console.log(this.lojaA);
        this.multi = [
          {
            "name": "Loja",
            "series": [
              {
                "name": this.lojaA.nome_loja,
                "value": this.lojaA.valor_vendas
              },
              {
                "name": this.lojaB.nome_loja,
                "value": this.lojaB.valor_vendas
              },
              {
                "name": this.lojaC.nome_loja,
                "value": this.lojaC.valor_vendas
              },
              {
                "name": this.lojaD.nome_loja,
                "value": this.lojaD.valor_vendas
              },
              {
                "name": this.lojaE.nome_loja,
                "value": this.lojaE.valor_vendas
              }
            ]
          },
        
        ];

        (error: any) => {
          console.log('Ocorreu um erro ao buscar os dados:', error);
        }
      }
      );
    }
}
