import { Component } from '@angular/core';
import { Nav } from './Nav'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      admin: false,
      exact: true,
      link: '/home',
      name: 'Home'
    },
    {
      admin: false,
      exact: true,
      link: '/cadastro',
      name: 'Cadastro'
    },

    {
      admin: false,
      exact: true,
      link: '/sobre',
      name: 'Sobre'
    },
    {
      admin: false,
      exact: true,
      link: '/produtos',
      name: 'Produtos'
    }
  ]

}


