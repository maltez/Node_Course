# Home work 1
Create private member in class using Symbol primitive.
Implement iterator protocol for returns polyndrome strings.

# Homework 2
Create private member in class using WeakMap.
Create generator. Generator has to returns sequence of fibonacci numbers from first to n.
Create generator generator has to returns factorial sequence from 0 to n;
Create promise chain. First should run in parallel two functions. Their results should aggregate (concatenate in one string) and you have to run to functions with these aggregate results one by one. As result You have to returns separate results of last two functions.

# Homework 3
Create singletone based on generator. Generator returns random n niumbers. Numbers must be integers. 
Create proxy object that will be validate User class input. Age - is integer, in range 0 - 100. Name is the string. Min length 3 max length 50. Proxy should add full name field that would be concatination of First nad last name. 

# Homework 4
Create class car. And create logger that will be log all movings, coordinates and fuel level of this car
Create you own event emitter. It should predefine listeners for 3 events. Listen, start and stop. Shold have ability extend max listeners count via setter and remove listener by name.

# Homework 5
Create your own webpack with following abilities:
    - Minify js, css, html files
    - Create single bundle from js(each file is module) and css file.
    - Create deploing package from folder(bundle and minify css, js then create gzip archive and in the bottom each html file copiright sign 'Jocasino.com');
    - Read all settings with file mask from config.
# Homework 6
Create your own linter.
- if in the end of line you will miss '.' it has to generate error.
If in the text present word f**ck it has to generate warning. 

# Homework 7
Create socket chat that using the room. 
Client 1 can push the message to client 2 and vice versa.
Client 3 can push the message to client 4 and vice versa.
All clients have all message history.
Put room message history in file before closing the chat.

# Homework 8
Based on http server create your own 'express' with:
    - Routing
    - Body parser (body after parcew add to request object as field)
    - Send json

# Homework 9
Create your own pm2.
 - Run processes from the file (config settings)
 - Create instances of the running file (config settings)
 - Set max restarts attempt (config)
 - Add watcher for changes in the files.

 # Final task
 - Create web server
 - It contains Connection to MySQL server
 - It contains users permission sets in MySQL DB
 - Users info allows on the REST API
 - In the MongoDB contains info about users pets
 - Server can work in as proxy server when user go to /google rote
 - Via google route server should proxy all trafic on google
 - Statistic for google requests contains on mongo db
 - Server contains statistic about requests in /stat route
 - User can see request count in the server render page