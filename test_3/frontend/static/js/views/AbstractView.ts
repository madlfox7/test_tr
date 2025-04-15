// // This is the abstract class for all the views
// export default class {
//     constructor() {}

// 	// Sets the title of the page
//     setTitle(title) {
//         document.title = title;
//     }

// 	// The following methods will be overridden by the child classes
	
// 	// Returns the HTML content of the view
// 	// This method is asynchronous because it may need to fetch data from an API
//     async getHtml() {
//         return "";
//     }

// 	// Calls a function that contains the JavaScript code for the view
// 	loadJS() {}

// 	// Stops the JavaScript code of the view (used for views with loops like in the games)
// 	stopJS() {}

// 	// Removes all the event listeners attached to the document that were added by the view 
// 	cleanUpEventListeners() {}
// }

/**
 * Abstract base class for all views
 */
export default abstract class AbstractView {
	constructor() {}

	/**
	 * Sets the document title
	 * @param title The new page title
	 */
	setTitle(title: string): void {
		document.title = title;
	}

	/**
	 * Returns the HTML content of the view.
	 * Must be implemented by subclasses.
	 */
	abstract getHtml(): Promise<string>;

	/**
	 * Called when the view's JavaScript should be loaded (e.g., event binding)
	 */
	loadJS(): void {}

	/**
	 * Called when the view needs to stop ongoing actions (e.g., animations, loops)
	 */
	stopJS(): void {}

	/**
	 * Called to remove all event listeners from the document
	 */
	cleanUpEventListeners(): void {}
}
