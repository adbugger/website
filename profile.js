function display()
{
	var time = new Date();
	document.getElementById("timer").innerHTML = time.toUTCString();
}
window.setInterval(display, 1000);


function image()
{
	var images = document.getElementsByClassName("pic-cell");
	for (var i = images.length - 1; i >= 0; i--) 
	{
		var img_urls = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
		images[i].src  = img_urls[i];
		images[i].title = "Click to enlarge"
	}
}
function print(){
	var text = document.getElementById("name").innerHTML;
	alert(text);
}
function expand(){
	var h1 = document.getElementById("info3").clientHeight;
	var finalText = "Atqui partiendo nec ut, in consul graeco necessitatibus eum. Veniam populo pro at, vel ea vidit senserit, mel in alii hinc unum. Vix graeco platonem eu, mei ex quod ignota philosophia, in pro latine civibus elaboraret. An usu integre omnesque inciderint, ad quod illum dicam eum, nihil dolore at has. His tantas scaevola ut, quo epicuri interpretaris ut. 	Ei nec iriure vituperatoribus, mundi aeterno vim in. Vix option facilisi scripserit te, vim eu eros dolorum, rebum virtute indoctum eos te. 	At mei dicunt iriure. Has cu animal pericula. Cu ius solet quaestio, ius luptatum neglegentur ad. Ei mea populo dictas explicari, docendi convenire vim et.	Ea mel facer laboramus, ut corrumpit intellegam sadipscing qui. Diam alia no nec, unum legere officiis ei eos, 	ei has iisque nonumes eligendi. Has modo feugiat an. Ne sed praesent vulputate, ut mel ullum tantas. Duo nusquam honestatis cu, cu vel tempor accusata. Ad tractatos splendide vim. Autem illud rationibus vis ut, et pro veniam tincidunt persequeris. 	Cu duo postea facilisi omittantur, te vim aeque movet. Noster tacimates vis no, eam at graeci liberavisse. Ne vocent iudicabit mei. 	Eu ponderum constituto per. Dicam singulis explicari ut eam, et nec libris scripserit contentiones. Mea vidit congue epicurei et, 	no pro labores comprehensam. Pro te solum quidam, ut pro omnis simul. In eos esse mollis platonem, ex eam ceteros offendit adolescens. 	Te mea audiam fabulas maluisset, est quando accusamus et, ut populo adipiscing eos. Tantas omittam id nec, te eam epicurei theophrastus, 	omnis mediocrem his id. Accumsan cotidieque qui et, pri an fugit iusto concludaturque. Etiam diceret forensibus ea quo, iusto vidisse mel ad, quo an vivendo propriae epicurei. Vis ex quod fugit, malis alterum meliore ea nam. Vis homero iriure eleifend ne. Cu perfecto constituto nam,	eam labores deseruisse necessitatibus te, ius quod tantas menandri in. Sea et harum ponderum reprehendunt, in modus deleniti duo. Et ius stet feugiat, qui nullam saperet te, vivendo concludaturque duo no. Te vix facilis voluptaria, vel posse erroribus euripidis ea. Splendide posidonium et mei, illud sonet suscipiantur ea vix, augue consetetur mea ad. Et eros docendi vix, quem aliquam constituto vim an, sed fierent comprehensam signiferumque ex. Eu mei quaeque menandri, no choro tollit definiebas eos. Ex sit quodsi concludaturque. Id possim quaestio nec, vis et malis tation. An eum integre	suscipit praesent, an ancillae facilisi vim. Et quo oblique prompta, facete debitis voluptatum cu vel. Errem causae discere pri ex. Pri esse torquatos in,	ei brute reque noluisse mei. Nam ne prompta copiosae mnesarchum, ad solum contentiones sed. Vis et quaeque discere, veniam consequat moderatius est at,	eum summo ceteros praesent an. Consulatu cotidieque sit in. Ea vix quot erroribus, simul commune te mei, quem causae tractatos id per.	Ne eam solum melius, eum ad hinc soleat. Nam eu saperet ornatus, te sea errem putant facilis. Cum idque scaevola id.";
	document.getElementById("random").innerHTML = finalText;
	var h2 = document.getElementById("info3").clientHeight;
	h2 = h2 - 50;
	window.scrollBy(0,h2 - h1);
}
function contract(){
	var initText = "Vim id epicuri sententiae vituperatoribus. Cu eam animal alterum deleniti. Sit dolorem perfecto an, id vix diam liber posidonium, vim an posse impedit nostrum. Te nam eripuit officiis perfecto, prodesset posidonium pri et, in quo novum accusata. An quodsi scaevola intellegam eos. Ius tale scaevola adolescens te, eum cu postea omittam pertinax. Eos quod utinam impetus at, mei nisl indoctum constituto ea. His at vocent gloriatur signiferumque. Equidem partiendo eu his, vis ut civibus sensibus repudiandae. Mundi intellegam mei te, inermis civibus ius ea, ne eam vidit inciderint cotidieque..<small>(more...?)</small>";
	document.getElementById("random").innerHTML = initText;
}

function overlayer(i, object1, object2){
	var object1 = document.getElementById('overlay');
	var object2 = document.getElementById('backlay');
	var img_urls = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
	
	object1.src = img_urls[i];
	object1.style.opacity = 1;
	object2.style.display = "initial";
}
function hide(){
	document.getElementById('overlay').style.opacity = 0;
	window.setTimeout(function(){document.getElementById("backlay").style.display = "none";}, 1500);
}
// var note = "NOTE: This website is meant solely for the purposes of practicing styling, which is why content is random and non-distracting."
// alert(note);
