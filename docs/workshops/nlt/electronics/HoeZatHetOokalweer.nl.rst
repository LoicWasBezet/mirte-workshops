:orphan:

Elektronica - hoe zat het ook alweer? 
########################

Alle robots zijn opgebouwd uit heel veel simpele bouwsteentjes. Zo'n samenstelling van elektrische onderdelen wordt een *circuit* genoemd.
We gaan een aantal natuurkundige concepten bekijken en daarmee de onderdeeltjes begrijpen.
Omdat elektriciteit een moeilijk onderwerp is, gaan we een analogie gebruiken om het makkelijker te maken over Elektronica na te denken:
We gaan werken met vrachtwagens! Deze vrachtwagens vervoeren zand en rijden altijd met een constante snelheid. De vrachtwagens rijden door de stroomdraden heen en 
leveren zand waar nodig. Gaandeweg zal het steeds duidelijker worden wat deze wagens nou precies voorstellen.


**TODO: Willen we doen alsof elektronen door de draad bewegen ipv lading doorstoten?**


Stroomdraad
--------------
De eerste bouwsteen is de stroomdraad. Dit is simpelweg een draadje dat stroom kan geleiden van de ene plek naar de andere.
Stroomdraden vormen de basis van elk circuit. Deze draadjes zijn in de robotica vaak erg dun en gemaakt van koper. Dit zijn de "wegen" 
waar de vrachtwagens over rijden.

**TODO?:FOTO VAN CIRCUIT MET ENKEL EEN DRAADJE EN DAN STEEDS EEN ASPECT TOEVOEGEN?**

Serie schakelingen
--------------------------
Serie schakelingen zijn circuits waarbij de stroom nooit opsplitst naar meerdere banen. De vrachtwagens blijven dus altijd op dezelfde rijbaan rijden.


Parallel schakelingen
--------------------------
Parallel schakelingen zijn circuits waarbij de stroom wel opsplitst naar meerdere banen. Uiteindelijk komen alle banen weer samen. Soms neemt een vrachtwagen hier dus een afslag.

Elektronen
----------------
Elektronen zijn de deeltjes die daadwerkelijk door de draad heen stromen. In onze analogie zijn dit de vrachtwagens! 
De energie die ze bij zich dragen is het zand.

Elektriciteit
-------------------------------------
Om elektriciteit te karakteriseren heb je 3 concepten nodig: lading, spanning en stroomsterkte.

*Lading* is hetgeen wat de energie van A naar B vervoert. lading wordt uitgedrukt in de eenheid coulomb [C].
Elektronen zijn deeltjes met een lading van :math: `-1,602 * 10^{-19}` coulomb. 
Dit wordt de negatieve elementaire lading genoemd. Een vrachtwagen is dus ook zo'n deeltje met wat lading in onze analogie.

*Spanning* [U] is een maat voor de hoeveelheid energie die zich in een stuk lading bevindt. Dit komt in onze analogie overeen met de hoeveelheid zand die in een vrachtwagen zit.
De eenheid is dus joule per coulomb [J/C]. Een andere naam hiervoor is volt [V]. 

*Stroomsterkte* [I] is de hoeveelheid lading die per tijdseenheid door de draad stroomt. De vrachtwagens rijden altijd met een constante snelheid, dus de stroomsterkte bepaalt hoeveel rijbanen er zijn voor de vrachtwagens om overheen te rijden. Hoe meer rijbanen er zijn, hoe meer vrachtwagens er per seconde over een stuk weg kunnen bewegen. De eenheid is dus coulomb per seconde [C/s]. 
In werkelijkheid wordt deze eenheid Ampere genoemd [A] (1 A = 1 C/s).


Spanningsbron
-----------

Een stroomdraad gaat niet vanzelf stroom geleiden. Daarvoor moet er eerst spanning over de draad staan. Immers, hoe kan 
er zand bezorgd worden als er geen zand in de vrachtwagens zit? Een spanningsbron is dus simpelweg een bron van energie (zand). Dit kan bijvoorbeeld een batterij of een accu zijn. Ook een stopcontact is een spanningsbron.
Als er alleen maar vrachtwagens de bron uit rijden, raken ze uiteraard op. Ze beginnen dus pas te rijden als ze ook terug kunnen komen.
Vandaar dat een circuit altijd begint en eindigt in een bron. Veel spanningsbronnen leveren een constant voltage wanneer de elektronen langskomen.
Bij een 9V batterij hebben alle elektronen die de bron uitkomen dus een spanning van 9 volt.

