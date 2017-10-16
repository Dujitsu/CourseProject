/****************************
Week 7 Course Project
Trevor Smith
4/14/16
****************************/
function Kaom(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Kaoms_Heart.png')";
	data[0] = "Kaom";
}
function Queen(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Queen_of_the_Forest.png')";
	data[0] = "Queen";
}
function Shavronne(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Shavronnes_Wrappings.png')";
	data[0] = "Shavronne";
}
function Coil(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Lightning_Coil.png')";
	data[0] = "Coil";
}
function Voll(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Volls_Protector.png')";
	data[0] = "Voll";
}
function Carcass(){ 
	var x = document.getElementsByClassName('rectangle'); 
	var y = x[0].style.backgroundImage = "url('croppedImages/Carcass_Jack.png')";
	data[0] = "Carcass";
}

function sendData(page){
	var packed = "";
	for(i=0; (i< data.length); i++){
		if(i > 0){
			packed += ",";
		}
		packed += escape(this.data[i]);
	}
	window.location = page + packed;
}

function acceptData(){
	//alert(data[0] + data[1] + data[2]);
	var query = window.location.search;
	if(query.substring(0,1) == '?'){
		query = query.substring(1);
	}
	var data = query.split(',');
	for(i = 0; (i < data.length); i++){
		this.data[i] = unescape(data[i]);
	}
	//alert(data[0] + data[1] + data[2]);

	if(this.data[0] == "Kaom"){ Kaom(); }
	else if(this.data[0] == "Queen") { Queen();}
	else if(this.data[0] == "Shavronne"){ Shavronne();}
	else if(this.data[0] == "Coil"){ Coil();}
	else if(this.data[0] == "Voll"){ Voll();}
	else if(this.data[0] == "Carcass"){ Carcass();}
	setSockets(this.data[1]);
	setLinks(this.data[2]);
	
	this.data[3] = data[3];
	this.data[4] = data[4];
	this.data[5] = data[5];
	this.data[6] = data[6];
	this.data[7] = data[7];
	this.data[8] = data[8];
	this.data[9] = data[9];
	
	setColor("soloSocket", this.data[3]);
	setColor("socket1", this.data[4]);
	setColor("socket2", this.data[5]);
	setColor("socket3", this.data[6]);
	setColor("socket4", this.data[7]);
	setColor("socket5", this.data[8]);
	setColor("socket6", this.data[9]);
}



// 0 = Success, 1 = Failure
//Using a Jeweller's orb should cause a DIFFERENT set of sockets TODO
function Jeweller(){
	counter = 0;
	for(i = 0; i < 6; i++){
		if(Math.floor(Math.random() * 2) == 0){ counter++; }
		else{ break; }
	}
	setSockets(counter);
	data[1] = counter;
}

function setSockets(counter){
	if(data[0] == "Kaom"){ alert("Kaom's Heart cannot have sockets, Proceed to Divine"); }
	else{
		$("#soloSocket, #socket1, #socket2, #socket3, #socket4, #socket5, #socket6").hide();
		if(counter < 2){ 
			$("#soloSocket").show();
			$("#socketNum1").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 1;
		}
		else if(counter == 2){ 
			$("#socket1, #socket2").show();
			$("#socketNum2").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 2;
		}
		else if(counter == 3){ 
			$("#socket1, #socket2, #socket3").show();
			$("#socketNum3").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 3;
		}
		else if(counter == 4){ 
			$("#socket1, #socket2, #socket3, #socket4").show();
			$("#socketNum4").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 4;
		}
		else if(counter == 5){ 
			$("#socket1, #socket2, #socket3, #socket4, #socket5").show();
			$("#socketNum5").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 5;
		}
		else if(counter == 6){ 
			$("#socket1, #socket2, #socket3, #socket4, #socket5, #socket6").show(); alert("SIX SOCKET!");
			$("#socketNum6").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			return 6;
		}
		else{ $("#soloSocket, #socket1, #socket2, #socket3, #socket4, #socket5, #socket6").hide(); }
	}
}

function Fusing(){
	var link = (Math.floor(Math.random() * 1500) + 1)
	setLinks(link);
	//alert("socket" + data[1] + "fuse" + data[2]);
	data[2] = link;
}
function adjustLinks(link){ //To prevent linking to hidden sockets
		 if(data[1] == 5){ $("#link5").hide(); }
	else if(data[1] == 4){ $("#link5, #link4").hide(); }
	else if(data[1] == 3){ $("#link5, #link4, #link3").hide(); }
	else if(data[1] == 2){ $("#link5, #link4, #link3, #link2").hide(); }
}
function setLinks(link){
		$("#link1, #link2, #link3, #link4, #link5").hide();
		if(link == 1501){ $("#link1, #link2, #link3, #link4, #link5").hide(); }
		else if(link == 1500){ 
			$("#link1, #link2, #link3, #link4, #link5").show();
			$("#linkNum6").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
			alert("Six link!");
		}
		else if((link < 1500) && (link >= 1489)){ 
			$("#link1, #link2, #link3, #link4").show();
			$("#linkNum5").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
		}
		else if((link < 1489) && (link >= 1189)){ 
			$("#link1, #link2, #link3").show();
			$("#linkNum4").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
		}
		else if((link < 1189) && (link >= 694)) { 
			$("#link1, #link2").show();
			$("#linkNum3").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });
		}
		else{ $("#link1").show();}
		adjustLinks(link);
	}
	

