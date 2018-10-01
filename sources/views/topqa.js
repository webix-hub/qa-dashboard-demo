import {JetView} from "webix-jet";
import {getQATeam} from "models/qateam";

export default class TopQAView extends JetView {
	config(){
		return {
			gravity:2,
			rows:[
				{
					type:"header", template:"Top QA"
				},
				{
					view:"scrollview",
					body:{
						view:"dataview",
						localId:"dataview",
						xCount:3,
						select:true,
						type:{
							width:"auto", 
							height:104,
							type:"tiles",
							template:(obj,common) => {
								return common.userPic(obj)
									+ common.tasks(obj)
									+ common.stars(obj)
									+ "<span class='qaname'>" + obj.name + "</span>"
									+ obj.category;
							},
							userPic:obj => {
								if (obj.photo)
									return "<image class='userphoto' src='data/photos/"
										+ obj.photo + ".jpg'>";
								else
									return "<span class='userpic'>"
										+ obj.name.charAt(0) + "</span>";
							},
							stars:obj => {
								let result = "";
								for (let i = 1; i <= 5; i++){
									let color = (i <= obj.stars) ? "gold" : "grey";
									result += `<span class='webix_icon mdi mdi-star star_${color}'></span>`;
								}
								return "<span class='stars'>" + result + "</span>";
							},
							tasks:obj => `<span class="tasks">${obj.tasks}</span>`
						}
					}
				}
			]
		};
	}
	init(){
		const dataview = this.$$("dataview");

		dataview.parse(getQATeam());

		dataview.waitData.then(() => {
			this._tooltip = webix.ui({
				view:"tooltip",
				template:"#value#"
			});

			let tasks = dataview.$view.querySelectorAll(".tasks");
			for (let i = 0; i < tasks.length; i++){
				webix.event(tasks[i],"mouseover",(e) => {
					this._tooltip.show({ value:"Tasks completed" }, webix.html.pos(e));
				});
				webix.event(tasks[i],"mouseout",() => {
					this._tooltip.hide();
				});
			}
		});	
	}
}
