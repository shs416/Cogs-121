# Final Deliverables

## Group Member: 
Jen-Jun Yen: Ideation, Protoype, Adding functions into the News page,
			 Modify the layout of the News page, Write-ups
			 
Shiva Sharma: Setting up backend with Firebase, implementing dynamic population of vaccine records and timeline with Firebase data, making json file using CDC data, UI design, milestone writeups.

Dylan Hua: Storyboard, News API, Demo Video


## Source Code File:
- index.html: This file implements functionality for the My Vaccines page of the web app.
The file sets up two tables on the webpage, with Pending and Completed Vaccines, and 
these tables are updated in real time as a user marks a vaccine as completed or still 
pending. To populate and update tables, calls to the Firebase database are used. 
Additionally, the user can view a list of all vaccines as well as search the database
for some extra information such as diseases prevented by the vaccine and the symptoms.
The file sets up a timeline on the webpage for the user to see what age ranges are 
appropriate to get each vaccine administered.

- news.html: This file implements the functionality for searching up news articles.
The page calls the NEWS API. The page of news articles is initally populated with 
articles related to the keyword "vaccine." The user can then make a search and it 
will be appended with the keyword "vaccine." The results are returned in the form 
of cards with article title, a few lines of the article, and an image.

- server.js: Starts up node server using express. The web server listens for interactions on static files, which are the index.html and news.html pages.

- database.json: Contains information about each vaccine from the CDC website, including symptoms, disease information, and age ranges in a json format. The file is imported into Firebase.

## Slide

https://docs.google.com/presentation/d/11qukbaqWn4rEAMHUP0CHcmtws3HwaBJtjvIv0_sJr50/edit?fbclid=IwAR35DdTygZRpt2OI8V8CWZ41__ChjtIPy8NMXDqV8E3sXBK8aA0AG46v-hg#slide=id.p

## Demo 

https://www.youtube.com/watch?v=8MwCR3LavAk&fbclid=IwAR0rmMzZvtofhJaOWBYI-UrWKdpop3m4OXRmS7oo8S89WgLGHVfSEs1o-EU


