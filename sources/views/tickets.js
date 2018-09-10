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
					columns:[
						{ id:"time", header:"Date", fillspace:1 },
						{ id:"name", header:"Bug", fillspace:4 },
						{
							id:"status", header:"Status", fillspace:1,
							template:obj => {
								return `<span class='status ${obj.status.toLowerCase()}'>&#9679; ${obj.status}</span>`;
							}
						}
					]
				}
			]
		};
	}
	init(view){
		this.$$("datatable").parse(getTickets());
	}
}
