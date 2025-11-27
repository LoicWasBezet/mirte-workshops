Ontwerpen
########################


Veelgebruikte robotsystemen
-----------------------------
arm
delta robot (pick and place)
stewart-platform (6 DOF platform)


Ontwerpcyclus
--------------------------

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

ontwerpen met de toepassing en gebruiker in gedachten
-------------------------------------------

Een ontwerp begint altijd met een probleem dat we op willen lossen. 
13:51


Kinematica van een robotsubsysteem
--------------------------------------

In de natuurkunde bestaat beweging uit 2 delen: kinematica en kinetica. Kinematica 
kijkt naar **hoe** een object beweegt, zonder te kijken *waarom* het beweegt. 
Kinetica kijkt juist naar **waarom** een object beweegt. 
Kinematica gebruik je bijvoorbeeld als je wil weten hoe een robot arm moet bewegen om een 
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

    x_{1}=\cos(\alpha) * L_{1} 
    y_{1}=\sin(\alpha) * L_{1} 

Dezelfde berekening kunnen we doen voor de onderarm:

.. math::

    x_{2}=\cos(\beta) * L_{2} 
    y_{2}=\sin(\beta) * L_{2} 

Nu hoeven we alleen stap 3 nog te doen. Zoals je in de figuur ziet is de x-coördinaat van 
de end-effector gelijk aan :math:`x_{1}+x_{2}`. De y-coördinaat is gelijk aan :math:`y_{1}+y_{2}`.
Nu hebben we de coördinaten van de end-effector!

.. math::

    x=\cos(\alpha) * L_{1} + \cos(\beta) * L_{2} 
    y=\sin(\alpha) * L_{1} + \sin(\beta) * L_{2}
     
Deze formule geldt voor alle hoeken alpha en beta, ook als ze groter zijn dan 90°. 
Een soortgelijke berekening kan gedaan worden voor armen die bestaan uit een andere hoeveelheid
onderdelen.

