import {JetView} from "webix-jet";
import {users} from "models/useractivity";
import {geocolors} from "helpers/geocolors";

export default class UserActivityView extends JetView {
	config(){
		return {
			gravity:3,
			rows:[
				{ type:"header", template:"User activity" },
				{
					view:"geochart",
					// provide your own Google API key 
					// https://developers.google.com/maps/documentation/javascript/get-api-key
					key:"AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
					chart:{
						colorAxis:{
							colors:geocolors
						},
						legend:"none",
						datalessRegionColor:"#D9D8D7",
						projection:"kavrayskiy-vii"
					}
				}
			]
		};
	}
	init(view){
		view.queryView({ view:"geochart" }).parse(users);
	}
}