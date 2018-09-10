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
						width:250, height:250,
						template:(obj,common) => {
							return (!obj.read ? common.itemNew() : "") +
								"<span class='m_title'>" + obj.title + "</span>" +
								"<span class='message'>" + obj.message + "</span>";
						},
						type:{
							itemNew: () => "<span class='webix_icon mdi mdi-alert-decagram unread'></span>",
							height:"auto"
						}
					},
					{
						template:"<a class='link'>See all notifications</a>",
						autoheight:true, borderless:true
					}
				]
			}
		};
	}
	init(){
		const list = this.$$("list");
		list.parse(getNotifications());

		this.on(this.app,"new:notification",() => {
			list.add(newNotification(),0);
		});
	}
	showWin(pos){
		this.app.callEvent("read:notifications");
		this.getRoot().show(pos);
		const list = this.$$("list");
		webix.delay(() => {
			const unread = list.find(obj => obj.read === 0);
			for (let i = 0; i < unread.length; i++)
				list.updateItem(unread[i].id,{ read:1 });
		},null,null,1000);
	}
}
