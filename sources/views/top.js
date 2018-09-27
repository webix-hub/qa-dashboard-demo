import {JetView} from "webix-jet";
import MenuView from "views/menu";
import NotificationsView from "views/notifications";

export default class TopView extends JetView {
	config(){
		const theme = this.app.config.theme;
		return {
			rows:[
				{
					view:"toolbar",
					css:theme,
					height:56,
					elements:[
						{
							paddingY:7,
							rows:[
								{
									cols:[
										{
											view:"icon", icon:"mdi mdi-menu",
											click:() => this.app.callEvent("menu:toggle")
										},
										{
											view:"label", template:"QA Dashboard"
										},
										{},
										{
											view:"icon", icon:"mdi mdi-bell",
											badge:2, localId:"bell",
											tooltip:"Open latest notifications",
											click:function(){
												this.$scope.notifications.showWin(this.$view);
											}
										},
										{
											view:"icon",
											localId:"themes",
											icon:"mdi mdi-theme-light-dark",
											color:theme,
											click:function(){
												let color = this.config.color;
												color = !color ? "webix_dark" : "";
												webix.storage.local.put("theme_qadashboard",color);
												this.$scope.app.config.theme = color;
												this.$scope.app.refresh();
											}
										}
									]
								}
							]
						},
						{ width:6 }
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
	init(){
		this.notifications = this.ui(NotificationsView);

		const theme = this.app.config.theme;
		this.$$("themes").config.tooltip = theme ? "Come back to the light side of the Force" : "Come to the dark side";
		this.$$("themes").refresh();

		this.on(this.app,"read:notifications",() => {
			this.$$("bell").config.badge = 0;
			this.$$("bell").refresh();

			setTimeout(() => {
				this.$$("bell").config.badge += 1;
				this.$$("bell").refresh();
				this.app.callEvent("new:notification");
			},10000);
		});
	}
}
