:orphan:

Elektronica
########################

Inleiding
-----------------
.. admonition:: info
   :class: margin

   Vind je het concept elektriciteit nog vaag? Lees dit dan even door:   :doc:`Elektrische schakelingen, hoe zat het ook alweer? <HoeZatHetOokalweer>`


Om een robot te maken hoef je niet per se een computertje in de robot te stoppen. 
Door enkel de juiste onderdelen samen te voegen kan je al een robotje maken die rond kan rijden! 
Je kan bijvoorbeeld twee lichtsensoren op de robot monteren die elektriciteit naar 
de motoren als ze een lijn zien. Als je dit op de juiste manier aansluit kan het robotje een lijn volgen!
Dit worden Braitenbergmachines genoemd. Hieronder is zo'n robotje te zien.

**TODO Plaatje van BEAM robotics of mirte light?**


In dit hoofdstuk gaan we kijken naar welke onderdelen veel voorkomen.
Voor dit hoofdstuk is het erg handig wat voorkennis te hebben van elektriciteit. Komen de termen spanning, stroomsterkte, lading, schakelaren en weerstanden je niet helemaal bekend voor? 
Lees dan vooral het stuk dat hier rechts staat! 


Logische poorten en waarheidstabellen
-----------------------------------------

In de kern van alle elektronica zitten logische poorten. Deze poorten kunnen als het ware een logische denkstap uitvoeren. De poorten werken met twee waardes: waar en onwaar.
Een voorbeeld is bijvoorbeeld de *en-poort* Deze poort krijgt twee waardes gegeven, en geeft dan de waarde *waar* terug als de eerste *en* de tweede waardes waar zijn, en anders onwaar. 
De *of-poort* geeft "waar" terug als ten minste 1 van de 2 gegeven waardes waar is. De *exclusieve of-poort* geeft *waar* terug als enkel de eerste of enkel de tweede waarde waar is. 
Om makkelijker te werken met deze poorten kan je waarheidstabellen gebruiken. In deze tabel staat er gegeven wat de poort teruggeeft bij alle verschillende mogelijke inputs. Hierbij wordt waar opgeschreven als 1 en onwaar als 0
Hier is bijvoorbeeld de waarheidstabel van een *en-poort* en van een *exclusieve of-poort* (engels: xor-poort):

**TODO OMSCHRIJVEN NAAR 0 en 1?**
========  =======  ======= =========  =======  =======
en-poort                   xor-poort                   
========  =======  ======= =========  =======  ======= 
A         B        A en B  A          B        A xor B  
========  =======  ======= =========  =======  =======
Onwaar    Onwaar   Onwaar  Onwaar     Onwaar   Onwaar  
Waar      Onwaar   Onwaar  Waar       Onwaar   Waar  
Onwaar    Waar     Onwaar  Onwaar     Waar     Waar
Waar      Waar     Waar    Waar       Waar     Onwaar
========  =======  ======= ========   =======  =======


.. admonition:: info
   :class: margin

   Wil je weten hoe je deze poorten daadwerkelijk maakt als circuit? Lees dan dit stukje:   :doc:`Hoe maak je poorten? TODO daadwerkelijk schrijven <HoeZatHetOokalweer>`


In de context van elektronica komen de waardes van waar en onwaar overeen met of er spanning op een kabel staat. 
Hiermee kunnen we dus elektrische signalen krijgen op basis van andere elektrische signalen. Door deze systemen slim 
aan elkaar te koppelen kan je complexe machines maken, zoals bijvoorbeeld de chip in jouw telefoon! Hoe we precies zo'n poort 
maken hoef je niet te weten. Echter is het wel interessant om even kort te kijken hoe het eruit ziet dus lees vooral het stukje hier rechts!
**TODO willen we 1 schakeling toch alvast tonen? moeilijk zonder transistor uit te leggen**

Transistors
-------------------

Bij natuurkunde heb je geleerd over allerlei elektronische onderdelen, waaronder de schakelaar. Uiteraard is het heel handig 
om een schakelaar te hebben die de stroom kan afkappen, maar het is niet handig dat dit altijd handmatig moet gebeuren. 
Gelukkig is er een manier gevonden om de schakelaar te bedienen met een andere stroomdraad! 
Dit wordt een transistor genoemd. Transistoren staan bekend als een van de beste uitvindingen van de afgelopen 100 jaar. 
En niet voor niets: het is een van de meest gebruikte onderdelen in talloze apparaten. Jouw smartphone alleen al heeft 
honderden miljarden transistors (dat is meer dan 100.000.000.000)!

In de figuur hieronder is te zien hoe deze werkt. Er komt een draad E binnen. Wanneer er een spanning wordt gezet 
op draad B komt er een verbinding tussen E en C en kunnen de elektronen verder stromen. 



