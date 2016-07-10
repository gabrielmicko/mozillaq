# Sprint for kicking-off this project

Phase 1:
---

* Designing the application
* Building the front-end for the application
* Building the back-end for the application

__Designing the application:__

Front-end will be a single page application which will follow
[mozilla's guidlines](https://www.mozilla.org/en-US/styleguide/).
At the quiz content we need design for the questions, answers and for the result page. We also need a shiny mozilla header.

__Front-page wireframe:__

![](https://raw.githubusercontent.com/gabrielmicko/mozillaq/master/docs/front_page.png)

__Menu:__

The menu will slide-in from left when the menu button has been clicked.
Design will include menu items and a submenu items for picking language.

![](https://raw.githubusercontent.com/gabrielmicko/mozillaq/master/docs/front_page_menu.png)

Deadline: 2016.07.20.

---

Front-end:
* single page application
* uses angular
* doesn't have any back-end dependency except the quizes
* communicates trough json based endpoints
* multilanguage app
* ios/android and desktop support, should be mobile-first

Deadline: 2016.07.30.

--

Back-end:
* node || php || sqlite based backend
* it needs to be easy to manage (read / write / export / import)
* json endpoint for getting the quiz
* json endpoint for saving / returning the result
* multilanguage db format
* table for results / questions / answers

Deadline: 2016.07.25.



Phase 2:
---

* Creating environment for running the application
* Testing the application
* Writing quizes in english / hungarian and other foreign languages we support

Environment

* linux based
* ftp for file managing
* node, mysql, phpmyadmin

Deadline: 2016.08.05.
