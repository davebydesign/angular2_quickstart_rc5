
import { Component, Input, Output, EventEmitter } from '@angular/core';




@Component({
   moduleId: module.id,
   selector: 'my-navbar',
   templateUrl : 'navbar.component.html',
   styleUrls   : ['navbar.component.css']
})
export class NavbarComponent {

	private HideExpandedNavBar: boolean = true;
	private HideSearchInput: boolean = true;

	private innerSearchInputText: string = '';

    private NavbarSearch: any = {};

    @Input() NavbarBrand : string;
    @Input() NavbarItems : Array<any>;

    @Output() NavbarSearchSubmit = new EventEmitter<any>();

	constructor() {

	}

	toggleMenu() {
		this.HideExpandedNavBar = !this.HideExpandedNavBar;
	}

	closeOnMouseOut(idx:number) {
        if (idx == this.NavbarItems.length-1) {
            this.HideExpandedNavBar = true;
        }
	}

	onSearchSubmit(formvalue:any) {
		//console.log(formvalue);
        this.NavbarSearchSubmit.emit(formvalue.SearchText);
        formvalue.SearchText = "";
	}

    handleMenuClick(event:any) {
        this.HideExpandedNavBar = true;
    }



}
