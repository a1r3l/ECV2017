# Pràctica Final - Graffity
##### Aurel Ioan i Marc Garcia / 18689 - 158637

## Que tenim?
### Backend

> A la part de backend tenim un servidor propi, aquest servidor està fet amb NODE.js això ens permet instal·lar fàcilment altres llibreries i tenir un servidor operatiu d'una manera fàcil i senzilla. En el nostre cas hem utilitzat la llibreria ws.js que ens permet crear Web Sockets; i això ens permet realitzar la comunicació de xat entre els usuaris, el pas dels missatges, que genera el canvas, per pintar el mateix canvas a tots els usuaris i on guardem tant els usuaris registrats, els usuaris sense registrar i l'estat dels canvas.
Per obtenir aquests estats, el que fem, és guardar l'estat del primer usuari que es connecta; aquesta acció la fem cada segon. Si el primer usuari es desconnecta, el segon usuari passa ser el que envia l'estat del canvas al servidor.
A més des de client hem decidit que la millor manera per poder autentificar i crear els usuaris, era utilitzar una tecnologia que ens permetés tenir una seguretat fiable. Nosaltres hem triat Google, ja que ja havíem treballat amb el Firebase, i creiem que era una manera segura, fiable i fàcil per realitzar aquesta tasca.


### Frontend

> Aquest apartat de Graffity és el que es veurà per part de l'Usuari. Dit això aquest apartat estarà compost per quatre apartats.
El primer d'aquest de la barra superior on es situa el nom del projecte, el menú i el botó de Login i Register. El segon apartat compondrà el menú on es mostraran els usuaris connectats, una opció per poder activar/desactivar el xat i un altre per poder activar/desactivar el HUD amb les eines del Graffity. El tercer apartat és el HUD amb eines per poder modificar el Graffity de l'escenari.
Finalment tenim l'apartat d'escena que és la gran part de la pantalla és on es visualitzarà el nostre món 3D.
Entrant mes en detall la part on l'usuari interactuarà amb l'entorn serà els dos murs situats un a cada costat de la porta d'entrada a l'edifici central. Aquests murs es grafitejaran quan l'usuari apunti amb el ratolí la posició on vol pintar i fes-hi clic amb el ratolí. A partir d'aquí l'usuari pot deixar-se anar per la seva imaginació i grafitejar els murs al seu gust. Per fer aquest comportament possible mitjançant la programació en Javascript i fent servir la tecnologia ThreeJS per tal de representar l'escena 3D. Dit això, la idea principal que l'usuari tinguin la possibilitat de pintar a la paret ve definida per l'ús de dos canvas 2D saltejats com a textura de dos plans paral·lels al mur. Cada cop que l'usuari pinta a la paret, realment està pintat a un canvas 2D que finalment actualitzarà la textura del mur.

## Com funciona?
### Register

> Per registrar-nos el que hem de fer primer de tot, és clicar el botó de register situat a la part superior dreta de la pantalla. Un cop oberta la pantalla de register, el que hem de fer és introduir els camps: usuari, password i repeat password. Si les contrasenyes no coincideixen, ens dóna un error, i si n'hi ha algun error en la connexió, també es mostra amb un popup. Si algun dels camps no és introduït, ens ho marcarà en vermell.

### Login

> Per logejar-nos anteriorment hauríem d'haver-nos registrar anteriorment, un cop registrats cliquem el botó de login situat a la part superior dreta de la pantalla. Un cop oberta la pantalla de login, el que hem de fer és introduir els camps: usuari i password. També podem marcar l'opció de mantenir-me connectat, això guarda en localStorage, i així si tornem a entrar a la web en un temps, la nostra secció està guardada i no hem de tornar a fer el Login. Si tenim algun error de connexió, es mostra un popup amb el tipus d'error. Si algun dels camps no és introduït, ens ho marcarà en vermell.

### Xat

> Per parlar amb el xat, necessitem estar logejats, un cop logejat podem utilitzar el xat. Per mostrar el xat, hem de clicar el botó que trobarem dins el menú de visualitzar el xat. Si enviem un missatge pel xat, aquest missatge s'enviarà a tots els usuaris connectats. Aquest missatge està format per una rodona on apareix la primera lletra de l'usuari en majúscules, el nom de l'usuari, l'hora que s'ha enviat el missatge i el cos del missatge.

### Wall

> Aquest apartat és on l'usuari normal farà servir la nostra aplicació. Per tant, per tal de grafitejar el mur l'usuari haurà d'apuntar amb el ratolí la posició on desitja pintar i mitjançant l'ús del clic es plasmarà la pintura al mur.

### HUD

> Aquest apartat representa la caixa d'eines que l'usuari podrà fer servir per tenir certa varietat a l'hora de fer el seu graffity a la paret. Com a opció des de l'aplicació li oferim les següents funcions:
 
1. Canviar la mida de l'esprai amb el qual es vol pintar.
2. Canviar el color de l'esprai amb el qual es vol pintar
3. Desplaçar la càmera de l'usuari per l'espai tridimensional al gust d'aquest.






