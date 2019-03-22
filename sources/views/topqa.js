import {JetView} from "webix-jet";
import {getQATeam} from "models/qateam";

export default class TopQAView extends JetView {
	config(){
		this.minItemWidth = 243;
		const initCount = Math.floor(document.documentElement.clientWidth / this.minItemWidth);

		return {
			gravity:4,
			rows:[
				{
					type:"header", template:"Top QA"
				},
				{
					view:"dataview",
					localId:"dataview",
					xCount:(initCount > 4) ? 3 : ((initCount >= 0 && initCount <= 2) ? 1 : initCount-2),
					minWidth:255,
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
								return "<image class='userphoto' src='data/photos/" + obj.photo + ".jpg'>";
							else
								return "<span class='userpic'>" + obj.name.charAt(0) + "</span>";
						},
						stars:obj => {
							let result = "";
							for (let i = 1; i <= 5; i++){
								let color = (i <= obj.stars) ? "gold" : "grey";
								result += `<span class='webix_icon mdi mdi-star star ${color} ${i}'></span>`;
							}
							return "<span class='stars'>" + result + "</span>";
						},
						tasks:obj => `<span class="tasks">${obj.tasks}</span>`
					},
					onClick:{
						"stars":function(ev, id){
							this.updateItem(id,{ stars:ev.target.classList[5] });
							return false;
						}
					}
				}
			]
		};
	}
	init(){
		const dataview = this.$$("dataview");

		dataview.parse(getQATeam());
		dataview.select(1);

		this._winresize = webix.event(window, "resize", () => this.resizeDataview(this.minItemWidth));

		this._tooltip = webix.ui({
			view:"tooltip",
			template:"#value#"
		});

		dataview.attachEvent("onAfterRender",() => this.relocaleTooltips());
		dataview.attachEvent("onAfterSelect",() => this.relocaleTooltips());
	}
	resizeDataview(minItemWidth){
		const elements = Math.floor(this.$$("dataview").$width / minItemWidth);
		const count = (elements > 3) ? 3 : ((elements == 0) ? 1 : elements);
		this.$$("dataview").define("xCount", count);
		this.$$("dataview").adjust();
		this.$$("dataview").resize();
	}
	relocaleTooltips(){
		const dataview = this.$$("dataview");
		let tasks = dataview.$view.querySelectorAll(".tasks");
		for (let i = 0; i < tasks.length; i++){
			webix.event(tasks[i],"mouseover",(e) => {
				this._tooltip.show({ value:"Tasks completed" }, webix.html.pos(e));
			});
			webix.event(tasks[i],"mouseout",() => this._tooltip.hide());
		}
	}
	destroy(){
		webix.eventRemove(this._winresize);
	}
}
