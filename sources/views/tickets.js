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
							fillspace:4,
							sort:"string",
							editor:"text",
							tooltip:"Double-click for a spelling atonement"
						},
						{
							id:"status",
							header:"Status",
							fillspace:1,
							sort:"string",
							editor:"combo",
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
