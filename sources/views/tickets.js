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
					columns:[
						{ id:"id", header:"#", width:40 },
						{ id:"time", header:"Date", adjust:"data" },
						{ id:"name", header:"Bug", fillspace:2 },
						{
							id:"status", header:"Status", fillspace:1,
							template:obj => "&#9679; " + obj.status
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
