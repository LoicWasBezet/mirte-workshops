Ontwerpen
########################


Veelgebruikte robotsystemen
-----------------------------
arm
delta robot (pick and place)
stewart-platform (6 DOF platform)

In dit hoofdstuk gaan we het hebben over ontwerpen. Om je een idee te geven waar je aan zou kunnen denken bij het ontwerpen, 
zullen we eerst even kijken naar veelgebruikte robotsystemen.  

We gaan kijken naar "mobile manipulators". Deze robots kunnen 2 dingen: zichzelf verplaatsen en de wereld om hen heen beïnvloeden.
De robot zit dus niet vast op een bepaalde plek, maar kan bewegen naar de plek waar hij nodig is. Vervolgens kan de robot daar een
actie uit gaan voeren. Er zijn veel verschillende manieren om een robot manoeuvreerbaar te maken. Vaak worden **wielen** gebruikt.
Wielen zijn erg geschikt voor vlakke ondergronden. Het is erg makkelijk om een systeem te maken dat rechtdoor kan rijden. 
Het moeilijke zit echter in de bochten. 

In de bochten zijn er twee problemen: er is een *snelheidsverschil* tussen de wielen en de wielen moeten 
allemaal net *niet dezelfde richting* op rollen. Bij een bocht zitten de helft
van de wielen in de binnenbocht, en de andere helft in de buitenbocht. Zoals je waarschijnlijk wel weet is een binnenbocht altijd
korter dan de buitenbocht. Dit betekent dat wanneer een karretje een bocht maakt, de ene helft van de wielen meer afstand moet 
afleggen dan de ander. Dit veroorzaakt dus een *snelheidsverschil*. Dit verschil kan echter niet bestaan als de wielen direct aan 
elkaar gekoppeld zitten via een draaiende as. In dat geval gaat er een wiel moeten slippen. 
Je moet dan dus een manier hebben om het ene wiel sneller te laten draaien dan het andere. Vaak wordt hier een
**differentieel** voor gebruikt. Dit is een mechanisme dat bestaat uit een aantal tandwielen. Met een differentieel kan je 2 wielen 
tegelijk aandrijven, ook als ze een onderling snelheidsverschil hebben. (**TODO afbeeldingen erin verwerken van o.a. differentieel en ackermann**).
Vervolgens hebben we een tweede probleem: Aangezien sommige wielen in de binnenbocht zitten en andere in de buitenbocht, 
legt niet elk wiel dezelfde cirkelbaan af in een bocht. Het resultaat is dat een wiel in de binnenbocht sterker met bijsturen 
dan een wiel in de buitenbocht. Om dit makkelijk te laten gebeuren wordt **Ackermann-sturing** gebruikt. Dit *stangenmechanisme*
Zorgt ervoor dat de draaiassen van alle wielen door 1 snijpunt gaan. Dat punt is dan precies het punt waar de auto omheen 
rijdt.

.. admonition:: info
   :class: margin

   Leer meer over speciale wielen voor robots: :doc:`wieltypes <types_of_wheels>`

In plaats van wielen worden ook soms **rupsbanden** gebruikt. Deze zijn erg geschikt als de ondergrond wat ruiger is. 
Om een bocht te maken laat je de ene rupsband expres harder draaien dan de ander. Hierdoor gaat de robot draaien. 
Je kan met rupsbanden niet een bocht maken zonder dat een stuk van de rupsband slipt. Het voordeel is echter dat 
rupsbanden veel meer grip hebben, dus kunnen ze zwaardere ladingen aan. 

Een robot hoeft echter niet per se op de grond te blijven. Je hebt ook robots die de lucht in of onder water kunnen gaan. 
Om de lucht in te gaan wordt vaak een **drone** gebruikt. Een drone verplaatst zich door middel van een aantal propellers die samen de drone kunnen laten 
stijgen, dalen, draaien en verplaatsen. De propellers zitten allemaal met armen vast aan een centraal lichaam. Een drone is erg nuttig als de ondergrond 
slecht begaanbaar is. Een drone heeft over het algemeen minimaal 4 propellers. Er bestaan ook veel varianten met 6 of zelfs 8 propellers. Als een robot onderwater 
werkt worden ook vaak propellers gebruikt als voortstuwing. Meestal heeft de robot minstens 6 propellers, allemaal in verschillende richtingen. 
Hiermee kan de robot elke denkbare beweging onderwater uitvoeren.




Mobile manipulator

mobile mode - manipulator - end-effector

mobile mode: Auto - drone - onderzeeer - met poten

VERDIEPING:
Flexibele wielen: wielen met wielen erin zoals MIRTE MASTER
Omniwielen (Mecanum)

ontwerpen met de toepassing en gebruiker in gedachten
------------------------------------------------------------

Een ontwerp begint altijd met een probleem dat we op willen lossen. 


