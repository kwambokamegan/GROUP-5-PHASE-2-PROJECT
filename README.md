# SAFIRI 

## Brief Description

Safiri is a travel app designed to help users explore various destinations, submit reviews, and view a slideshow of attractive travel locations.

## Features

* Home : Displays a welcome message and a slideshow of travel destinations.

* Discover Page: Shows a list of popular travel places with their details.

* About Us Page: Provides information about the application and its team.

* Review Page: Allows users to submit reviews and view existing reviews from other tourists.

* Contact Us Page: Provides contact information and location details.

## Technologies used

* React
* React Router
* CSS
* React Slick for slideshow

## Setting up

1. Cloning the repository

Run git clone `https://github.com/kwambokamegan/GROUP-5-PHASE-2-PROJECT`

2. Installing Dependancies

Run npm install

3. Starting the application in the server 

Run npm start

## Components

1. App.js

This is the main component that sets up the routing for the application.

* Routes:

/ - Home
/discover - Discover
/about - About Us
/review - Review
/contactus - Contact Us


2. Home.js
 Displays the home page with a welcome message and a slideshow of travel destinations.

* Dependencies: NavBar, Slideshow

3.  Slideshow.js
A carousel component that shows various travel destination images and text.

Dependency: react-slick

4. Discover.js
Lists popular travel places with their images, descriptions, activities, and transport options.

5. Footer.js
 Displays the footer with contact information, including email, phone number, and location.

* Dependency: react-icons

6. NavBar.js
 Navigation bar with links to different pages of the app. Includes a scroll effect for the navbar.


7. Review.js
 Allows users to submit reviews and view existing reviews. Reviews include a name, place visited, review text, image, rating, and source.

8. ContactUs.js
 Displays contact information for the application.

## Data structure in db.json

1. Places
ID: Unique identifier for the place
Title: Name of the place
Image: URL to the place’s image
Description: Brief description of the place
Activities: Popular activities at the place
Transport Options: How to get to the place

2. Reviews
ID: Unique identifier for the review
Name: Name of the reviewer
Image: URL to the reviewer's image
Location: Location where the review was made
Review: Review text

## Links

### Vercel link 

[Vercel Link](https://group-5-phase-2-project.vercel.app/review)

### Git hub link

[Git hub link ] (`https://github.com/kwambokamegan/GROUP-5-PHASE-2-PROJECT`)

## Author 
Megan Kwamboka

## Date

16th August 2024

## Conclusion 
The project was worked on by Megan Kwamboka , Mark Brian , Kevin Kamau and Aron Kipkorir.