.. figure:: https://media.geeksforgeeks.org/wp-content/uploads/20230903114109/Screenshot-2023-09-03-114044.jpg
    :alt: Een transistor
    :width: 300
    :align: center

    Een transistor (COPYRIGHT?)

Binaire getallen
-------------------------

Je hebt misschien al eens 
gehoord dat computers werken met enkel binaire getallen. Dat betekent dat ze elk getal opschrijven als 
een combinatie van 1 en 0. Het lijkt eigenlijk best wel op onze manier van getallen schrijven, behalve dat wij de getallen van 0 tot 9 gebruiken.
Bij ons is het meest rechter cijfer 1 waard en elk cijfer daar links van steeds 10 keer meer. Kijk bijvoorbeeld 
naar 342. Het meest rechtercijfer voegt 1 * 2 = 2 aan het totaal toe. Het cijfer links daarvan (de 4) 
voegt 4 * 10 toe aan het totaal. Het cijfer weer links daarvan (de 3) voegt 3 * 10 * 10 = 300 toe aan het totaal.
Bij binaire getallen is het meest rechter cijfer ook 1 waard. Elk cijfer links daarvan is echter 
steeds 2 keer zoveel waard in plaats van 10. Kijk bijvoorbeeld naar 1011: het meest rechter cijfer voegt 1*1 = 1 toe aan het totaal. Het cijfer links daarvan 
voegt 1 * 2 = 2 toe aan het totaal. Het cijfer links daarvan voegt 0 * 2 * 2 = 0 toe aan het totaal. 
Het meest linker cijfer voegt 1 * 2 * 2 * 2 = 8 toe aan het totaal. 1 + 2 + 8 = 11 dus 11 als binair getal is 1011! 

De reden dat een computer met binaire getallen werkt is omdat ze erg simpel zijn om op te slaan. 
Je hoeft alleen maar een transistor te activeren om een 1 weer te geven of uit te laten voor een 0. Als je 32 van 
die transistors naast elkaar zet kan je een flink getal opslaan. 
Om elk cijfer tussen de 0 en 9 op te kunnen slaan zou je een veel ingewikkelder onderdeeltje nodig hebben. 
In de praktijk is het makkelijker om een aantal transistoren te gebruiken 
in plaats van zo'n complexer onderdeeltje.

Modules
-----------------------------------------

Door poorten en losse onderdeeltjes zoals weerstanden aan elkaar te schakelen kunnen we modules maken. 
Modules zijn een brede term voor onderdelen 
die een specifieke taak kunnen uitvoeren binnen je stroomnetwerk. 
Een simpele variant hiervan is een H-brug. Dit wordt gebruikt om de stroomrichting door een draad 
om te kunnen keren. In het plaatje hieronder zie je een motor M met daaromheen de H-brug. Zoals je ziet kunnen 
we kiezen aan welke kant de stroom binnenkomt en aan welke kant de stroom weggaat: We kunnen schakelaars s1 en s4 OF schakelaars s2 en s3 tegelijk sluiten 
om de stroomrichting te kiezen. We kunnen de draairichting van een motor hiermee omdraaien! 

.. figure:: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/H_bridge.svg/960px-H_bridge.svg.png
    :alt: Een H-brug
    :width: 300
    :align: center

    Een H-brug (COPYRIGHT?)




Een andere module die veel voorkomt is een *analog to digital converter* (AD converter). Dit is 
een onderdeel die een analoog signaal kan vertalen naar een digitale binaire waarde. Er is namelijk een probleem 
als je bijvoorbeeld een temperatuursensor wil aflezen met je computer. De sensor geeft een bepaalde spanning door via de verbindingskabel, die overeenkomt met een bepaalde temperatuur aan 
de hand van een formule die bij de sensor hoort. De computer kan niet direct de spanning opslaan 
om mee te rekenen. Het moet de spanning omzetten naar een binair getal die deze spanning uitdrukt in volt. 
Het onderdeel die deze omzetting kan doen is dus de AD converter. Je hebt ook een *digital to analog converter*. Deze 
doet dezelfde taak, maar dan andersom.

De laatste module waar we naar gaan kijken is de *microcontroller*. Dit is een erg 
veelzijdig onderdeel dat als het ware een kleine computer is. Je kan er programmeercode op zetten 
om het allerlei andere onderdelen aan te sturen. Het heeft vaak zo'n 20 in/uitgangen voor stroomdraden. 
Je zou bijvoorbeeld kunnen programmeren dat wanneer er spanning staat op stroomdraad 1 en 2, er ook spanning moet 
worden gezet op stroomdraad 3. Je hebt nu een *en-poort* gemaakt! Een microcontroller kan nog veel complexere dingen dan dat.


**-PWM?**
