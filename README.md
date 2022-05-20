# saleswhale-ui

## Set-up
1. Git clone repository `https://github.com/hsualexia/saleswhale-ui.git`
2. In local terminal, navigate from workspace folder to cloned repo `cd saleswhale-ui`
3. In terminal, run `npm install`
4. Once installation is complete, run `npm run start`
5. Open webpage in any browser (tested in Edge, Mozilla and Chrome) `http://localhost:8080/#/teams`

## Functionalities & How to Test (after set-up is complete)
### Tab Filters on Teams page
1. Once you are in Teams page, it enters on `All Teams` tab
2. Click on either `Favorites` or `Archived`, cards and card counts will be filtered accordingly

### Implemented Routes & Functional Sidebar
1. Enter app from home url `http://localhost:8080`
2. Click on any icons on the sidebar - see URL change
3. See top bar to see title change

### Top Bar Functions
1. Click on arrow down next to Avatar to see fake sign out link
2. Notification badge is dynamic, based on notification_count
3. Popover for notification implemented on hover
4. Greeting user is dynamic, based on person.name
