let i = 0;
export function newNotification(){
	return webix.copy(notifications[i++%notifications.length]);
}
const notifications = [
	{ title:"Daisy Fitzroy added new tasks", message:"'Confirm' button styling<br>Make it look as important as it is. It's for the real stuff." },
	{ title:"Tickets report", message:"No ability to exit profile editing dialogue. It's like your are in an infinite loop." },
	{ title:"You are working too much", message:"There cannot be too much time for leisure. Believe us. Stop until it's too late." },
	{ title:"Components", message:"Can you name all the Webix components that have been used to build the demo app?" },
	{ title:"We miss you", message:"Been pretty busy lately, haven't you? That's great! But also do not forget about us." },
	{ title:"Have a nice day", message:"Dear client, if you are reading this, we wish you a merry day. May luck and success attend you." },
	{ title:"Both sides of the Force", message:"Webix 6.0+ has the new skin in light and dark versions. Click the icon in the top right corner to choose." },
	{ title:"We love you", message:"Dear client, we love you very much. If you contact us and download Webix, we will love you eternally." }
];
