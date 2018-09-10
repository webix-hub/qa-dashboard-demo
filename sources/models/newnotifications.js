let i = 0;
export function newNotification(){
	return webix.copy(notifications[i++%notifications.length]);
}
const notifications = [
	{
		title:"You are working too much",
		message:"There cannot be too much time for leisure. Believe us.",
		read:0
	},
	{
		title:"Components",
		message:"Can you name all the Webix components that have been used to build the demo app?",
		read:0
	},
	{
		title:"We miss you",
		message:"Been pretty busy lately, haven't you? That's great! But also do not forget about us.",
		read:0
	},
	{
		title:"Have a nice day",
		message:"Dear client, whenever you are reading this, we wish you a merry day. May luck and success attend you.",
		read:0
	},
	{
		title:"Both sides of the Force",
		message:"Webix 6.0+ has the default skin in both the light and the dark versions. Click the icon in the top right corner to choose one.",
		read:0
	},
	{
		title:"We love you",
		message:"Dear client, we love you very much. If our feelings are mutual, contact us and download Webix. Then we will love you eternally.",
		read:0
	}
];
