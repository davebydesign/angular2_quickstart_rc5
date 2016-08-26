import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
    selector	: 'my-app',
    styles		: [],
    directives	: [NavbarComponent],
    template	: `
    	<my-navbar 
    		[NavbarBrand]="NavbarBrand" 
    		[NavbarItems]="NavbarItems"
    		(NavbarSearchSubmit)="OnNavbarSearchSubmit($event)"
    	></my-navbar>

    	<!-- Routed views go here -->
		<router-outlet></router-outlet>
    `
})


export class AppComponent { 

	public NavbarBrand : string = 'DaveByDesign';

	public NavbarItems : Array<any> = [
		{label : 'Home', 	href : ''		},
		{label : 'Coding', 	href : 'coding'	},
		{label : 'Music', 	href : 'music'	},
		{label : 'Art', 	href : 'art'	},
		{label : 'Writing',	href : 'writing'},
		{label : 'Blog', 	href : 'blog'	},
		{label : 'Pez', 	href : 'pez'	}
	];

	OnNavbarSearchSubmit(SearchText:string) {
		console.log(SearchText);
	}

}
