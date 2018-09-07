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
				{ id:"projects", value:"Best projects", icon:"code-not-equal-variant" },
				{ id:"layout", value:"Layout", icon:"view-dashboard" },
				{ id:"statistics", value:"Statistics", icon:"chart-areaspline" },
				{ id:"typography", value:"Typography", icon:"format-line-style" },
				{ id:"events", value:"Events", icon:"calendar" },
				{ id:"filemanager", value:"File Manager", icon:"folder-star" }
			]
		};
	}
	init(sidebar){
		this.use(plugins.Menu,this.$$("side:menu"));
		this.on(this.app,"menu:toggle",() => this.$$("side:menu").toggle());
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
	}
}
