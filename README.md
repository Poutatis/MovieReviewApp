# Movie Review App

This is a react native application which lets you review and rate movies on Android or IOS. The application uses [TMdb API](https://developer.themoviedb.org/docs/getting-started) to fetch movie details. For authentication and storage I have used [Google Firebase](https://firebase.google.com/) authentication and realtime database.


## Application Functions

- Application has 5 "screens".
  - First page is used for authentication with email/password login and a "Need an account? Sign Up" button which changes sign in button to sign up which lets you create an account.
- After logging in you are greeted by a welcome page with 2 buttons.
- Movie Search which takes you to a page with a search bar where you can input a movie name to find movies.
  - When you have searhced for a movie and click on it, it takes you to a page with details about the movie. There is also a text input where you can type a review and a rating field where u can rate the movie 1-10, after reviewing and rating the movie you can click the "Add Review" button which saves your review and puts it in a list which can be found on the Review List page.
- The other button the the welcome screen takes you to your Review List where you can find movies that you have reviewed, the poster, title, release date and your review + rating.

## Limitations

If I had more time I would have liked to have added a feature which lets you see other peoples review lists.

## Program start

To start the program you download or clone the repository.
1. In the root map open the terminal and type `npm install`.
2. `npx expo start` to start the application.
3. Scan the QR code with your phone to be able to use the application.
