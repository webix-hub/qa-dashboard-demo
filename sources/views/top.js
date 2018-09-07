import {JetView} from "webix-jet";
import MenuView from "views/menu";
import NotificationView from "views/notifications";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar",
					height:56,
					elements:[
						{
							paddingY:4,
							rows:[
								{
									cols:[
										{
											view:"icon", icon:"menu",
											click:() => this.app.callEvent("menu:toggle")
										},
										{
											view:"label", template:"QA Dashboard", css:"main_label"
										},
										{},
										{
											view:"icon", icon:"bell",
											badge:2,
											tooltip:"Open latest notifications",
											click: function(){
												this.$scope.notifications.showLatest(this.$view);
											}
										},
										{
											view:"icon",
											icon:"theme-light-dark",
											tooltip:"Come to the dark side",
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
								}
							]
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
