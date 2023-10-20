import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ParcelaServiceService } from '../../services/parcela-service.service';
import { ParcelaListarIntarface } from '../../interface/listar.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  private parcelaService= inject(ParcelaServiceService);
  public parcela = computed( () => this.parcelaService.listarParcelas());
  allParcelaData: ParcelaListarIntarface[] = [];

  ngOnInit(): void {
    this.parcelaService.listarParcelas().subscribe(data => {
      this.allParcelaData = data;
    });
  }

}
