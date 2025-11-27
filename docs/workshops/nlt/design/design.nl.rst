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
beschrijven de hoek is tussen de richting van het onderdeel en zijn beginrichting. 
We willen de x en y coördinaten van de end-effector uitrekenen. Het beginpunt van de robotarm
zit op de oorsprong (0,0). De berekening bestaat uit 3 stappen. 

1. Bereken de positie van het scharnier tussen de boven- en onderarm ten opzichte van de oorsprong.
2. Bereken de positie van de end-effector ten opzichte van het bovengenoemde scharnier.
3. Tel de x en y waardes van beide relatieve posities bij elkaar op. 

