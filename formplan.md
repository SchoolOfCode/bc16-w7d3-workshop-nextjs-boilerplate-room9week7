When a user submits the form it should validate that no fields are empty.
If there is an empty form field show an error.
If there is no error then console log the form data 🙂 (don't worry about posting the data anywhere).

Write all of the form in one "ContactForm" component.
Get it looking how it should first (JSX and CSS).
Then try to create state for a field (or be more ambitious and try making state that is an object - manage all fields)
Connect onChange events on the form fields to handlers (or a handler) that updates state.
Make sure the state is tied back to the form fields (values attribute)
Handle the onSubmit of the form (don't forget about preventing the default behaviour).
Once you it's all connected think about validation. You are already capturing the the onSubmit - maybe do something there 🙂.

PLAN

1. Create a link on the home page saying "Book Consultation" (Should not see phone number anymore) ✅
   Users should be able to click the link and go to a "Booking" page ("/booking") ✅

-> Create a new page called Booking in App ✅
-> Create a new file called page.jsx ✅
-> Import link from "next/link" --- Add link in the headers link instead of the phone number ✅

2. When a user reaches the "Booking" page they should see a simple form that matches the designs you've been given.

-> Create a new folder (Form) and file (Form.jsx)
-> Import dependancies (useState)
-> Create form component (create another when needed)
-> Break down the design and work from this
->

3. When a user submits the form it should validate that no fields are empty.
   If there is an empty form field show an error.
   If there is no error then console log the form data 🙂 (don't worry about posting the data anywhere).
