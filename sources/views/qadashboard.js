import {JetView} from "webix-jet";
import TopQAView from "views/topqa";
import UserActivityView from "views/useractivity";
import TicketsView from "views/tickets";

export default class QADashboardView extends JetView {
	config(){
		return {
			type:"space", cols:[
				{
					type:"wide",
					gravity:3,
					rows:[
						TopQAView,
						UserActivityView
					]
				},
				TicketsView
			]
		};
	}
}