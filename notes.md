# How React Used To Be
Function Components
  Can produce JSX to show content to the user
Class Components
  Can produce JSX to show content to the user
  Can use the Lifecycle Method system to run code at specific points in time
  Can use the "state" system to update content on the screen 


# Present
Function Components (Hooks System)
  Can produce JSX to show content to the user
  Can use Hooks to run code at specific points in time
  Can use Hooks to access state system and update content on the screen
Class Components
  Can produce JSX to show content to the user
  Can use the Lifecycle Method system to run code at specific points in time
  Can use the "state" system to update content on the screen 

Which One To Choose?
  Companies with established projects are using Class based components 
  Companies with newer projects may be using Class based components or Function based components

SeasonsApp Challenges
  Need to get the users physical location 
  Need to determine the current month
  Need to change text and styling based on Location + Month



# SeasonsApp
AppComponent
  Determines Location and Month 
  Passes information to SeasonDisplay

SeasonDisplay Component
  Shows different text/icons based on props

# Geolocation API
Allows the user to provide their location to web apps if they so desire.

Timeline
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




constructor(props) 
  This is a JS function that is called before anything else whenever an instance of this class is created. It's a great place to initialize state.
super(props)
  Because React.Component has a constructor of it's own and we still want to use it's built in functionality we have to use super and pass in props.
  super is a reference to the parent constructor function.

this.state = {lat: null}; 
  Whenever we don't know the default value, but know it's a number we put null instead