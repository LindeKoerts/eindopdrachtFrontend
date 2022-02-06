# WhatToWear. 

Wonend in Nederland krijgen we de gehele dag te maken met veranderend weer. Zo regent het de ene minuut en schijnt de ander minuut de zon. Daarbij is ook nog eens de ene 18 graden niet de andere 18 graden. Lastig dus! Want hoe zorg je ervoor dat je niet een plensbui op je hoofd krijgt in je zomerkleding? Duidelijk een probleem. Wat dit probleem ook nog eens versterkt is dat je op een dag ook nog eens op verschillende plekken komt waardoor je al helemaal de kluts kwijt bent en daarom heb ik #whattowear. ontwikkeld. 

In deze applicatie kun je het weer opzoeken en krijg je daarbij, door middel van een smiley, meteen te zien waarmee je rekening moet houden qua kledingkeuze. 

Alleen als ingelogde gebruiker krijg je alle pagina's te zien.

Dit project is opgestart met [Create React App](https://github.com/facebook/create-react-app). En is onderdeel van de leerlijn frontend van NOVI. 

<img width="1918" alt="Homepage" src="https://user-images.githubusercontent.com/89732018/152674714-2171bdbf-56ec-45f0-97eb-04884733f046.png">


## De applicatie starten
Om te beginnen moet eerst het project eerst worden gecloned naar de eigen lokale machine. Wanneer dat gelukt is, run je het volgende commando om alle node-modules te installeren: 

### `npm install`

Wanneer de installatie gelukt is, zal de API key moeten worden toegevoegd op de pagina Een stad. En bij de componenten WeekWeather, OpDeFietsWeather en DayWeather. Er wordt gebruik gemaakt van de OpenWeather Api (https://openweathermap.org/api) om de weersvoorspelling op te halen. Bijgevoegd aan het verantwoordingsdocument is de API key te vinden. Maar ik zal hem voor de gemakkelijkheid hier ook toevoegen. 

API KEY: 'e265816c2efb5c38bf3bc3fe7dfe63d9';

Wanneer de API KEY is toegevoegd aan het project, run je het volgende commando in de terminal om de applicatie te kunnen starten: 

### `npm start`

Open http://localhost:3000 om de pagina in de browser te bekijken.


## Account aanmaken

Om de pagina's Een stad en Op de fiets te kunnen bekijken, zal een account moeten worden aangemaakt. Dit kan door een account aan te maken bij aanmelden. Klik op de knop "Aanmelden" om naar de aanmeld-pagina te navigeren. Voer een gebruikersnaam, geldig emailadres en wachtwoord in. De gebruikersnaam en het wachtwoord bevatten minimaal 6 karakters. Na een succesvolle registratie wordt je doorgestuurd naar de login-pagina, waar je vervolgens met het aangemaakte account kunt inloggen. Linksbovenin kun je weer uitloggen en zien wanneer je bent ingelogd. 

## Op de fiets 
http://localhost:3000/opdefiets 

Op deze pagina kun je twee plekken invoeren, die je dan kunt vergelijken met elkaar. Na het invullen van de plekken komt de weersvoorspelling naar boven en komt hier ook je kledingsuggestie te staan. 

https://user-images.githubusercontent.com/89732018/152675278-42f8a0a1-f8c6-44d2-9423-28ff54793dbf.mov


## Een stad 
http://localhost:3000/eenstad

Op deze pagina kun je een uitgebreide weersvoorspelling vinden van enkel 1 plek. Ook hier komt een kledingsuggestie te staan. 

https://user-images.githubusercontent.com/89732018/152675316-77b7c16d-248c-4d34-ac03-e13f62cd05ba.mov


