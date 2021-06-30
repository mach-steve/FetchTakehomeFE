# Steven Lawless - FE Takehome Test

This is a single-purpose, single-page app that retrieves information from the web as JSON and then displays it, filtering out any blank or Null-value name values and sorting by 'listID' into lists of entries. Each 'List ID' list is then sorted by name.

## Instructions

To get and display records, press the green 'Get Records' button at the top of the page.

## Notes
For the task, I decided to use plain/vanilla HTML, JavaScript and CSS because it seemed to be more than capable enough, without going overboard with something like React and a bunch of libraries for a one-view, one-purpose app. 

I was torn between making one long list, with everything sorted by the criteria, or multiple lists. I decided to go with multiple lists, since the data I was working with had a 'listId' field, which I figured would correspond to the list it belongs to.

\- Steve