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
							width:37, css:"toolbar_button",
							tooltip:"Open latest notifications",
							click: function(){
								this.$scope.notifications.showLatest(this.$view);
							}
						},
						{
							view:"button", type:"icon", icon:"settings",
							width:37, css:"toolbar_button",
							click:() => {

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
	init(){
		this.notifications = this.ui(NotificationView);
	}
}
