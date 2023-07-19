import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  type: any;
  title: any;
  desc: any;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);
    
    this.sub = this.route.data.subscribe( param => {
      if(param.type) {
        this.type = param.type;
      }
      if(param.title) {
        this.title = param.title;
      }
      if(param.desc) {
        this.desc = param.desc
      }
    });

    switch(this.type) {
      case '404':
        if (!this.title) {
          this.title = 'Página no encontrada'
        }
        if (!this.desc) {
          this.desc = 'La página que estas buscando no existe'
        }
        break;
      case '500':
        if (!this.title) {
          this.title = 'Internal server error'
        }
        if (!this.desc) {
          this.desc = 'Oopps!! Ha ocurrido un error, prueba mas tarde'
        }
        break;
      default:
        // if (!this.type) {
          this.type = 'Ooops..';
        // }
        if (!this.title) {
          this.title = 'Algo ha ido mal...';
        }
        if (!this.desc) {
          this.desc = 'Algo ha ido mal...<br>' + 'Estamos trabajando en ello...';
        }
    }
  }

	ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
