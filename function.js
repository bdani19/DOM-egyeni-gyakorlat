const temak = [
    {
        nev: "Világos téma",
        hatter: '#fff',
        betuszin: '#201f1fff',
        szoveghatter: '#9D9DC2'
    }, 
    {
        nev: "Sötét téma",
        hatter: '#201f1fff',
        betuszin: '#fff',
        szoveghatter: '#9D9DC2'
    }, 
]

const fejezetcimek = ["- Válassz -", "Bevezetés", "Története", "Edzés", "Felszerelés"]

const fejezetszovegek = [
    "- Válassz egy fejezetet -", 
    // bevezetes
    `
    A testépítés célja, hogy különféle gyakorlatok, főképp súlyzós edzés segítségével növelje az izomzatot, valamint hogy népszerűsítse az egészséges életmódot és a fitneszt. Versenysportként a testépítés az izomtömeg definiáltságát, szimmetriáját, esztétikáját hivatott bemutatni művészi módon.[1] Az edzésekhez többek között kézisúlyzókat, súlytárcsákat, különféle rudakat (francia rúd, kétkezes súlyzórúd) és egyéb ellenállásos eszközöket, gépeket használnak.[1] A testépítésben is fontos szerepet kap az étrend, a regenerálódásra szánt pihenőidő, a gyakorlatok szabályos végzése, valamint a kiegészítő mozgásformák, mint az aerob edzés.[2] A legtöbb testépítő táplálékkiegészítőket is fogyaszt, például fehérjeport. A testépítők egy része használ anabolikus szteroidokat az izomépítés és a teljesítmény fokozásához, ezeknek azonban egészségkárosító mellékhatásai lehetnek.[3][4]

    A testépítés története feltehetően kőemelő versenyekkel kezdődött, melynek sok kultúrában voltak hagyományai. A 19. században erőemberek járták Európát és Amerikát, és súlyemelő mutatványokkal szórakoztatták a közönséget. A 20. század elején kezdtek el komolyabban foglalkozni a test izomzatának kifejezetten látvány szempontjából történő (azaz nem funkcionális) fejlesztésével. A sportágat nagyon sokáig nem vették komolyan, csupán az 1970-es években, az Acélizom című dokumentumdráma megjelenése után kezdett el szélesebb körben terjedni. Ugyancsak az 1970-es években, a feminizmusnak köszönhetően élénkült meg az érdeklődés a női testépítés iránt. A professzionális testépítésben ma a legnagyobb hangsúlyt a minél nagyobb izomtömegre fektetik, ezzel szemben létrejött az úgynevezett „naturál testépítés”, mely a természetes módszerekkel elérhető fizikumot népszerűsíti.

    A Testépítők Nemzetközi Szövetsége (IFBB) rendezi a rangos Mr. Olympia-versenyt; a cím megszerzőjét tartják az az évi legjobb professzionális testépítőnek.[5][6] 1989 óta rendezik meg a szintén elismert Arnold Classic bajnokságot is. A professzionális versenyzők mellett az amatőr testépítők számára is rendeznek világversenyeket, az IFBB saját amatőr versenye mellett létezik még például a National Amateur Body-Builders’ Association (NABBA) által szervezett Mr. és Ms. Universe-verseny is. Magyarországon is több versenyt rendeznek, az IFBB Testépítő és Fitness Magyar Bajnokság[7] mellett a legjelentősebb verseny a Superbody.[8]
    `, 
    // tortenete
    `
    A testépítés története feltehetően kőemelő versenyekkel kezdődött, melynek sok kultúrában voltak hagyományai,[9] például a skandináv országokban,[10] majd a 19. században vándorcirkuszok részeként erőemberek járták az országokat, akik súlyemelő képességeikkel kápráztatták el a közönséget.[9] Ugyanebben az időben Észak-Amerikában sokkal inkább a testedzés és az egészség kapcsolata került előtérbe, és a kidolgozott görög testideálhoz közelebb álló izomzat elérésére törekedtek. Ezt az ideált testesítette meg a német Eugen Sandow, akit Európában ugyan erőművészként népszerűsítettek, de testalkata, kidolgozott izomzata miatt nem hasonlított a többi erőművészre.[11][12] A férfi erőművészek mellett megjelentek az erős nők is, bár jóval kisebb számban. A leghíresebb mindannyiuk közül az osztrák Katie Sandwina volt.[13] A YMCA szerint a „bodybuilding” (testépítés) kifejezést 1881-ben a bostoni Robert J. Roberts alkotta meg.[14]

    Az első amerikai testépítőversenyt 1903. december 28. és 1904. január 2. között rendezték a Madison Square Gardenben, New Yorkban egy „Testművelő Kiállítás” részeként.[15] Ebben az időszakban Charles Atlas(wd) olasz származású testépítő sikeres vállalkozást épített postán rendelhető edzésprogramjával.[16]

    Az 1920-as–1930-as években még sokan rosszallóan tekintettek a súlyzós edzésekre, igazi sportnak nem tartották.[17] Az Amatőr Atlétikai Szövetség (AAU) rendezte az első modern testépítő-bajnokságot, 1940-ben a szlovák származású John Grimek(wd) nyerte meg, aki súlyemelő volt, eloszlatva a tévhitet, hogy a súlyzózás merevvé teszi az embert.[18] Az első, valóban profi testépítőbajnok Clarence Ross(wd) volt, aki 1945-ben lett Mr. America.[19] A sportágat azonban sokáig nem vették komolyan, a testépítőbajnokok neve nem volt közismert. Az évtized végén kezdett valamelyest megváltozni a testépítés megítélése, miután Steve Reeves(wd) több versenyt is megnyert, a Muscle Beach egyik legnagyobb sztárja volt és az 1950-es években a filmesek is felfedezték maguknak.[20][21] Az 1950-es évek átmeneti időszak volt a testépítésben, amikor is a korábbi ismert testépítők visszavonultak, és egy új generáció vette át a helyüket, akik már nem a szimmetrikus testfelépítésre, hanem az úgynevezett „tömegelésre” vagy tömegnövelésre[22] helyezték a hangsúlyt. Köztük volt Reg Park(wd), Arnold Schwarzenegger későbbi mentora is. Az 1960-as években a sportág már nagy népszerűségre tett szert, számos testépítősztár született, úgy mint Larry Scott(wd) és Sergio Oliva(wd).[23]


    Franco Columbu

    Kathy Segal(wd), az 1987-es Ms. International győztese
    Arnold Schwarzenegger, becenevén „az osztrák tölgy” az 1960-as évek végén tűnt fel a nemzetközi versenyeken, kétszer megnyerte az NABBA Mr. Univerzum címét Európában, mielőtt eltökélte, hogy Amerikában is megméretteti magát. Dave Draper(wd), Sergio Oliva, Bill Pearl, Franco Columbu és Frank Zane voltak a legnagyobb ellenfelei a nemzetközi színtéren.[24][25] Az 1970-es évek elején egyértelműen Schwarzenegger dominálta a sportágat, egymás után hat Mr. Olympia címet szerzett. 1977-ben megjelent az Acélizom (Pumping Iron) című dokumentumdráma, melynek segítségével a testépítés bekerült a köztudatba.[26] Az 1970-es évek a női testépítésben is változást hozott, a feminizmus hatására sokan kezdtek érdeklődni a sport iránt, de ekkor még jobbára szépségversenyszerű megmérettetések zajlottak a hölgyek között.[27]

    Az 1980-as években olyan testépítők vitték el a legnagyobb trófeákat, mint a libanoni születésű Samir Bannout(wd), majd Lee Haney, aki megdöntötte Schwarzenegger rekordját és nyolc Mr. Olympia címet gyűjtött be 1984 és 1991 között. Legnagyobb kihívója a kubai származású Lee Labrada(wd) volt.[28][29] A Testépítők Nemzetközi Szövetsége tagállamainak száma az 1980-as években 100 fölé emelkedett, majd az 1990-es években túllépett a 160-on is, még Kína is csatlakozott. A jugoszláv utódállamok csatlakozása után pedig a világ egyik legnagyobb sportszövetségévé vált.[30] Ekkor bontakozott ki jobban a női testépítés is, melynek első elismert úttörője Lisa Lyon(wd) volt. Bár női fitneszversenyeket korábban is rendeztek a férfi testépítőversenyek keretében, Lyon volt az első versenyző, aki súlyzós edzéssel készült.[29] Az 1980-as évek domináns női testépítője Corinna Everson(wd) volt, aki hatszor nyerte el a Ms. Olympia címet.[31][29] A nagyobb izomtömegű női versenyzőkre azonban nem tekintett jó szemmel a sportág.[32] 1989-ben elindult az Arnold Classic verseny is, női párjával, a Ms. Internationallel (melynek szervezését átvették az IFBB-től).[33][34]


    Ronnie Coleman 2009-ben
    Az 1990-es évekre a testépítés óriási változáson ment át. Az izomtömeg növelése még nagyobb szerepet kapott, és olyan „monstrumok” lettek a legsikeresebb testépítők, mint a 120 kilogrammos, angol nemzetiségű hatszoros Mr. Olympia, Dorian Yates(wd) vagy a szorosan az ő nyomában haladó Flex Wheeler(wd), Shawn Ray(wd), Paul Demayo(wd), Nasser El Sonbaty(wd) és Paul Dillett(wd).[35][36] A testépítők jó része ebben az időben anabolikus szteroidok mellett növekedési hormont és inzulint is használt tömegnöveléshez.[37][38] A női testépítés terén Corinna Eversontól Lenda Murray(wd) vette át a stafétabotot és hatszor lett Ms. Olympia.[35] 1996 és 1999 között a korábbi győzteseknél jóval nagyobb izomtömegű Kim Chizevsky-Nicholls(wd) nyerte el a címet.[39]

    A 2000-es évek elején folytatódott az izomtömeg még tovább növelése a profi testépítőknél, az évtized elejének domináns testépítője Ronnie Coleman volt, aki 1998 és 2005 között nyolc alkalommal lett Mr. Olympia.[37] Colemant Jay Cutler követte, aki négyszer nyerte el a legrangosabb címet,[40] majd Dexter Jackson(wd), aki a Mr. Olympia mellett ötszörös Arnold Classic-győztes is volt.[41] A 2010-es években Phil Heath(wd) nyert legtöbbször, összesen hétszer.[42] 2019-ben Brandon Curry(wd) vitte el a Mr. Olympia címet[43] és egyben az az évi Arnold Classicot is megnyerte.[44] A női testépítés legnagyobb 21. századi sztárja Iris Kyle, tíz Ms. Olympia és hét Ms. International címmel.[45][46]

    Magyarországon 1970-ben rendezték az első hivatalos testépítő-bajnokságot, melyet a 173 cm feletti kategóriában Bitter István nyert meg.[47][48] Kiss Jenő 1996-ban elnyerte az IFBB Mr. Universe (amatőr világbajnoki) címét, Szikszay Gabriella 1991-ben lett amatőr világbajnok, és első magyar nőként jutott ki a Ms. Olympiára, ahol 16. lett.[47][49][50]

    Magyarországon több testépítőversenyt is rendeznek, az IFBB Testépítő és Fitness Magyar Bajnokság[7] mellett jelentősnek mondható még a Superbody is.[8]
    `, 
    //edzes
    `
    A testépítő edzés progresszív (fokozatosan növekvő terhelésű) súlyzós edzésből áll. A testépítők célzottan edzik egyes izomcsoportjaikat, hogy ott megfelelő növekedést érhessenek el, de nem az a céljuk, hogy minél nagyobb súlyt mozgassanak meg, hanem az, hogy a megedzett izmot minél jobban leterheljék. A súlyzós edzés kategóriáját tekintve az anaerob mozgásformák, azon belül is az anaerob állóképesség-fejlesztő mozgásformák közé tartozik.[51] Éppen ezért a súlyemelőkkel és az erőemelőkkel ellentétben nem az erő megszerzése az edzések célja, hanem az izomtömeg növelése; az erő megszerzése csupán járulékos következménye az edzésnek. A súlyemelők és erőemelők az edzéseik során nagyobb súllyal és kevesebb ismétlésszámmal dolgoznak, míg a testépítők kisebb súllyal és nagyobb ismétlésszámmal.[52]
    `, 
    // felszereles
    `
    Általánosan elmondható, hogy a testépítést jobbára edzőteremben végzik. Ennek gyakorlati oka van, mivel a legtöbb sportoló akár anyagi okokból, akár helyhiány miatt nem tud teljes felszereltségű otthoni edzőtermet kialakítani. A legtöbbjüknek ugyanakkor van valamilyen súlyzókészlete vagy edzőgépe otthon is, a teremben végzett edzések kiegészítésére, vagy ha valamilyen okból egyszer-egyszer nem tudnak eljutni edzőterembe. Az edzőtermekben nem csak széles körűen elérhetőek a különféle felszerelések, de szocializálódni is könnyebb, tanácsot kérni más testépítőktől, illetve motivációt nyújtó edzőpartnert vagy egyes gyakorlatokhoz úgynevezett spottert[* 2] találni is könnyebb.[69][70] Többféle edzőterem létezik, az általános fitnesztermektől a kifejezetten testépítők, erőemelők számára tervezett „hardcore” termekig, de léteznek konditermek a szabadban is (ezek használata szezonális, időjárásfüggő).[70][71]
    Az edzőtermekben elérhető általános súlyzókon, rudakon, tárcsákon, illetve a különféle gépeken túl a testépítők kiegészítő felszereléseket is használhatnak. Arnold Schwarzenegger fontosnak tartja a jó edzőcipőt, ami megtámasztja a lábboltozatot, a bokát és nem ruganyos talpú, mint a futócipők. Robert Kennedy enciklopédiája szerint a legolcsóbb tornacipő is jó lehet, ha tartja a bokát, ami fontos a nagy súllyal való guggolásnál és a lábtoló használatánál.[73][74] A bőrkeményedések megelőzése érdekében a testépítők egy része speciális kesztyűt használ a nehéz súlyok emelésénél. Mások gumi- vagy szivacsdarabbal helyettesítik a kesztyűt; nem csak a bőrkeményedések, de az izzadtság miatt előforduló csúszás miatt is. Általánosan véve a kesztyű használata akkor javasolt, ha valamiért zavarja a sportolót a bőrkeményedés kialakulása, a puszta kezes emelés ugyanis javít a fogáson, markolási technikán.[75][76] Vannak testépítők, akik hevedert (gurtnit) használnak a nagyobb súlyok emelésekor, amitől biztosabb lesz a fogásuk és nagyobb súlyt tudnak emelni. Schwarzenegger és Kennedy szerint a gurtni gátolja a szorítóerő fejlődését, Schwarzenegger nem javasolja a használatát.[77][74] Ugyanakkor a builder.hu szerint egyes izmok edzéséhez segítség lehet a heveder, mert „kikapcsolhat” más izomcsoportokat, így koncentráltabbá teheti például a hátizmok edzését.[78] A testépítők körében is elterjedt a súlyemelőövek használata. A súlyemelőöv feladata, hogy nagy súlyok mozgatásakor tartsa a derekat, stabilizálja a felsőtestet.[79]
    `
]


