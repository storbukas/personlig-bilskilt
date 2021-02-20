# Personlig bilskilt &nbsp;🚗

Skiltgenerator for personlig bilskilt i **SVG-format**. *Kan brukes som badge på GitHub.*

<p align="center">
  <a href="https://fiy.no/svv" target="_blank">
    <img src="http://personlig-bilskilt.storbukas.no/GITHUB">
  </a>
  <a href="https://fiy.no/svv" target="_blank">
    <img src="http://personlig-bilskilt.storbukas.no/BADGE">
  </a>
</p>

## Hvorfor?

Er du en av de som er *lidenskapelig* opptatt av trafikksikring i Norge, som har støttet Statens vegvesen arbeid med nasjonale trafikksikkerhetskampanjer? *Altså* kjøpt deg personlig bilskilt... **#EgoBilskilt**

Det har nemlig **jeg**! 😁 

Bruk skilt-generatoren jeg har lagd til å generere SVG-filer av ditt skilt, slik at enda flere kan se at nettop **DU** er en som bryr deg om trafikksikring 🚗

## Hvordan bruke?

Alt du trenger å gjøre for å generere personlig bilskilt er å legge ved teksten du vil ha vist i URL'en til [https://personlig-bilskilt.storbukas.no/DITT-SKILT](https://personlig-bilskilt.storbukas.no/). Det er en begrensing på syv tegn, samme som [Statens Vegvesen](https://www.vegvesen.no/kjoretoy/Eie+og+vedlikeholde/skilt/personlig-bilskilt).

> `https://personlig-bilskilt.storbukas.no/DITT-SKILT`

### Eksempel

```html
<img src="https://personlig-bilskilt.storbukas.no/TACO">
<img src="https://personlig-bilskilt.storbukas.no/RASK">
<img src="https://personlig-bilskilt.storbukas.no/1337">
```
<a href="https://fiy.no/svv" target="_blank">
  <img src="https://personlig-bilskilt.storbukas.no/TACO">
</a>
<a href="https://fiy.no/svv" target="_blank">
  <img src="https://personlig-bilskilt.storbukas.no/RASK">
</a>
<a href="https://fiy.no/svv" target="_blank">
  <img src="https://personlig-bilskilt.storbukas.no/1337">
</a>

Du kan også bruke vanlige kjennemerker

```html
<img src="https://personlig-bilskilt.storbukas.no/PR12345">
```

<a href="https://fiy.no/svv" target="_blank">
  <img src="https://personlig-bilskilt.storbukas.no/PR12345">
</a>

## Deploy på GCP (Google Cloud Platform)

