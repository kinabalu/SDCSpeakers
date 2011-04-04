var win = Ti.UI.currentWindow;

function getTweets() {
  var rowData = [];

  var loader = Ti.Network.createHTTPClient();

  // Sets the HTTP request method, and the URL to get data from  
  loader.open("GET","http://search.twitter.com/search.json?q=scandev");

  // Runs the function when the data is ready for us to process 
  loader.onload = function() { 

	if ( this.responseText ) 
		var tweets = JSON.parse(this.responseText);
	else {
	 	var tweets = ''; // this is null not double quote
	}
		
    for (var i = 0; i < tweets.results.length; i++) {
		var tweet  = tweets.results[i].text; // The tweet message
		var user   = tweets.results[i].from_user; // The screen name of the user
		var profile_img = tweets.results[i].profile_image_url; // The profile image

		var row = Ti.UI.createTableViewRow({
			height:'auto'
		});

		var post_view = Ti.UI.createView({ 
			height:'auto', 
			layout:'vertical', 
			top:5, 
			right:5, 
			bottom:5, 
			left:5 
		});


		var av_image = Ti.UI.createImageView({  
			image:profile_img, // the image for the image view  
			top:0,  
			left:0,  
			height:48,  
			width:48  
		});

		post_view.add(av_image);

		var user_lbl = Ti.UI.createLabel({  
			text:user,  
			left:54,  
			width:120,  
			top:-48,  
			bottom:2,  
			height:16,  
			textAlign:'left',  
			color:'#444444',  
			font:{  
			    fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'  
			}  
		});  

		post_view.add(user_lbl); 

		var tweet_lbl = Ti.UI.createLabel({  
			text: tweet,  
			left: 54,  
			top: 0,  
			bottom: 2,  
			height: 'auto',  
			width: 236,  
			textAlign: 'left',  
			font:{ fontSize:14 }  
		});  

		post_view.add(tweet_lbl);  

		row.add(post_view);  
		rowData[i] = row;
    }

    tableView.setData(rowData);

  };
  // Send the HTTP request
  loader.send();

}

var refreshBtn = Ti.UI.createButton({
  systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});

refreshBtn.addEventListener('click', function() {
  getTweets();
});

win.setRightNavButton(refreshBtn);

// Create the table view and set its data source to "rowData" array  
var tableView = Ti.UI.createTableView();

//Add the table view to the window  
win.add(tableView);
	

// grab the latest tweets
getTweets();
