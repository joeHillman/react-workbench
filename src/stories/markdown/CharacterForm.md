# Projects -  Star Wars Character Selection Form

Hello team, I've captured the project specs below and made some notes.
I originally did this in vanilla JS and will have the files alongside this project in the repo. I'll link to those here if you're interested.

I did this first in vanilla JS as I have additional React work here  and after a conversation with Luke, did it in React as well.

I had an issue posting the data in most environments but was able to fire it in the console manually. Captured below is what I'd use but have mocked up the success/failure states so the plumbing is in place.

Fun project, thanks guys!

------------------Specs -------------------

Create a form that allows users to select their favorite Star Wars character, loaded from https://swapi.co/api/people/

[x] There must be at least 50 characters to select from

[x] When a character is selected, the background color of the form should change to correspond with the character’s eye color

Note: Went with color keywords for this with a default fallback for words like blue-gray, hazel. If a more manual approach or a custom color route had been taken, a color object would be used here.
Not knowing what we'd get back in advance, would not make for accurate colors.

`const colors = {"blue-gray": "", hazel: ""}`
`colors["blue-gray"]`

[x] If the character does not have an eye color, the application must fallback gracefully

[x] Form should be generally aesthetically pleasing and use at least 1 css transition

Note: Transition can be found on the background color.

[ ] Form must post asynchronously to https://jsonplaceholder.typicode.com/ and display a success message if successful and an error message if not successful

Note: I had issues posting here via code sandboxes and served locally from python simple server and a basic file protocol, though I was able to manually run it in the console with success, though I've mocked the success and failure states in the application.

Below is how I would have set it up and I would've moved the classes to react state and render the markup conditionally with initial success and failure states of null.

`{this.state.successful ? <successMessage> : null}`

`{this.state.failure ? <failureMessage> : null}`

`onSubmit = (selectedCharacter) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'My Selected Character',
        body: ${this.state.selectedCharacter},
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((json) => {console.log(json); document.body.classList.add("submission-successful"); document.body.classList.remove("submission-failed")})
    .catch((response) => {document.body.classList.add("submission-failed"); document.body.classList.remove("submission-successful")})
  }`

[React Character Form](https://github.com/joeHillman/react-workbench/blob/master/src/projects/StarWarsCharacter/CharacterForm.js)

[Vanilla JS Character Form](https://github.com/joeHillman/react-workbench/blob/master/src/projects/StarWarsCharacter/vanillaJS)