const cim = document.createElement("h1");
cim.textContent = "Testépítés";
document.body.append(cim);

const div = document.createElement("div");
div.className = "menu";

const felsorolas = document.createElement("select");
felsorolas.id = "szinvalaszto";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszto";

const meretvalaszt = document.createElement("meretvalaszt");
meretvalaszt.id = "meretvalaszto";

div.append(felsorolas, fejvalaszt, meretvalaszt);
document.body.append(div);

const container = document.createElement("div");
container.className = "container";

const kep = document.createElement("img");
kep.id = "fejezetkep";
kep.src = "";
kep.alt = "Testépítés"

const fejezet = document.createElement("p");
fejezet.id = "szoveg";
fejezet.textContent = "Válassz egy fejezetet"

container.append(kep, fejezet);
document.body.append(container);


temak.forEach( (tema, index) => {
    const opcio = document.createElement('option');
    opcio.textContent = tema.nev;
    opcio.value = index;
    felsorolas.append(opcio);
});

felsorolas.addEventListener("change", (event) => {
    const valt = event.target.value;
    document.body.style.backgroundColor = temak[valt].hatter;
    document.body.style.color = temak[valt].betuszin;
    container.style.backgroundColor = temak[valt].szoveghatter;
    fejezet.style.backgroundColor = temak[valt].szoveghatter;
    fejezet.style.color = temak[valt].betuszin;
});

let betumeretek = [];
for (let i = 10; i <= 50; i++) {
    betumeretek.push(i);
}

betumeretek.forEach( (meret) => {
    const opcio = document.createElement("option");
    opcio.textContent = `${meret} px`;
    opcio.value = meret;
    meretvalaszt.appendChild(opcio);
});

