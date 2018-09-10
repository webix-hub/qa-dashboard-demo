import {JetView} from "webix-jet";
import {getNotifications} from "models/notifications";

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
		this.$$("list").sync(getNotifications());
	}
	showWin(pos){
		this.getRoot().show(pos);
	}
}