function Chromatic(){
	data[3] = setColor("soloSocket");
	data[4] = setColor("socket1");
	data[5] = setColor("socket2");
	data[6] = setColor("socket3");
	data[7] = setColor("socket4");
	data[8] = setColor("socket5");
	data[9] = setColor("socket6");
}

function setColor(socketToColor, color){ document.getElementById(socketToColor).src = color;} //Page transition function
function setColor(socketToColor){
	if(data[0] == "Queen"){ 
		var color = (Math.floor(Math.random() * 4) + 1); 
		if(color == 1) {document.getElementById(socketToColor).src="croppedImages/socket-red.png"; return "red"; }
		else if((color == 2) || (color == 3)){ document.getElementById(socketToColor).src="croppedImages/socket-green.png"; return "green"; }
		else{ document.getElementById(socketToColor).src="croppedImages/socket-blue.png"; return "blue";}
	}
	if(data[0] == "Shavronne"){ 
		var color = (Math.floor(Math.random() * 4) + 1); 
		if(color == 1) {document.getElementById(socketToColor).src="croppedImages/socket-red.png"; return "red";}
		else if(color == 2){ document.getElementById(socketToColor).src="croppedImages/socket-green.png"; return "green";}
		else{ document.getElementById(socketToColor).src="croppedImages/socket-blue.png"; return "blue";}
	}
	if(data[0] == "Coil"){ 
		var color = (Math.floor(Math.random() * 5) + 1); 
		if((color == 1) || (color == 2)){document.getElementById(socketToColor).src="croppedImages/socket-red.png"; return "red";}
		else if((color == 3) || (color == 4)){ document.getElementById(socketToColor).src="croppedImages/socket-green.png"; return "green";}
		else{ document.getElementById(socketToColor).src="croppedImages/socket-blue.png"; return "blue";}
	}
	if(data[0] == "Voll"){ 
		var color = (Math.floor(Math.random() * 5) + 1); 
		if((color == 1) || (color == 2)) {document.getElementById(socketToColor).src="croppedImages/socket-red.png"; return "red";}
		else if(color == 3){ document.getElementById(socketToColor).src="croppedImages/socket-green.png"; return "green";}
		else{ document.getElementById(socketToColor).src="croppedImages/socket-blue.png"; return "blue";}
	}
	if(data[0] == "Carcass"){ 
		var color = (Math.floor(Math.random() * 5) + 1); 
		if(color == 1) {document.getElementById(socketToColor).src="croppedImages/socket-red.png"; return "red";}
		else if((color == 2) || (color == 3)){ document.getElementById(socketToColor).src="croppedImages/socket-green.png"; return "green";}
		else{ document.getElementById(socketToColor).src="croppedImages/socket-blue.png"; return "blue";}
	}
	
}

function Divine(){
	//$("#soloSocket, #socket1, #socket2, #socket3, #socket4, #socket5, #socket6").show();
	//$("#link1, #link2, #link3, #link4, #link5").show();
	if(data[0] == "Kaom"){ DivineKaom(); }
	else if(data[0] == "Queen"){ DivineQueen(); }
	else if(data[0] == "Shavronne"){ DivineShavronne(); }
	else if(data[0] == "Coil"){ DivineCoil(); }
	else if(data[0] == "Voll"){ alert("Voll's Protector is always perfect"); }
	else if(data[0] == "Carcass"){ DivineCarcass(); }
}
function DivineKaom(){
	var fireDamage = (Math.floor(Math.random() * 20) + 1);
	if((fireDamage >= 1)      && (fireDamage <= 4)){   $("#divineWorst").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((fireDamage >= 5) && (fireDamage <= 8)){   $("#divineBetter").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((fireDamage >= 9) && (fireDamage <= 12)){ $("#divineAverage").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((fireDamage >= 13)&& (fireDamage <= 16)){ $("#divineSuperb").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((fireDamage >= 17)&& (fireDamage <= 19)){ $("#divineIdeal").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if(fireDamage == 20){ $("#divinePerfect").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); alert("Perfect Roll!"); }
}

function DivineQueen(){
	var evasion = (Math.floor(Math.random() * 140) + 1);
	var life = (Math.floor(Math.random() * 10) + 1);
	var fireResist = (Math.floor(Math.random() * 4) + 1);
	var coldResist = (Math.floor(Math.random() * 14) + 1);
	var lightningResist = (Math.floor(Math.random() * 14) + 1);
	var animals = (Math.floor(Math.random() * 10) + 1);
	var total = (evasion + life + fireResist + coldResist + lightningResist + animals);
	
		 if((total >= 1)  && (total <= 39)){  $("#divineWorst").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 40) && (total <= 77)){  $("#divineBetter").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 78) && (total <= 115)){ $("#divineAverage").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 116)&& (total <= 153)){ $("#divineSuperb").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 154)&& (total <= 191)){ $("#divineIdeal").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if (total == 192){ $("#divinePerfect").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); alert("Perfect Roll!"); }
}