> *Forutsetter at du allerede har [satt opp et prosjekt på Google Cloud](https://cloud.google.com/ai-platform/notebooks/docs/before-you-begin)*.

> Eksempel under forutsetter at du bruker Google Cloud Shell, noen av eksemplene som **Wev Preview** gjelder ikke dersom du benytter lokal terminal.

---

Start med å hente repoet

```
git clone https://github.com/storbukas/personlig-bilskilt
```

Gå inn i mappen

```
cd personlig-bilskilt
```

Cloud Shell lar deg teste applikasjonen før du deployer, sånn at du kan sjekke at den kjører som forventet.

For å teste applikasjonen, skriv inn følgende

```
export PORT=8080 && npm install
npm start
```

Se en forhåndsvisning av appen din ved å trykke på **"Web preview"**

For å **deploye applikasjonen** må du kjøre

```
gcloud app deploy
```

Dersom deploy er vellyket, vil du få en melding som ligner på denne

```
Updating service [personlig-bilskilt]...done.
Setting traffic split for service [personlig-bilskilt]...done.
Deployed service [personlig-bilskilt] to [https://personlig-bilskilt-dot-storbukas-no.uc.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s personlig-bilskilt
  
To view your application in the web browser run:
  $ gcloud app browse -s personlig-bilskilt
```

I mitt tilfelle kan jeg nå min applikasjon på: https://personlig-bilskilt-dot-storbukas-no.uc.r.appspot.com

Jeg ønsket å ha en *litt* kortere URL, og valgte derfor å sette opp [dispatch.yaml](https://cloud.google.com/appengine/docs/standard/python/reference/dispatch-yaml) og [custom domain](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains).

**dispatch.yaml**
```yaml
dispatch:
  - url: personlig-bilskilt.storbukas.no/*
    service: personlig-bilskilt
```

Slik at jeg kan nå applikasjonen via https://personlig-bilskilt.storbukas.no.

## Standalone SVG-generering

Det er også mulig å bruke `<script>` taggen i SVG for å endre tekst basert på query params, men siden **GitHub sanerer SVG-filer** det linkes til og fjerner `<script>` taggen har jeg lagd en enkel Node.js og Express server som håndterer dette.

Dette kan du teste her: http://git.storbukas.no/personlig-kjennemerke.svg?kjennemerke=GITHUB

### [Rådata](https://github.com/storbukas/storbukas/blob/main/personlig-kjennemerke.svg?short_path=61adfa5) for SVG-filen

```svg
<svg width="62.5mm" height="16.4042mm" xmlns="http://www.w3.org/2000/svg" onload='init(evt)'>
  <script>//<![CDATA[
    function GetURLParameter(sParam) {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
          return sParameterName[1];
        }
      }
    }

    function init(evt) {
      var svgDocument = evt.target.ownerDocument;
      var svgRoot = svgDocument.documentElement;
      var kjennemerkeSvg = svgRoot.getElementById("kjennemerkeText");
      var kjennemerkeNode = kjennemerkeSvg.childNodes[0];
      var kjennemerke = GetURLParameter('kjennemerke');

      if (kjennemerke) {
        kjennemerkeNode.nodeValue = kjennemerke.toUpperCase();
      }
    }
    //]]>
  </script>
  <desc>Created by Lars Erik Storbukås</desc>
    <!-- BILSKILT -->
    <g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel">

      <!-- SKILTRAMME -->
      <g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
        <path vector-effect="none" fill-rule="evenodd" d="M12,8 L224,8 C226.209,8 228,9.79086 228,12 L228,50 C228,52.2091 226.209,54 224,54 L12,54 C9.79086,54 8,52.2091 8,50 L8,12 C8,9.79086 9.79086,8 12,8 " />
      </g>

      <!-- BAKGRUNNSFARGE FLAGGBÅND -->
      <g fill="#FLAGG_BAKGRUNNSFARGE" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
        <path vector-effect="none" fill-rule="evenodd" d="M15,10 L29,10 L29,52 L15,52 C12.2386,52 10,49.7614 10,47 L10,15 C10,12.2386 12.2386,10 15,10 " />
      </g>
      
      <!-- LANDSKODE NORGE -->
      <g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(0.0872069,0,0,0.0909609,9.28749,10.0998)">
        <path vector-effect="none" fill-rule="nonzero" d="M176.49,395.13 L145.442,395.13 L92.408,309.369 L92.408,395.13 L62.87,395.13 L62.87,270.18 L101.387,270.18 L146.953,341.759 L146.953,270.18 L176.491,270.18 L176.49,395.13" />
      </g>
    
      <!-- FLAGG - RØDFARGE -->
      <g fill="#ef2b2d" fill-opacity="1" stroke="none" transform="matrix(0.0890639,0,0,0.0890639,10,10.0998)">
        <path vector-effect="none" fill-rule="evenodd" d="M23.645,62.481 L189.565,62.481 L189.565,183.151 L23.645,183.151 L23.645,62.481" />
      </g>
      
      <!-- FLAGG - HVITFARGE -->
      <g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(0.0890639,0,0,0.0890639,10,10.0998)">
        <path vector-effect="none" fill-rule="evenodd" d="M68.895,62.481 L99.062,62.481 L99.062,183.151 L68.895,183.151 L68.895,62.481" />
      </g>
      <g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(0.0890639,0,0,0.0890639,10,10.0998)">
        <path vector-effect="none" fill-rule="evenodd" d="M23.645,107.73 L189.565,107.73 L189.565,137.897 L23.645,137.897 L23.645,107.73" />
      </g>
      
      <!-- FLAGG - BLÅFARGE -->
      <g fill="#002868" fill-opacity="1" stroke="none" transform="matrix(0.0890639,0,0,0.0890639,10,10.0998)">
        <path vector-effect="none" fill-rule="evenodd" d="M76.437,62.481 L91.52,62.481 L91.52,183.151 L76.437,183.151 L76.437,62.481" />
      </g>
      <g fill="#002868" fill-opacity="1" stroke="none" transform="matrix(0.0890639,0,0,0.0890639,10,10.0998)">
        <path vector-effect="none" fill-rule="evenodd" d="M23.645,115.27 L189.565,115.27 L189.565,130.353 L23.645,130.353 L23.645,115.27" />
      </g>
      
      <!-- BAKGRUNNSFARGE SKILT -->
      <g fill="#SKILT_BAKGRUNNSFARGE" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
        <path vector-effect="none" fill-rule="evenodd" d="M29,10 L221,10 C223.761,10 226,12.2386 226,15 L226,47 C226,49.7614 223.761,52 221,52 L29,52 L29,10" />
      </g>

      <!-- TEKST SKILT-->
      <text id="kjennemerkeText" x="127" y="44" fill="#TEKST_FARGE" stroke="#TEKST_FARGE" font-size="36px" letter-spacing="2" text-anchor="middle" font-family="LFT Etica, Lucida Sans Unicode, Lucida Grande, sans-serif">GEEK</text>
  </g>
</svg>
```

Du kan også laste ned SVG-filen direkte, og endre teksten som vises der (da kan du også fjerne `<script>` taggen).
