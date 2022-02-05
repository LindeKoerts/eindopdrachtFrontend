# WhatToWear. 

# Waarom deze applicatie? 

Wonend in Nederland krijgen we de gehele dag te maken met veranderend weer. Zo regent het de ene minuut en schijnt de ander minuut de zon. Daarbij is ook nog eens de ene 18 graden niet de andere 18 graden. Lastig dus! Want hoe zorg je ervoor dat je niet een plensbui op je hoofd krijgt in je zomerkleding? Duidelijk een probleem. Wat dit probleem ook nog eens versterkt is dat je op een dag ook nog eens op verschillende plekken komt waardoor je al helemaal de kluts kwijt bent en daarom heb ik #whattowear. ontwikkeld. 

In deze applicatie kun je het weer opzoeken en krijg je daarbij, door middel van een smiley, meteen te zien waarmee je rekening moet houden qua kledingkeuze. 

Alleen als ingelogde gebruiker krijg je alle pagina's te zien.

Dit project is opgestart met [Create React App](https://github.com/facebook/create-react-app).


## Belangrijkste functies 

De belangrijkste functies zijn de vinden op de pagina's Een stad en Op de fiets. Hierin kan een bezoeker de weersvoorspelling bekijken met de kledingsuggestie. Op de pagina Een stad is het mogelijk om 1 plek in te vullen en hiervan een uitgebreide voorspelling te krijgen. Op de pagina Op de fiets kunnen 2 plaatsten worden ingevuld om zo van beide plekken het weer en de kledingsuggestie te krijgen. 





## Benodigdheden 

Er wordt gebruik gemaakt van de OpenWeather Api (https://openweathermap.org/api) om de weersvoorspelling op te halen. Bijgevoegd aan het verantwoordingsdocument is de API key te vinden. 

Om de pagina's Een stad en Op de fiets te kunnen bekijken zal een account moeten worden aangemaakt. Dit kan door een account aan te maken bij aanmelden en daarna jezelf in te loggen. Met deze gegevens kan er worden ingelogd. 

## De applicatie starten

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

### `npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

### `npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken.

## Beschikbare Scripts

### `npm test`

Start de testrunner in de interactieve kijkmodus.\ 
Zie de sectie over [tests uitvoeren](https://facebook.github.io/create-react-app/docs/running-tests) voor meer informatie.

### `npm run build`

Bouwt de app voor productie naar de map `build`. 
Het bundelt React correct in productiemodus en optimaliseert de build voor de beste prestaties. De build is verkleind en de bestandsnamen bevatten de hashes. De applicatie is dan klaar om te worden geimplementeerd!
