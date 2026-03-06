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

Transistors
-------------------

Bij natuurkunde heb je geleerd over allerlei elektronische onderdelen, waaronder de schakelaar. Uiteraard is het heel handig 
om een schakelaar te hebben die de stroom kan afkappen, maar het is niet handig dat dit altijd handmatig moet gebeuren. 
Gelukkig is er een manier gevonden om de schakelaar te bedienen met een andere stroomdraad! 
Dit wordt een transistor genoemd. Transistoren staan bekend als een van de beste uitvindingen van de afgelopen 100 jaar. 
En niet voor niets: het is een van de meest gebruikte onderdelen in talloze apparaten. Jouw smartphone alleen al heeft 
honderden miljarden transistors (dat is meer dan 100.000.000.000)!

In de figuur hieronder is te zien hoe deze werkt. Er komt een draad E binnen. Wanneer er een spanning wordt gezet 
op draad B ontstaat er een verbinding tussen E en C en kunnen de elektronen verder stromen. Dit kan dus gebruikt worden om de stroom van E naar C uit te zetten, 
maar het kan ook gebruikt worden om het signaal van B te versterken. B mag namelijk heel zwak zijn om de verbinding te laten ontstaan. Als je E aansluit op een sterke spanningsbron 
kan je een sterk signaal door C laten gaan als er een zwak signaal via B binnenkomt. Als B geen signaal binnenbrengt blijft C ook spanningsloos. 
Hiermee versterk je dus effectief het signaal van B.



.. figure:: _media/Transistor.png
    :alt: Een transistor
    :width: 400
    :align: center

    Een transistor


Binaire getallen
-------------------------

Je hebt misschien al eens 
gehoord dat computers werken met enkel binaire getallen. Dat betekent dat ze elk getal opslaan als 
een combinatie van eenen en nullen. Door middel van onze transistoren kunnen we deze losse getalletjes opslaan! Als de transistor aan staat, 
heeft het een waarde van 1 en als het uit staat een waarde van 0. Door meerdere van deze naast elkaar te zetten kunnen we grote getallen opschrijven!
Het lijkt eigenlijk best wel op onze manier van getallen schrijven, behalve dat wij de getallen van 0 tot 9 gebruiken. Dit heet *base 10*. Wanner je enkel de getallen 
0 en 1 gebruikt heet het *base 2* (binaire getallen).
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


Logische poorten en waarheidstabellen
-----------------------------------------

Om een computer te maken moeten we een samenstelling van onderdeeltjes vinden die in de basis de volgende twee dingen kan: 

1. Getallen opslaan.
2. Simpele wiskundige berekeningen doen.

Met deze twee acties kunnen we al veel bereiken! Door simpele wiskundige berekeningen aan elkaar te koppelen kunnen we ook complexe problemen oplossen.
Om getallen op te slaan gebruiken we zoals in de vorige paragraaf vermeld transistoren. Deze transistoren slaan binaire getallen op. Hiermee voldoen we aan punt 1.
Om aan punt 2 te voldoen heeft een computer bijvoorbeeld onderdelen die twee getallen kunnen optellen of vermenigvuldigen. Echter zijn deze onderdelen zelf gemaakt uit nog kleinere onderdelen: 
hoofdzakelijk *logische poorten*. Deze poorten kunnen als het ware steeds 1 logische denkstap uitvoeren. De poorten werken met twee waardes: waar en onwaar (1 en 0).
Een voorbeeld is bijvoorbeeld de *en-poort* Deze poort krijgt twee waardes gegeven, en geeft dan de waarde *waar* terug als de eerste *en* de tweede waardes waar zijn, en anders onwaar. 
De *of-poort* geeft "waar" terug als ten minste 1 van de 2 gegeven waardes waar is. De *exclusieve of-poort* geeft *waar* terug als enkel de eerste of enkel de tweede waarde waar is. 
Om makkelijker te werken met deze poorten kan je waarheidstabellen gebruiken. In deze tabel staat er gegeven wat de poort teruggeeft bij alle verschillende mogelijke inputs. Hierbij kan waar worden opgeschreven als 1 en onwaar als 0. 
Hier is bijvoorbeeld de waarheidstabel van de *en-poort*, *of-poort*, *exclusieve of-poort* (engels: xor-poort) en de niet-poort:

========== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
en-poort                         of-poort                         xor-poort                        not-poort
-------------------------------- -------------------------------- -------------------------------- ---------------------
A          B          A en B     A          B          A of B     A          B          A xor B    A          niet A
========== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Onwaar     Waar    
Waar       Onwaar     Onwaar     Waar       Onwaar     Waar       Waar       Onwaar     Waar       Waar       Onwaar    
Onwaar     Waar       Onwaar     Onwaar     Waar       Waar       Onwaar     Waar       Waar       nvt        nvt          
Waar       Waar       Waar       Waar       Waar       Waar       Waar       Waar       Onwaar     nvt        nvt          
========== ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  


.. admonition:: info
   :class: margin
    Wil je weten hoe je de andere poorten daadwerkelijk maakt als circuit? Lees dan dit stukje:   :doc:`Hoe maak je poorten? TODO daadwerkelijk schrijven <LogicaPoorten>`


Hiermee kunnen we dus een bit (een 1 of een 0) krijgen door een of twee bits aan de poort te leveren. Door deze poorten aan elkaar te koppelen kunnen we 
steeds complexere onderdelen maken. Stel dat je het resultaat van een en-poort ook nog door de niet-poort zou leiden: Je krijgt dan enkel Onwaar als beide inputs 
Waar waren. Het geeft dan dus antwoord op de vraag: Zijn niet beide inputs Waar? De xor-poort kan zelf gemaakt worden door en-poorten, niet-poorten en een of-poort op de juiste manier aan elkaar te koppelen. 