function DivineShavronne(){
	var spellDamage = (Math.floor(Math.random() * 7) + 1);
	var energyShield = (Math.floor(Math.random() * 60) + 1);
	var lightningResist = (Math.floor(Math.random() * 14) + 1);
	var total = (spellDamage + energyShield + lightningResist);
	
		 if((total >= 1) && (total <= 16)){ $("#divineWorst").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 17)&& (total <= 31)){ $("#divineBetter").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 32)&& (total <= 46)){ $("#divineAverage").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 47)&& (total <= 61)){ $("#divineSuperb").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 62)&& (total <= 76)){ $("#divineIdeal").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if (total == 77){ $("#divinePerfect").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); alert("Perfect Roll!"); }
}

function DivineCoil(){
	var addedLightning = (Math.floor(Math.random() * 10) + 1);
	var armourEvasion = (Math.floor(Math.random() * 30) + 1);
	var life = (Math.floor(Math.random() * 20) + 1);
	var total = (addedLightning + armourEvasion + life);
	
		 if((total >= 1) && (total <= 12)){ $("#divineWorst").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 13)&& (total <= 24)){ $("#divineBetter").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 25)&& (total <= 36)){ $("#divineAverage").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 37)&& (total <= 48)){ $("#divineSuperb").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 49)&& (total <= 59)){ $("#divineIdeal").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if (total == 60){ $("#divinePerfect").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); alert("Perfect Roll!"); }
}

function DivineCarcass(){
	var evasionEnergyShield = (Math.floor(Math.random() * 30) + 1);
	var life = (Math.floor(Math.random() * 20) + 1);
	var allResist = (Math.floor(Math.random() * 3) + 1);
	var total = (evasionEnergyShield + life + allResist);
	
		 if((total >= 1) && (total <= 11)){ $("#divineWorst").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 12)&& (total <= 22)){ $("#divineBetter").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 23)&& (total <= 32)){ $("#divineAverage").val( function(i, oldval) { return parseInt(oldval, 10) + 1; });}
	else if((total >= 33)&& (total <= 42)){ $("#divineSuperb").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if((total >= 43)&& (total <= 52)){ $("#divineIdeal").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); }
	else if (total == 53){ $("#divinePerfect").val( function(i, oldval) { return parseInt(oldval, 10) + 1; }); alert("Perfect Roll!"); }
}
/*
 place holders
function DivineKaom(){ //20
	var fireDmg = (Math.floor(Math.random() * 20) + 20);
	roll.document.getElementById(PlaceHolder)...
}

function DivineQueen(){ //192
	var evasion = (Math.floor(Math.random() * 140) + 240);
	var    life = (Math.floor(Math.random() *  10) +  60);
 var fireResist = (Math.floor(Math.random() *   4) +   6);
 var coldResist = (Math.floor(Math.random() *  14) +  26);
 var lightResist= (Math.floor(Math.random() *  14) +  11);
    var animals = (Math.floor(Math.random() *  10) +  40);
}

function DivineShavronne(){ //77
	var impSpellDmg = (Math.floor(Math.random() * 7) + 3);
   var energyShield = (Math.floor(Math.random() * 60)+ 140);
    var lightResist = (Math.floor(Math.random() * 10)+ 30);
}

function DivineCoil(){ //60
	var addLightning = (Math.floor(Math.random() * 10) + 20);
	var armEva = (Math.floor(Math.random() * 30) + 90);
	var life = (Math.floor(Math.random() * 20) + 60);
}

function DivineVoll(){ alert("Voll's Protector is always perfect!"); }

function DivineCarcass(){ //53
	var evaES = (Math.floor(Math.random() * 30) + 120);
	var life = (Math.floor(Math.random() * 20) + 50);
	var allResist = (Math.floor(Math.random() * 3) + 9);
}
*/