Ontwerpcyclus
--------------------------
Een ontwerp maken is geen simpele opgave. Je kan niet in één keer een ontwerp op papier tekenen dat 
zomaar zal werken en aan alle eisen voldoet; je moet een proces volgen. In deze paragraaf (**TODO is dit een paragraaf?**)
gaan we kijken naar een veelgebruikte methode voor ontwerpen. Dit is geen lineair proces, maar een cyclus. Je maakt namelijk vaak
een ontwerp waar uiteindelijk toch nog dingen aan verbeterd moeten worden. In dat geval ga je weer delen opnieuw ontwerpen,
maar dan met de alle kennis die je hebt verkregen met het eerste ontwerp. We gaan nu kort door alle stappen heen.


**Stap 1: probleem analyseren en beschrijven.** De eerste stap is om simpelweg na te denken over welk probleem 
we op willen lossen. Je denkt na over eventuele ontwerpuitdagingen. Ook moet je hier nadenken 
over wie de gebruikers gaan zijn.

**Stap 2: programma van eisen opstellen.** De tweede stap is om alle eisen van het ontwerp heel specifiek 
te beschrijven. Dit is een erg belangrijke stap; je kiest hier hoe je uiteindelijke ontwerp moet presteren.
De eisen worden onderverdeeld in 4 categorieën:

* Prestatiecriteria
* Functionele eisen
* Randvoorwaarden
* Specificaties

*Prestatiecriteria* zijn eisen waarbij een bepaalde eigenschap *zo goed mogelijk* moet zijn. 
Denk bijvoorbeeld aan "De robot moet zo snel mogelijk een voorwerp kunnen verplaatsen". *Functionele eisen* gaan 
ook over bepaalde eigenschappen die het ontwerp moet hebben. Echter zijn dit eisen waar de robot alleen maar aan 
hoeft te voldoen. Er hoeft dus niks "zo goed mogelijk" te zijn. Denk aan "De robot kan een voorwerp
vastgrijpen". *Randvoorwaarden* gaan over limieten die aan het ontwerp zijn verbonden. Dit kan te maken hebben met 
bijvoorbeeld afmetingen, budget of wetgeving. Denk bijvoorbeeld aan "De auto mag niet groter zijn dan een 
standaard parkeervak" of "De robot mag niet meer dan €200 kosten om te fabriceren".
Ten slotte de *specificaties*. Dit zijn alle keuzes die al vaststaan voor het ontwerp. Als  
we bijvoorbeeld een driewieler willen ontwerpen, is een specificatie "De fiets moet 3 wielen hebben". 
Niet meer, niet minder.

**Stap 3: (deel)uitwerkingen bedenken.** Nu kan je gaan beginnen met delen van het ontwerp uit te werken. 
Het doel is om het ontwerp op te splitsen in een aantal delen en dan die delen uit te werken. Met uitwerken wordt bedoeld 
dat je nadenkt over de opties die je hebt. Je zou voor de voortbeweging van een robotje bijvoorbeeld
kunnen kiezen voor wielen of voor rupsbanden. Je kan niet in een keer een hele auto ontwerpen, maar misschien wel 
twintig makkelijkere delen zoals de zijspiegels, het stuur en het airco-systeem.

**Stap 4: concepten maken voor het ontwerp.** Nu kan je de deeluitwerkingen combineren om concepten (ook wel
totaaloplossingen genoemd) te bedenken. Je zou nu bijvoorbeeld kunnen kijken naar een fiets met handrem, 
eentje met terugtraprem en eentje waar je met je voet op de grond moet gaan schrapen om te remmen. 

**Stap 5: ontwerp realiseren.** In deze stap kiezen we één van de concepten uit stap 4. We zien dan misschien dat 
die derde optie van de fietsen niet zo handig is. Zodra we hebben gekozen tussen de versie met de handrem en 
die met de terugtraprem, kunnen we het ontwerp gaan realiseren. Hierbij komen veel berekeningen kijken: 
Hoe dik moet het frame van de fiets zijn zodat het niet teveel doorbuigt? Hoeveel remkracht heb je nodig 
om de fiets snel tot stilstand te brengen? Hoe lang moeten de stangen van de trappers zijn?

**Stap 6: ontwerp testen en evalueren.** Nu is het tijd om het ontwerp te fabriceren en te testen! We
kunnen hier allerlei eigenschappen gaan opmeten en daarmee controleren of onze berekeningen en voorspellingen
correct waren. We evalueren hiermee of aan ons programma van eisen is voldaan.

**Stap 7: itereren.** Nu kijken we terug op onze evaluatie: voldoet ons ontwerp, of moet er nog wat veranderd worden? 
Als je nog niet tevreden bent met het ontwerp, kan je gewoon weer naar stap 1 gaan. Vaak is het niet nodig om
weer helemaal naar stap 1 te gaan. Misschien heb je bijvoorbeeld ergens een foute berekening gedaan. 
Dan kan je teruggaan naar stap 5. Als er geen verbeteringen meer zijn die je wilt maken, is het ontwerp af!

