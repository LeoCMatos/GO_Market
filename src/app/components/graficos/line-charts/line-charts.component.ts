import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { FaturamentoService } from '../../../services/faturamento-mensal.service';
import { LucroService } from '../../../services/lucro.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrl: './line-charts.component.css'
})
export class LineChartsComponent {

  colorScheme: any;
  faturamento!: any;

  constructor(private faturamentoService : FaturamentoService, private lucroService: LucroService) {
    const colors = ['#aae3f5', '#6A5ACD'];
    this.colorScheme = {
      domain: colors
    };
  }
  view: [number, number] = [780, 300];

  legendPosition: LegendPosition = LegendPosition.Below;

  Below = LegendPosition.Below

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Mês';
  yAxisLabel: string = 'Valor em reais';
  timeline: boolean = true;
  name: string = 'Faturamento mensal do mercado';

  faturamentoJaneiro!: any;
faturamentoFevereiro!: any;
faturamentoMarco!: any;
faturamentoAbril!: any;
faturamentoMaio!: any;
faturamentoJunho!: any;
faturamentoJulho!: any;
faturamentoAgosto!: any;
faturamentoSetembro!: any;
faturamentoOutubro!: any;
faturamentoNovembro!: any;
faturamentoDezembro!: any;

lucroJaneiro!: any;
lucroFevereiro!: any;
lucroMarco!: any;
lucroAbril!: any;
lucroMaio!: any;
lucroJunho!: any;
lucroJulho!: any;
lucroAgosto!: any;
lucroSetembro!: any;
lucroOutubro!: any;
lucroNovembro!: any;
lucroDezembro!: any;

  single: any = [];

  ngOnInit(): void {
    forkJoin([
      this.lucroService.getLucroMensal(),
      this.faturamentoService.getFaturamentoMensalBruto()
    ]).subscribe(
      ([lucro, faturamento]) => {
        
        this.lucroJaneiro = lucro[0];
        this.lucroFevereiro = lucro[1];
        this.lucroMarco = lucro[2];
        this.lucroAbril = lucro[3];
        this.lucroMaio = lucro[4];
        this.lucroJunho = lucro[5];
        this.lucroJulho = lucro[6];
        this.lucroAgosto = lucro[7];
        this.lucroSetembro = lucro[8];
        this.lucroOutubro = lucro[9];
        this.lucroNovembro = lucro[10];
        this.lucroDezembro = lucro[11];
        


        this.faturamentoJaneiro = faturamento[0];
        this.faturamentoFevereiro = faturamento[1];
        this.faturamentoMarco = faturamento[2];
        this.faturamentoAbril = faturamento[3];
        this.faturamentoMaio = faturamento[4];
        this.faturamentoJunho = faturamento[5];
        this.faturamentoJulho = faturamento[6];
        this.faturamentoAgosto = faturamento[7];
        this.faturamentoSetembro = faturamento[8];
        this.faturamentoOutubro = faturamento[9];
        this.faturamentoNovembro = faturamento[10];
        this.faturamentoDezembro = faturamento[11];

        this.single = [
          {
            "name": this.name,
            "series": [
              {
                name: 'Janeiro',
                value: this.faturamentoJaneiro.valor_faturamento
              },
              {
                name: 'Fevereiro',
                value: this.faturamentoFevereiro.valor_faturamento
              },
              {
                name: 'Março',
                value: this.faturamentoMarco.valor_faturamento
              },
              {
                name: 'Abril',
                value: this.faturamentoAbril.valor_faturamento
              },
              {
                name: 'Maio',
                value: this.faturamentoMaio.valor_faturamento
              },
              {
                name: 'Junho',
                value: this.faturamentoJunho.valor_faturamento
              },
              {
                name: 'Julho',
                value: this.faturamentoJulho.valor_faturamento
              },
              {
                name: 'Agosto',
                value: this.faturamentoAgosto.valor_faturamento
              },
              {
                name: 'Setembro',
                value: this.faturamentoSetembro.valor_faturamento
              },
              {
                name: 'Outubro',
                value: this.faturamentoOutubro.valor_faturamento
              },
              {
                name: 'Novembro',
                value: this.faturamentoNovembro.valor_faturamento
              },
              {
                name: 'Dezembro',
                value: this.faturamentoDezembro.valor_faturamento
              }
            ],
          },
            {
            "name": "Lucro",
            "series": [
              {
                name: 'Janeiro',
                value: this.lucroJaneiro.lucro_liquido
              },
              {
                name: 'Fevereiro',
                value: this.lucroFevereiro.lucro_liquido
              },
              {
                name: 'Março',
                value: this.lucroMarco.lucro_liquido
              },
              {
                name: 'Abril',
                value: this.lucroAbril.lucro_liquido
              },
              {
                name: 'Maio',
                value: this.lucroMaio.lucro_liquido
              },
              {
                name: 'Junho',
                value: this.lucroJunho.lucro_liquido
              },
              {
                name: 'Julho',
                value: this.lucroJunho.lucro_liquido
              },
              {
                name: 'Agosto',
                value: this.lucroAgosto.lucro_liquido
              },
              {
                name: 'Setembro',
                value: this.lucroSetembro.lucro_liquido
              },
              {
                name: 'Outubro',
                value: this.lucroOutubro.lucro_liquido
              },
              {
                name: 'Novembro',
                value: this.lucroNovembro.lucro_liquido
              },
              {
                name: 'Dezembro',
                value: this.lucroDezembro.lucro_liquido
              }
            ]
          }
          ]
      },
      error => {
        console.log('Ocorreu um erro ao buscar os dados:', error);
      }
    );
  }
}
