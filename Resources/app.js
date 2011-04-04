//Ti.include("jquery.min.js");

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var speakerWin = Ti.UI.createWindow ({
	title: "Speakers",
	backgroundColor: "#fff",
	url: "speakers.js"
});

var speakerTab = Ti.UI.createTab({
	title: "Speakers",
	icon: "108-badge@2x.png",
	window: speakerWin
});

var twitterWin = Titanium.UI.createWindow ({
    title: "#scandev", // Set the title
    backgroundColor: "#fff", // Set the background color to white
    url: "tweets.js" // Link to file which will handle the code for the window
});

// Create the tab "mainTab"
var twitterTab = Titanium.UI.createTab({
    title: "Twitter", // Title of the tab: "Twitter
    icon: "23-bird@2x.png", // Icon for tab : Included in the source files
    window: twitterWin  // We will create the window "mainWin"
});


// Add the tab to our tab group  
tabGroup.addTab(speakerTab);
tabGroup.addTab(twitterTab);
tabGroup.open();



/*
Titanium.Media.showCamera({
	success: function(imageBlob) {
		alert('good job');
	}, 
	cancel: function() {
		alert('bummer dude');		
	},
	error: function(error) {
		alert('uh oh' + error);
	},
	allowImageEditing: true
});
*/
