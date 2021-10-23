# How React Used To Be

`Function Components`
Can produce JSX to show content to the user
`Class Components`
Can produce JSX to show content to the user
Can use the Lifecycle Method system to run code at specific points in time
Can use the "state" system to update content on the screen

# Present

`Function Components (Hooks System)`
Can produce JSX to show content to the user
Can use Hooks to run code at specific points in time
Can use Hooks to access state system and update content on the screen
`Class Components`
Can produce JSX to show content to the user
Can use the Lifecycle Method system to run code at specific points in time
Can use the "state" system to update content on the screen
`Which One To Choose?`
Companies with established projects are using Class based components
Companies with newer projects may be using Class based components or Function based components
`SeasonsApp Challenges`
Need to get the users physical location
Need to determine the current month
Need to change text and styling based on Location + Month

# SeasonsApp
`AppComponent`
Determines Location and Month
Passes information to SeasonDisplay

`SeasonDisplay Component`
Shows different text/icons based on props

# Geolocation API
Allows the user to provide their location to web apps if they so desire.

`Timeline`
JavaScript file is loaded by the browser
AppComponent gets created
AppComponet gets invoked
Geolocation Service gets called and takes time to process
App returns JSX, gets rendered to page as HTML
...
We get result of Geolocation
Tell the component to rerender itself with this new information

# Rules of Class Based Components
Must be a JavaScript class
Must extend (subclass) React.Component
Must define a "render" method that returns some amount of JSX

# Rules of State
Only usable with Class Based Components or with Function based components with Hooks
You will confuse props with state
"State" is a JavaScript object that contains data that's relevant to a single component
Updating "State" on a component causes the component to almost instantly rerender
State must be initialized when a component is created
State can ONLY be updated using the function setState()

`constructor(props)`
This is a JS function that is called before anything else whenever an instance of this class is created. It's a great place to initialize state.
super(props)
Because React.Component has a constructor of it's own and we still want to use it's built in functionality we have to use super and pass in props.
super is a reference to the parent constructor function.
If we call the constructor function we have to call super as well.

`this.state = {lat: null};`
Whenever we don't know the default value, but know it's a number we put null instead

`New Timeline`
JavaScript file is loaded by the browser
Instance of App Component is created
App components "constructor" function gets called
State object is created and assigned to the "this.state" property
We call Geolocation Service
React calls the components render method

AppComponet gets invoked
Geolocation Service gets called and takes time to process
App returns JSX, gets rendered to page as HTML
...
We get result of Geolocation
We update our state object with a call to this.setState()
React sees that we updated the state of a component
React calls our "render" method a second time.
The render method returns some updated JSX
React takes that JSX and updates the content on the screen

`The AppComponent has been rendered two times`
first bootup
after update of state

# Component Lifecycle Methods

constructor
render
content visible on the screen
componentDidMount
sit and wait for updates
componentDidUpdate
sit and wait until this component is no longer shown
componentWillUnmount

`constructor`
Called before anything else whenever an instance of this class is created
It's a great place to initialize state and to do one time set up

`render`
Must be called if constructor has been called
Avoid doing anything besides returning JSX

`componentDidMount`
Called once right after render
Good place to do data loading
Only called one time.

`componentDidUpdate`
Called automatically anytime the component updates itself
Before this is called render is called automatically as well
Good place to do more data loading when state / props change

`componentWillUnmount`
Called when we no longer want to show the component
Good place to do cleanup especially for non react stuff.

```js
// EQUIVALENT BECAUSE OF BABEL

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
    //Only time for direct assignment
  }


class App extends React.Component {
  state = { lat: null, errorMessage: "" };


```


`display: flex`
A flex container expands items to fill available free space or shrinks them to prevent overflow. Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based)

`vh & vw`
vh stands for viewport height and vw is for viewport width. Hence, setting an element to a width value of 50vw means that the element will have a width that's 50% of the viewport size, and this stays true when the viewport is resized.



`Finding an element that has a class name of season-display and the className of winter and we select the icon`

```css
.season-display.winter i{
  color: blue;
}

.season-display.summer i{
  color: red;
}
```

`Benefits of Class Components`
  Easier code organization
  Can use "state" which is another React system
    Easier to handle user input
  Understands lifecycle events
  Easier to do things when the app first starts

`Rules of Class Based Components`
  Must be a JavaScript Class
  Must extend (subclass) React.Component
  Must define a "render" method that returns some JSX