As a user when I submit the form it should show me that it is submitting.
As a user I should not be able to submit again while it is submitting.
As a user when I submit the form in a correct way (passes validation) I should see the form replaced with a simple success message.
As a user when I submit the form in an incorrect way I should see that the form is no longer submitting and that there are errors.
As a user who has incorrectly submitted the form I should see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").

-> Refactor to code to have new state object that combines all of the things into a const variable.
-> Initial state value to pass to useReducer
->
