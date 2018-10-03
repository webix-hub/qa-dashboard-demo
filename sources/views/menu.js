import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		const theme = this.app.config.theme;
		return {
			width:150,
			localId:"side:menu",
			view:"sidebar",
			css:theme + " webix_shadow_medium",
			collapsed:true,
			data:[
				{ id:"qadashboard", value:"QA Dashboard", icon:"mdi mdi-cube" },
				{ id:"widgets", value:"Widgets", icon:"mdi mdi-widgets" },
				{ id:"demos", value:"Demos", icon:"mdi mdi-cellphone-link" },
				{ id:"prices", value:"Prices", icon:"mdi mdi-currency-usd" },
				{ id:"tutorials", value:"Tutorials", icon:"mdi mdi-school" }
			]
		};
	}
	init(sidebar){
		this.use(plugins.Menu,this.$$("side:menu"));
		this.on(this.app,"menu:toggle",() => this.$$("side:menu").toggle());
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
	}
}
