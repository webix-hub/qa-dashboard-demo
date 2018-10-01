import {JetView} from "webix-jet";
import {getNotifications} from "models/notifications";
import {newNotification} from "models/newnotifications";

export default class NotificationsView extends JetView {
	config(){
		return {
			view:"popup",
			body:{
				rows:[
					{
						view:"list",
						localId:"list",
						select:true,
						borderless:true,
						css:"notifications",
						width:250,
						autoheight:true,
						template:obj => {
							return "<span class='m_title'>" + obj.title + "</span>" +
								"<span class='message'>" + obj.message + "</span>";
						},
						type:{
							height:80
						},
						data:[
							{ title:"Latest tickets", message:"Top margin in a popup window is smaller than the..." },
							{ title:"Tickets report", message:"Button text on mobile devices" },
							{ title:"Assignment", message:"Emily Kaldwin assigned you a new ticket" },
							{ title:"Daisy Fitzroy added new tasks", message:"'Confirm' button styling" },
							{ title:"Tickets report", message:"No ability to exit profile editing dialogue" }
						]
					}
				]
			},
			on:{
				onHide:() => {
					this.app.callEvent("read:notifications");
					this.$$("list").clearAll();
				}
			}
		};
	}
	init(){
		const list = this.$$("list");
		//list.parse(getNotifications());

		this.on(this.app,"new:notification",() => {
			list.add(newNotification(),0);
		});
	}
	showWin(pos){
		this.getRoot().show(pos);
	}
}
