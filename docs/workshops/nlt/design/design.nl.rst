Ontwerpen
########################


Veelgebruikte robotsystemen
-----------------------------
arm
delta robot (pick and place)
stewart-platform (6 DOF platform)


ontwerpen met de toepassing en gebruiker in gedachten
------------------------------------------------------------

Een ontwerp begint altijd met een probleem dat we op willen lossen. 


Ontwerpcyclus
--------------------------
Een ontwerp maken is geen simpele opgave. Je kan niet in één keer een ontwerp op papier tekenen dat 
zomaar zal werken en aan alle eisen voldoet; je moet een proces volgen. In deze paragraaf (**TODO is dit een paragraaf?**)
gaan we kijken naar een veelgebruike methode voor ontwerpen. Dit is geen lineair proces, maar een cyclus. Je maakt namelijk vaak
een ontwerp waar uiteindelijk toch nog dingen aan verbeterd moeten worden. In dat geval ga je weer delen opnieuw ontwerpen,
maar dan met de alle kennis die we hebben verkregen met het eerste ontwerp. We gaan nu kort door alle stappen heen.

1. probleem analyseren en beschrijven
2. programma van eisen opstellen

    * prestatiecriteria
    * functionele eisen
    * randvoorwaarden
    * specificaties
3. (deel)uitwerkingen bedenken
4. concepten maken voor het ontwerp
5. ontwerp realiseren
6. ontwerp testen en evalueren
7. itereren -> naar stap 4 gaan

**Stap 1: probleem analyseren en beschrijven.** De eerste stap is om simpelweg na te denken over welk probleem 
we op willen lossen. Ook moet je hier nadenken wie de gebruikers gaan zijn.

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
vastgrijpen". *Randvoorwaarden* gaan over limieten die aan het ontwerp zijn verbonden. Denk bijvoorbeeld 
aan "De auto mag niet groter zijn dan een standaard parkeervak" of "De robot moet binnen 20 seconden opstarten".
Ten slotte de *specificaties*. Dit zijn alle keuzes die al gekozen zijn voor het ontwerp. Als  
we bijvoorbeeld een driewieler willen ontwerpen, is een specificatie "De fiets moet 3 wielen hebben". 
Niet meer, niet minder.

**Stap 3: (deel)uitwerkingen bedenken.** Nu kunnen we gaan beginnen met delen van het ontwerp uitwerken. 
Het doel is om het ontwerp op te splitsen in veel delen en dan die delen uit te werken. Met uitwerken wordt bedoeld 
dat je nadenkt over de opties die je hebt. Je zou voor de voortbeweging van een robotje bijvoorbeeld
kunnen kiezen voor wielen of rupsbanden. Je kan niet in een keer een hele auto ontwerpen, maar misschien wel 
twintig makkelijkere delen zoals de zijspiegels.

**Stap 4: concepten maken voor het ontwerp.** Nu kan je de deeluitwerkingen combineren om totaaloplossingen 
te bedenken. Je zou nu bijvoorbeeld kunnen kijken naar een fiets met handrem, eentje met terugtraprem en 
eentje waar je met je voet op de grond moet gaan schrapen om te remmen. 

**Stap 5: ontwerp realiseren.** In deze stap kiezen we één van de concepten uit stap 4. We zien dan misschien dat 
die derde optie van de fietsen niet zo handig is. Zodra we hebben gekozen tussen de versie met de handrem en 
die met de terugtraprem, kunnen we het ontwerp gaan realiseren. Hierbij komen veel berekeningen kijken: 
Hoe dik moet het frame van de fiets zijn om niet teveel door te buigen? Hoeveel remkracht heb je nodig 
om de fiets snel tot stilstand te brengen? Hoe lang moeten de armen van de trappers zijn?

**Stap 6: ontwerp testen en evalueren.** Nu is het tijd om het ontwerp te fabriceren en te testen! We
kunnen hier allerlei eigenschappen gaan opmeten en daarmee controleren of onze berekeningen en voorspellingen
 correct waren. We evalueren hiermee of aan ons programma van eisen is voldaan.

**Stap 7: itereren.** Nu hebben we een keuze: voldoet ons ontwerp, of moet er nog wat veranderd worden? 
Als je nog niet tevreden bent met het ontwerp, kan je gewoon weer naar stap 1 gaan. Vaak is het niet nodig om
weer helemaal naar stap 1 te gaan. Misschien heb je bijvoorbeeld ergens een foute berekening gedaan. 
Dan kan je teruggaan naar stap 5. 

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
