import {JetView} from "webix-jet";
import {getTickets} from "models/tickets";

export default class TicketsView extends JetView {
	config(){
		return {
			gravity:2,
			rows:[
				{ type:"header", template:"Recent tickets" },
				{
					view:"datatable",
					localId:"datatable",
					minWidth:390,
					select:true,
					editable:true,
					editaction:"dblclick",
					tooltip:true,
					columns:[
						{
							id:"time", header:"Date", fillspace:1, sort:"string", tooltip:""
						},
						{
							id:"name",
							header:"Bug",
							fillspace:3,
							sort:"string",
							editor:"text",
							tooltip:"Double-click for a spelling atonement"
						},
						{
							id:"status",
							header:"Status",
							width:120,
							sort:"string",
							editor:"richselect",
							tooltip:"Double-click to change the status",
							options:[
								"Open", "Pending", "Complete"
							],
							template:obj => {
								return `<span class='status ${obj.status.toLowerCase()}'>&#9679; ${obj.status}</span>`;
							}
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("datatable").parse(getTickets());
	}
}
