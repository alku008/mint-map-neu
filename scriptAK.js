let helloWorldPopup;
WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
	WA.chat.sendChatMessage('Herzlich willkommen! Sie befinden sich im interaktiven MINT-Raum! ', 'Admin');
	
	//Links im Chat anzeigen, falls sie nicht funktionieren
	WA.room.onEnterLayer("mathezone1").subscribe(() => {
		WA.chat.sendChatMessage('Wenn der Link hier nicht funktioniert, siehe hier: https://lms.lernen.hamburg/course/view.php?id=5860', 'Admin');				
	});
	
	WA.room.onEnterLayer("mathezone2").subscribe(() => {
		WA.chat.sendChatMessage('Wenn der Link hier nicht funktioniert, siehe hier: https://lms.lernen.hamburg/course/view.php?id=16481', 'Admin');				
	});
	

	// Open the popup when we enter a given zone
	helloWorldPopup = WA.room.onEnterLayer("silentzone").subscribe(() => {
		WA.ui.openPopup("popupSilent", 'In der Silent-Zone!', [{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	});

	// Close the popup when we leave the zone.
	WA.room.onLeaveLayer("silentzone").subscribe(() => {
		helloWorldPopup.close();
	});
	
	// Open the popup when we enter a given zone
	/*helloWorldPopup = WA.room.onEnterLayer("eingang").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("popupEingang", 'Die lila Fläche ist eine Meeting Fläche! An den Bildschirmen warten ein paar Überraschungen auf dich!', [{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	});

	// Close the popup when we leave the zone.
	WA.room.onLeaveLayer("eingang").subscribe(() => {
		helloWorldPopup.close();
	});*/
});