## Hackathon Plan

First up - our error handling is missing some basic rules that really matter. Obviously we need valid phone numbers and valid email addresses but more importantly we need to make sure we only take bookings for postcodes in England, Wales and Scotland. You'll need to use a third party api for that check (https://postcodes.io/). On form submit we should send the postcode the user has submitted to that api and check the country is valid.

The second problem is usability - the form just isn't very usable. To improve usability we need to show when the form is submitting (loading state). If validation passes then we need to hide the form and show a nice success message. If validation fails then we need to show that the form is no longer submitting (cancel loading state) and that errors have occurred (error state). Finally - it would be good if the error state was not just errors/no-errors, we could do with a specific error showing under the field or fields that have failed. 

To do this you will first need to refactor your carefully crafted component state from yesterday into useReducer. This will help manage complexity as you add the new data to your state. 

Objectives:
As a user when I submit the form it should  show me that it is submitting.
As a user I should not be able to submit again while it is submitting.
As a user when I submit the form in a correct way (passes validation) I should see the form replaced with a simple success message.
As a user when I submit the form in an incorrect way I should see that the form is no longer submitting and that there are errors.
As a user who has incorrectly submitted the form I should see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").

