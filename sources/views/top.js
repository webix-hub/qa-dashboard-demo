import {JetView} from "webix-jet";
import MenuView from "views/menu";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", elements:[
						{
							view:"button", type:"icon", icon:"menu",
							width:37, css:"toolbar_button",
							click:() => this.app.callEvent("menu:toggle")
						},
						{
							view:"label", template:"QA Dashboard"
						},
						{}
					]
				},
				{
					cols:[
						MenuView,
						{ $subview:true }
					]
				}
			]
		};
	}
}
