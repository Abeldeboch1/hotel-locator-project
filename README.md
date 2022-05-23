# `Hotel Locator React Project`

This app build up with existing knowledge of the React basics (components, JSX, props, event handling, using forms, making API calls, basic hooks) and also utilize newer skills like handling styles using styled-components and conditionally rendering components using react-router-dom.

# `Project Requirements`

This project app used styled-components for styling rather than scss/regular css.
The app used react-router-dom for conditional rendering of your different "page" elements.
The app used a React-specific mapping package and load search results onto the map as pushpins. It has a search bar that allows a user to specify a new location to search in. After user search, the map should recenter and show results in the new location.
Pull data from your external API using fetch. The app runs a search for results in the default location upon render, displays search results, and displays pushpins for those results on the map.
It has a separate location details "page" that the user can navigate to by clicking on a search result (and maybe even by clicking on a map pushpin). This location details component should NOT receive its data via props and should instead use useEffect() to pull location details from the API after initial render.
This project app Hide any API keys using a .env file. Remember to add the .env file to your .gitignore so that it is not uploaded to GitHub!
Your app should have multiple components. Use props to pass data from parent components into child components to allow customization of the child components.

# `Project Setup / Build Instructions`

Install required packages
Open the Package Manager Console
Type and run nuget restore.
In the project directory, you can run:

# `Running the Project`

Click Run Project button or hit F5.

# ` Development Process`

Increment Assembly Version
When starting work on a new release version, increment the minor version
Right-click on the main project and go to Properties > Application > Assembly Information.

# `Deployment Process`

Increment Assembly Information
Right-click on the main project and go to Properties > Application > Assembly Information
Increment File version
Increment
View Properties on the MagtekCardReaderMiddleware project
Increment the Version field (ideally it should match the File version from above
Click YES on the popup asking to change the ProductCode
Build the release version
Set build mode to Release
Clean and Rebuild the main project
Rebuild the Setup Project
Create deployment zip file
Create a new folder in the PublishedInstallers folder. Match the existing naming convention and use the version number as found on the config page of the application
Copy the Release installer files into this new folder. These are located in MagtekCardReaderMiddlewareSetup/Release
Create a zip file from the folder
Update the release notes file
Check in and merge project to Github
Check in the project and create a PR into Development
After PR is merged, create a PR into Main
Create a Release on Github
After PR is merged, go to Releases on Github and click on Create New Release
For the tag version, enter the full version Number. For example: v1.3.6543.18931
The target for the release should be the Main branch (default option)
For the release title, enter: Magtek Card Reader Middleware Release vX.X where x.x is the first two digits of the release number
Copy the release notes into the release description textbox
Attach the installer zip file in the upload area
Click Publish Release
## Citation
- Please add a code comment referencing back to this repository when you use this code.

# `Link to Wiki for additional info`

This is where additional info will go, such as user documentation, server setup, installation instructions, troubleshooting steps, gotchas, etc...
