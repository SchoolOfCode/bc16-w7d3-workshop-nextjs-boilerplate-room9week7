## Objective

A new component on the home page that allows a user to select (click) their country and see the latest review (fetch data).

## Designs:

Here is a link to a Google Drive folder with all the design assets.

https://drive.google.com/drive/folders/1Eph6VPm61o-lQQXxExr3E0T6o4Pv2Lsi?usp=sharing

## Plan

- Watch the video again! https://youtu.be/0ZJgIjIuY7U ✅
- Make the new "Reviews" component ✅
- h1 - Trusted - MVP3
- h2 - Description - MVP3
- make 3 buttons - MVP3
- Make a CSS file for that component and style the above - MVP3

# States

- Create two states to store - which country has been selected and something to store review data that has been fetched, (default is none) ✅
- The first bit of state, something to hold which country has been selected. That could be a simple string that is the name of the country or null if none selected. ✅
- Connect the "onClick" for you country buttons to a click handler that will change the selected country state. ✅
- When you click a country button the state should change to reflect that country. ✅
- Add some conditional rendering to each button so that a button would get a "selected-country" class when it is the active country. This would mean you can style that button to be orange (active). - MVP3

# Second State

- Need something to hold the review data we are going to fetch when someone clicks a button. ✅
- Make a bit of state that would hold one review (single response) - so when you click between countries that data is overwritten each time. ✅
- Convert the JSON file returned from the API to standard text ✅

# User Flow

- Someone clicks a button which changes the state of "selectedCountry". 
- Having "selectedCountry" change (useEffect dependencies) could trigger a useEffect hook to run. 
- That useEffect could run a fetch request.
- Pass the "selectedCountry" as part of the request so you make a request that asks for data specific to that country.
- Once the data returns from fetch - store it in the second bit of state that is meant to hold reviews.
- The component will re-render and show the right review.

# Pitfalls

Warning / Tip: be careful using fetch in useEffect if you use it with async/await. It's easy to trip up.
The pre-learning video from yesterday on useEffect shows how to use fetch with the old fetch syntax (.then). It's a bit easier to get working.

The pre-learning video from yesterday is a very close match to what you're being asked to make, re-watch it if needed 👀😉.

## Fireplace Palace API

Usage:
To fetch reviews, make a GET request to /reviews with a query parameter specifying the country. For example:
https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland
Valid countries are England, Scotland, and Wales. The country parameter is case-insensitive.
Response Format:
The response will be a JSON object containing the review text, author, location, and businessName. Example:
{
"text": "We couldn't be happier with our new fireplace - Mike and Mandy came recommended but we were still blown away by the quality of service. 😊 🏆",
"author": "Amy Mcdonald",
"location": "Inverness",
"businessName": "Fireplace Palace"
}