**TODO dit lijstje gaat weg**

1. probleem analyseren en beschrijven
asd
2. programma van eisen opstellen

    * prestatiecriteria
    * functionele eisen
    * randvoorwaarden
    * specificaties
3. (deel)uitwerkingen bedenken
4. concepten maken voor het ontwerp
5. ontwerp realiseren
6. ontwerp testen en evalueren
7. itereren 


Kinematica van een robotsubsysteem
--------------------------------------

Bij het ontwerpen van een robot ga je op een gegeven moment de subsystemen van de robot moeten 
gaan uitwerken. Hier komen vaak berekeningen bij kijken. 
In de natuurkunde bestaat beweging uit 2 delen: kinematica en kinetica. Kinematica 
kijkt naar **hoe** een object beweegt, zonder te kijken *waarom* het beweegt. 
Kinetica kijkt juist naar **waarom** een object beweegt. 
Kinematica gebruik je bijvoorbeeld als je wil weten hoe een robotarm moet bewegen om een 
bepaald voorwerp op te pakken. Als je weet hoe de armen moeten bewegen kan je nog niet
altijd de arm die beweging laten doen. Daarvoor moeten we namelijk eerst weten hoeveel kracht 
de motoren moeten leveren om de arm de beweging te laten doen. Hiervoor gebruiken we kinetica. 

Sommigen van jullie zullen bij natuurkunde al zowel kinematica als kinetica hebben gehad. 
Wij gaan nu leren hoe we kinematica kunnen toepassen op een robotarm. De robotarm
waar we naar gaan kijken bestaat uit een bovenarm, een onderarm en een end-effector (een hand).
De arm is te zien in de figuur hiernaast **(TODO: FIGUUR ERIN ZETTEN)**.
De vraag die we willen beantwoorden luidt als volgt: Als we de stand van de boven- en onderarm
kennen, wat is dan de positie van de end-effector? Aangezien we enkel kinematica gaan 
bekijken, hoeven we ons geen zorgen te maken over de krachten die op de arm werken.
We krijgen dan eigenlijk gewoon een geometrieprobleem die we met alleen wiskundekennis
al kunnen oplossen. 

De lengtes van de robotarm staan over het algemeen vast. Dat betekent dat
de enige variabele die we nodig hebben om de positie van een onderdeel van de arm te 
beschrijven de hoek is tussen de richting van het onderdeel en een andere gekozen vaste richting. 
De richting die we hiervoor kiezen is langs de positieve x-as. Dit maakt de berekening een stukje makkelijker. 
We willen de x en y coördinaten van de end-effector uitrekenen. Hierbij kiezen we dat het 
beginpunt van de robotarm op de oorsprong (0,0) zit. De berekening bestaat uit 3 stappen:

1. Bereken de positie van het scharnier tussen de boven- en onderarm ten opzichte van de oorsprong.
2. Bereken de positie van de end-effector ten opzichte van het bovengenoemde scharnier.
3. Tel de x en y waardes van beide relatieve posities bij elkaar op. 

We kunnen de positie van het scharnier t.o.v. de oorsprong bereken door de zijdes van
een driehoek te bekijken. Hierbij is de schuine zijde de robotarm, en de hoek tussen de schuine 
en horizontale zijde de hoek die bij de armpositie hoort. 
(**TODO: een herinnering van wat cos en sin ookalweer zijn**).
Nu kunnen we berekenen dat de lengte van de bovenarm langs de x- en y-as gelijk is aan:

.. math::

    \cos(\alpha) = x_{1}/ L_{1} \quad \rightarrow \quad x_{1}=\cos(\alpha) * L_{1} \\  
    \sin(\alpha) = y_{1}/ L_{1} \quad \rightarrow \quad y_{1}=\sin(\alpha) * L_{1} 

Dezelfde berekening kunnen we doen voor de onderarm:

.. math::

     \cos(\beta) = x_{2}/ L_{2} \quad \rightarrow \quad x_{2}=\cos(\beta) * L_{2} \\
     \sin(\beta) = y_{2}/ L_{2} \quad \rightarrow \quad y_{2}=\sin(\beta) * L_{2} 

Nu hoeven we alleen stap 3 nog te doen. Zoals je in de figuur ziet is de x-coördinaat van 
de end-effector gelijk aan :math:`x_{1}+x_{2}`. De y-coördinaat is gelijk aan :math:`y_{1}+y_{2}`.
Nu hebben we de coördinaten van de end-effector!

.. math::

    x=\cos(\alpha) * L_{1} + \cos(\beta) * L_{2} \\
    y=\sin(\alpha) * L_{1} + \sin(\beta) * L_{2}
     
Deze formule geldt voor alle hoeken alpha en beta, ook als ze groter zijn dan 90°. 
Een soortgelijke berekening kan gedaan worden voor armen die bestaan uit een andere hoeveelheid
onderdelen.
