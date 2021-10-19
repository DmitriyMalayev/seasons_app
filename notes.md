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


