import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		return {
			width:150,
			localId:"side:menu",
			view:"sidebar",
			collapsed:true,
			data:[
				{ id:"qadashboard", value:"QA Dashboard", icon:"cube" },
				{ id:"widgets", value:"Widgets", icon:"code-not-equal-variant" },
				{ id:"demos", value:"Demos", icon:"view-dashboard" },
				{ id:"prices", value:"Prices", icon:"format-line-style" },
				{ id:"tutorials", value:"Tutorials", icon:"calendar" }
			]
		};
	}
	init(sidebar){
		this.use(plugins.Menu,this.$$("side:menu"));
		this.on(this.app,"menu:toggle",() => this.$$("side:menu").toggle());
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
	}
}
