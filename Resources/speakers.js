var win = Ti.UI.currentWindow;

function getSpeakers() {
  var rowData = [];

  var loader = Ti.Network.createHTTPClient();

  // Sets the HTTP request method, and the URL to get data from  
  loader.open("GET","http://www.mysticcoders.com/speakers_sdc2011.html");

  // Runs the function when the data is ready for us to process 
  loader.onload = function() { 

		var doc = this.responseXML.documentElement;

    var contentdiv = doc.getElementById("content");

    var i=1;
    while(contentdiv.childNodes.length > i) {
      var speakerName = contentdiv.childNodes.item(i).text;
      var bio_elem = contentdiv.childNodes.item(i+1);
      var bio_text = bio_elem.text;

      var bio_img = "http://www.scandevconf.se"+bio_elem.getElementsByTagName("img").item(0).getAttribute("src");


      i+=3;


      var row = Ti.UI.createTableViewRow({
        height:'auto'
      });

      var speaker_view = Ti.UI.createView({
        height:'auto',
        layout:'vertical',
        top:5,
        right:5,
        bottom:5,
        left:5
      });

      var profile_image = Ti.UI.createImageView({
        image:bio_img,
        top:0,
        left:0,
        height:48,
        width:48
      });

      speaker_view.add(profile_image);

      var speaker_lbl = Ti.UI.createLabel({
        text:speakerName,
        left:54,
        width:120,
        top:-48,
        bottom:2,
        height:16,
        textAlign:'left',
        color:'#444444',
        font:{
          fontFamily:'Trebuchet MS',fontSize:16,fontWeight:'bold'
        }
      });

      speaker_view.add(speaker_lbl);

      var bio_lbl = Ti.UI.createLabel({
        text:bio_text,
        left:54,
        top:0,
        bottom: 2,
        height: 'auto',
        width: 'auto',
        textAlign: 'left',
        font: {fontSize:12}
      });

      speaker_view.add(bio_lbl);

      row.add(speaker_view);

      rowData[i] = row;

    }

    tableView.setData(rowData);

    }

  // Send the HTTP request
  loader.send();

}

var tableView = Ti.UI.createTableView();
win.add(tableView);

// grab the latest tweets
getSpeakers();
