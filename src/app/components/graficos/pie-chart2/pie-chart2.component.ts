import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ProdutosMaisVendidosService } from '../../../services/produtos-mais-vendidos.service';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrl: './pie-chart2.component.css'
})
export class PieChart2Component {

  constructor(private produtosMaisVendidos : ProdutosMaisVendidosService){
  }

  view: [number, number] = [500, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;  
  legendPosition: LegendPosition = LegendPosition.Below;


  single: any = [];

  produto1!: any;
  produto2!: any;
  produto3!: any;


  ngOnInit(): void {
    this.produtosMaisVendidos.getProdutosMaisVendidos().subscribe(
      produtos => {
        this.produto1 = produtos[0];
        this.produto2 = produtos[1];
        this.produto3 = produtos[2];

        console.log(this.produto1.valor_vendas);
        this.single = [
          {
            "name": this.produto1.produto,
            "value": this.produto1.valor_vendas
          },
          {
            "name": this.produto2.produto,
            "value": this.produto2.valor_vendas
          },
          {
            "name": this.produto3.produto,
            "value": this.produto3.valor_vendas
          }
        ];

        (error: any) => {
          console.log('Ocorreu um erro ao buscar os dados:', error);
        }
      }
      );
    }
}
