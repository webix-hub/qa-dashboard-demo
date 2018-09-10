export function getNotifications(){
	return notifications;
}

const notifications = new webix.DataCollection({
	data:[
		{ title:"Latest tickets", message:"Top margin in a popup window is smaller than the...", read:0 },
		{ title:"Tickets report", message:"Button text on mobile devices", read:0 },
		{ title:"Assignment", message:"Emily Kaldwin assigned you a new ticket", read:1 },
		{ title:"Daisy Fitzroy added new tasks", message:"'Confirm' button styling", read:1 },
		{ title:"Tickets report", message:"No ability to exit profile editing dialogue", read:1 }
	]
});