In de context van elektronica komen de waardes van waar en onwaar overeen met ofwel of er spanning op een kabel staat ofwel of er lading in een onderdeeltje zit.  
Hieronder zie je hoe je bijvoorbeeld een en-poort maakt.
Door spanning te zetten op draden A en B kan je stroom al dan niet laten lopen. Wanneer er spanning staat op zowel A als B, 
zal het lampje gaan branden en komt er spanning te staan op draad C. Door draad C door een niet-poort te halen kan je de poortcombinatie van hierboven nabouwen!



.. image:: _media/EnPoort.jpg
   :width: 500
   :alt: En poort
   :align: center
   Voorbeeld van een elektronische en-poort.

Stel nu dat we twee getallen hebben opgeslagen, beide met 1 bit (1 transistor die een 1 of 0 opslaat). 
Hoe kunnen we dan deze getallen optellen? Dit doen we door de juiste logische poort(en) te gebruiken op de bits.
In de volgende opdracht gaan we ontdekken welke logische poorten we moeten toepassen om dit uit te rekenen.


    **Opdracht 1**
        
    We willen bepalen welke poorten we nodig hebben om de som van 2 bits te berekenen. We hebben dus twee cijfers die ofwel 0 ofwel 1 gaan zijn 
    en willen weten hoe we het resultaat kunnen berekenen. 

    a. Wat zijn alle antwoorden die mogelijk zijn?

        Tip: Een ervan is in ieder geval 0 + 0 = 0

    b. Hoeveel bits heb je nodig zodat elk mogelijke antwoord opgeslagen kan worden?

        Let op: het is er meer dan 1! 
        Tip: Met 1 bit kan je alleen 0 en 1 opschrijven, terwijl je met 8 bits bijvoorbeeld al de getallen 0 tot en met 255 kan opslaan.

    c. Reken de optelsom van elke mogelijke combinatie van 0 en 1 uit. Schrijf het antwoord steeds op als binair getal!


    d. Maak een waarheidstabel die het effect van de twee inputs op de meest rechter bit van het resultaat weergeeft.

        Tip: Maak drie kolommen: eentje voor de eerste input, eentje voor de tweede input en eentje voor de rechterbit van het resultaat.
        Het binaire getal 11 ( 11 (base 2)= 3 (base 10)) heeft bijvoorbeeld als rechterbit 0.
        Je mag zelf kiezen of je deze tabel invult met eenen en nullen of met Waar en Onwaar.

    e. Deze waarheidstabel is als het goed is gelijk aan een van de bovenstaande tabellen van de bestaande poorten! Welke poort is dat?

        Dit betekent dat we het rechterbit kunnen berekenen door de twee getallen door die poort te halen!
        Tip: Het kan zijn dat je je rijen op een andere volgorde hebt staan. Vergelijk of jouw tabel bij elke combinatie van inputs 
        hetzelfde antwoord geeft als de tabel van de poort die je bekijkt!

    f. Herhaal voor de tweede bit van rechts van het resultaat de stappen van vraag e. Door welke poort moeten we de twee getallen halen om die 2e bit te krijgen?

    Als je weet hoe je de 4 basispoorten van hierboven moet bouwen, kan je nu dus ook een onderdeeltje bouwen die 2 bits kan optellen! Door dit 
    soort systemen aan elkaar te koppelen op steeds grotere schaal kan je complexe machines maken!

Hoe we precies zo'n poort maken hoef je niet te weten. 
Echter is het wel interessant om even kort te kijken hoe het eruit ziet dus lees vooral het stukje hier rechts!



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
Een andere module die veel voorkomt is een *analog to digital converter* (ADC). Dit is 
een onderdeel die een analoog signaal kan vertalen naar een digitale binaire waarde. Er is namelijk een probleem 
als je bijvoorbeeld een temperatuursensor wil aflezen met je computer. De sensor geeft een bepaalde spanning door via de verbindingskabel, die overeenkomt met een bepaalde temperatuur aan 
de hand van een formule die bij de sensor hoort. De computer kan niet direct de spanning opslaan 
om mee te rekenen. Het moet de spanning omzetten naar een binair getal die deze spanning uitdrukt in volt. 
Het onderdeel die deze omzetting kan doen is dus de AD converter. Je hebt ook een *digital to analog converter* (DAC). Deze 
doet dezelfde taak, maar dan andersom. Dit wordt bijvoorbeeld gebruikt om de digitale muziek van je computer om te zetten naar een analoog signaal voor speakers.


.. figure:: https://www.embedded.com/wp-content/uploads/sites/2/2025/01/Figure-1.png
    :alt: Een AD en DA converter
    :width: 300
    :align: center

    Een ADC en een DAC (COPYRIGHT?)

De laatste module waar we naar gaan kijken is de *microcontroller*. Dit is een erg 
veelzijdig onderdeel dat als het ware een kleine computer is. Je kan er programmeercode op zetten 
om het allerlei andere onderdelen aan te sturen. Het heeft vaak zo'n 20 aansluitpunten voor stroomdraden. 
Je zou bijvoorbeeld kunnen programmeren dat wanneer er spanning staat op stroomdraad 1 en 2, er ook spanning moet 
worden gezet op stroomdraad 3. Je hebt nu een *en-poort* gemaakt! Een microcontroller kan nog veel complexere taken uitvoeren dan dat. Het is niet een krachtige computer, 
maar je komt al heel ver met wat simpele berekeningen als je een robot wil aansturen. Een microcontroller is compact en zuinig met energie.

**Plaatje van pi pico?**

**-PWM?**
