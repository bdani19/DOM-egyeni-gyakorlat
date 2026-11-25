const temak = [
    {
        nev: "Világos téma",
        hatter: '#fff',
        betuszin: '#201f1fff',
        szoveghatter: '#ffffff'
    },
    {
        nev: "Sötét téma",
        hatter: '#201f1fff',
        betuszin: '#fff',
        szoveghatter: '#2c2b2bff'
    },
];

const fejezetcimek = ["- Válassz -", "Bevezetés", "Története", "Edzés", "Felszerelés"];

const fejezetszovegek = [
    "Válassz egy fejezetet a listából a tartalom megtekintéséhez!",
    // bevezetes
    `A testépítés célja, hogy különféle gyakorlatok, főképp súlyzós edzés segítségével növelje az izomzatot, valamint hogy népszerűsítse az egészséges életmódot és a fitneszt. Versenysportként a testépítés az izomtömeg definiáltságát, szimmetriáját, esztétikáját hivatott bemutatni művészi módon.

    Az edzésekhez többek között kézisúlyzókat, súlytárcsákat, különféle rudakat és egyéb ellenállásos eszközöket, gépeket használnak. A testépítésben is fontos szerepet kap az étrend, a regenerálódásra szánt pihenőidő, a gyakorlatok szabályos végzése, valamint a kiegészítő mozgásformák, mint az aerob edzés.`,
    
    // tortenete
    `A testépítés története feltehetően kőemelő versenyekkel kezdődött, melynek sok kultúrában voltak hagyományai. A 19. században erőemberek járták Európát és Amerikát, és súlyemelő mutatványokkal szórakoztatták a közönséget. 

    A 20. század elején kezdtek el komolyabban foglalkozni a test izomzatának kifejezetten látvány szempontjából történő fejlesztésével. Az 1970-es évektől az Acélizom című dokumentumdráma megjelenése után kezdett el szélesebb körben terjedni, olyan ikonikus alakokkal, mint Arnold Schwarzenegger.`,
    
    // edzes
    `A testépítő edzés progresszív (fokozatosan növekvő terhelésű) súlyzós edzésből áll. A testépítők célzottan edzik egyes izomcsoportjaikat, hogy ott megfelelő növekedést érhessenek el. 

    Az erőemelőkkel ellentétben nem az erő megszerzése az edzések elsődleges célja, hanem az izomtömeg növelése és az esztétikus fizikum elérése.`,
    
    // felszereles
    `Általánosan elmondható, hogy a testépítést edzőtermekben végzik, ahol széles körben elérhetőek a különféle gépek és súlyzók. 

    A gépeken túl a testépítők kiegészítő felszereléseket is használhatnak: edzőcipőt a stabil tartásért, kesztyűt a bőrkeményedések ellen, hevedereket a jobb fogásért, valamint súlyemelőövet a derék stabilizálására nagy súlyok emelésekor.`
];

const cim = document.createElement("h1");
cim.textContent = "Testépítés";
document.body.append(cim);

const div = document.createElement("div");
div.className = "menu";

const felsorolas = document.createElement("select");
felsorolas.id = "szinvalaszto";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszto";

const meretvalaszt = document.createElement("select"); 
meretvalaszt.id = "meretvalaszto";

div.append(felsorolas, fejvalaszt, meretvalaszt);
document.body.append(div);

const container = document.createElement("div");
container.className = "container";

const kep = document.createElement("img");
kep.id = "fejezetkep";
kep.src = "IMG/hatter.jpg";
kep.alt = "Testépítés illusztráció";

const fejezet = document.createElement("p");
fejezet.id = "szoveg";
fejezet.textContent = "Válassz egy fejezetet a fenti legördülő menüből!";

container.append(kep, fejezet);
document.body.append(container);

temak.forEach((tema, index) => {
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
for (let i = 10; i <= 40; i++) {
    betumeretek.push(i);
}

betumeretek.forEach((meret) => {
    const opcio = document.createElement("option"); 
    opcio.textContent = `${meret} px`;
    opcio.value = meret;
    meretvalaszt.appendChild(opcio); 
});

meretvalaszt.addEventListener("change", (event) => {
    fejezet.style.fontSize = event.target.value + "px";
});

fejezetcimek.forEach((cimSzoveg, index) => {
    const opcio = document.createElement("option");
    opcio.textContent = cimSzoveg;
    opcio.value = index;
    fejvalaszt.appendChild(opcio);
});

fejvalaszt.addEventListener("change", (event) => {
    const i = event.target.value;
    fejezet.textContent = fejezetszovegek[i];

    if (i == 0) {
       
    }

    if (i == 1) {

    }
});