**TODO: Betere uitleg van waarom een circuit gesloten moet zijn? Is "beginnen en eindigen in een bron" wel algemeen genoeg?**

Schakelaar
-------------------
Als je een apparaat uit wil zetten kan je de spanningsbron weghalen. Om elke keer de batterijen uit je fietslampje te halen is echter veel gedoe.
Daarom gebruik je vaak een *schakelaar*. Een schakelaar verbreekt de stroomkring door ergens in het circuit het fysieke contact met het draadje te verbreken. 
In onze analogie kan je met een schakelaar dus de brug openzetten op de route zodat er niks meer kan rijden.


Weerstand
---------------
Een weerstand is een onderdeel die het moeilijker maakt voor de elektronen om door een draad te stromen. 
Wanneer elektronen door een weerstand stromen raken ze een deel van hun energie kwijt. 
Wanneer elektronen een circuit doorlopen, raken ze dus bij elke weerstand een stuk van hun energie kwijt tot ze weer terug bij de spanningsbron zijn zonder energie. 
Het zand wordt dus afgeleverd aan de weerstanden die in het circuit zitten! Hoe groter de weerstand, hoe meer zand het wil hebben.
Een weerstand [R] wordt uitgedrukt in Ohm [:math:`\Omega`]. Eigenlijk is elk onderdeel een weerstand. Een stroomdraad heeft een hele lage weerstand (gebruikt weinig energie), terwijl een lampje een hoge weerstand heeft (gebruikt veel energie).
De meeste weerstanden zijn Ohmse weerstanden. Dit betekent dat de weerstand gelijk is 
aan de verhouding tussen het spanningsverschil tussen het begin van de weerstand en het eind van de weerstand en de stroomsterkte: :math:`R=\frac{U}{I}`. 
Stel dat er bijvoorbeeld een gloeilamp is die 230 volt gebruikt bij een stroomsterkte van 0,1 ampere, dan is zijn weerstand :math:`\frac{230}{0,1} = 2300 \Omega`.
De weerstand van een onderdeel is vaak constant. 
De verhouding tussen spanning en stroomsterkte is dan dus ook constant. Als we de gloeilamp maar de helft van de 230V zouden geven, zou er dus ook maar de helft van de 0,1 Ampere gaan stromen.

Als we weer terugduiken in onze analogie kan je weerstand zien als iets wat rijbanen afsluit. 
Stel je voor dat de stroomdraad fungeert als een snelweg met 100 rijbanen.
De gloeilamp sluit er dan misschien 30 af. Hierdoor kunnen er dus minder vrachtwagens over de snelweg gaan. Als er een tweede gloeilamp is sluit deze nog een aantal rijbanen af. 
Hoe meer open rijbanen er een gloeilamp binnengaan, hoe meer rijbanen het afsluit.


Weerstand in parallelschakelingen
-----------------------------------
In een parallelschakeling splitsen de elektronen op, en komen wat later weer samen. 
Een interessante vraag is wat er gebeurt met de stroomsterkte en de spanning bij een splitsing. 
Met onze analogie is dit makkelijk te bedenken. 

De vrachtwagens verdelen zich over de 2 paden, maar er komen in totaal even veel vrachtwagens langs de 2 paden als voor de splitsing. 

Elke vrachtwagen kiest de rustigste rijbaan bij een splitsing. 
Als veel vrachtwagens naar links gaan, zal een volgende eerder naar rechts gaan. 
Als er een hele hoge weerstand op het rechterpad zit, zullen er die kant op maar weinig rijbanen zijn. 
Het overgrote deel van de vrachtwagens zal dan dus naar links gaan. 
Echter kunnen er prima een aantal vrachtwagens via rechts gaan over de ene rijbaan. De stroomsterkte is op het linkerpad dan het hoogst.
Spanning kwam overeen met de hoeveelheid zand die een vrachtwagen meeheeft. 
Welke kant een vrachtwagen oprijdt heeft uiteraard geen effect op de hoeveelheid zand die hij bij zich heeft. 
De beide paden hebben dus dezelfde spanning als de draad voor de splitsing.
