# Movie Review App

Detta är en react native applikation som använder sig av [TMdb API](https://developer.themoviedb.org/docs/getting-started) för att fetcha filmer och detaljer om dem. För authentikation och datalagring används [Google Firebase](https://firebase.google.com/) authentication och realtime database.

## Projekt struktur

## Applikationens funktionalitet

- Applikationen består av 5 sidor.
- En Authentikations sida med email/password login och en "Need an account? Sign Up" knapp där man kan skapa konto.
- Efter inlogging kommer man till en välkomst sida med 2 knappar.
- Movie Search tar dig till en sida med ett sökfält där du kan leta upp filmer.
  - När du klickar på en film så kommer du till en sida med detaljer om filmen. Det finns ett textfält där du kan skriva en review av filmen och ett annat textfält där du kan fylla i hur bra du tyckte filmen var (1-10) samt en "Add Review" knapp som sparar din review till en lista.
- Välkomst sidans andra knapp tar dig till din Review List där du ser filmer du har reviewat, poster, film title, release date, review och rating.

## Program start

För att starta programmet först klona repositoriet.

1. I root mappen öppan terminalen och kör `npm install`.
2. Kör `npx expo start` för att starta applikationen.
3. Skanna QR koden men din telefon för att kunna använda applikationen.
