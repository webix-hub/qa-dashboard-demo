import {JetView} from "webix-jet";
import MenuView from "views/menu";
import NotificationView from "views/notifications";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", height:56,
					elements:[
						{
							view:"button", type:"icon", icon:"menu",
							width:37, css:"toolbar_button",
							click:() => this.app.callEvent("menu:toggle")
						},
						{
							view:"label", template:"QA Dashboard", css:"main_label"
						},
						{},
						{
							view:"button", type:"icon", icon:"information",
							width:37, css:"toolbar_button",
							click:() => {

							}
						},
						{
							view:"button", type:"icon", icon:"bell",
							badge:2, width:37, css:"toolbar_button",
							tooltip:"Open latest notifications",
							click: function(){
								this.$scope.notifications.showLatest(this.$view);
							}
						},
						{
							view:"button", type:"icon", icon:"theme-light-dark",
							width:37, css:"toolbar_button", tooltip:"Come to the dark side",
							click:function(){
								let theme = "light";
								if (this.config.tooltip.indexOf("dark") !== -1) {
									this.config.tooltip = "Back to the light side of the Force";
									theme = "dark";
								}
								else if (this.config.tooltip.indexOf("light") !== -1) {
									this.config.tooltip = "Come to the dark side";
									theme = "light";
								}
								this.refresh();
								this.$scope.app.callEvent("change:theme",[theme]);
							}
						}
					]
				},
				{
					cols:[
						MenuView,
						{ $subview:true }
					]
				}
			]
		};
	}
	init(view){
		this.notifications = this.ui(NotificationView);
		this.on(this.app,"change:theme",theme => {
			let toolbar = view.queryView({ view:"toolbar" });
			let menu = view.queryView({ view:"sidebar" });
			if (theme === "dark") {
				toolbar.define("css","webix_dark");
				menu.define("css","webix_dark");
			}
			else if (theme === "light"){
				webix.html.removeCss(toolbar.getNode(),"webix_dark");
				webix.html.removeCss(menu.getNode(),"webix_dark");
			}
		})
	}
}
