import {JetView} from "webix-jet";
import {tickets} from "models/tickets";

export default class Tickets extends JetView {
	config(){
		return {
			gravity:2,
			rows:[
				{ type:"header", template:"Recent tickets" },
				{
					view:"datatable",
					select:true,
					columns:[
						{ id:"time", header:"Date", fillspace:1 },
						{ id:"name", header:"Bug", fillspace:4 },
						{
							id:"status", header:"Status", fillspace:1,
							template:obj => {
								return `<span class='${obj.status.toLowerCase()}'>&#9679; ${obj.status}</span>`;
							}
						}
					]
				}
			]
		};
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(tickets);
	}
}
