// import AbstractView from "./AbstractView.js";
// import { editProfile } from "../scripts/editProfile.js";
// // import { eventListeners } from "../scripts/editProfile.js";

// export default class extends AbstractView {
//     constructor() {
//         super();
//         this.setTitle("satori - edit profile");
//     }

//     async getHtml() {
//         return (await fetch("static/html/editProfile.html")).text();
//     }

//     loadJS() {
//         editProfile();
//     }

//     stopJS(){
// 		// No loop in this view
// 	}


//     // cleanUpEventListeners() {
//     //  for (const [event, listener] of Object.entries(eventListeners)) {
//     //      document.removeEventListener(event, listener);
//     //  }
//     // }
// }
// @ts-ignore
import AbstractView from "./AbstractView.js";
// @ts-ignore
import { editProfile } from "../scripts/editProfile.js";
// import { eventListeners } from "../scripts/editProfile.js";

export default class EditProfileView extends AbstractView {
	constructor() {
		super();
		this.setTitle("satori - edit profile");
	}

	async getHtml(): Promise<string> {
		return (await fetch("static/html/editProfile.html")).text();
	}

	loadJS(): void {
		editProfile();
	}

	stopJS(): void {
		// No loop in this view
	}

	// cleanUpEventListeners(): void {
	// 	for (const [event, listener] of Object.entries(eventListeners)) {
	// 		document.removeEventListener(event, listener as EventListener);
	// 	}
	// }
}

///???????????????????????