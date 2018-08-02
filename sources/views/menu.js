import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		return {
			width:150,
			localId:"side:menu",
			view:"sidebar",
			collapsed:true,
			data:[
				{ id:"services", value:"Services", icon:"shopping-cart" },
				{ id:"qadashboard", value:"QA Dashboard", icon:"cube" },
				{ id:"projects", value:"Best projects", icon:"code" },
				{ id:"layout", value:"Layout", icon:"th-large" },
				{ id:"statistics", value:"Statistics", icon:"area-chart" },
				{ id:"typography", value:"Typography", icon:"align-justify" },
				{ id:"events", value:"Events", icon:"calendar" },
				{ id:"filemanager", value:"File Manager", icon:"folder" }
			]
		};
	}
	init(){
		this.use(plugins.Menu,{
			id:"side:menu"
		});
		this.on(this.app,"menu:toggle",() => this.$$("side:menu").toggle());
	}
}
