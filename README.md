# invoke-icf
A short sample for invoking an action on the IBM Cloud Functions platform.
Although there are plenty of samples on the web showing you how to invoke
a microservice via the command line, invoking your microservices with
an application isn't usually covered. This code fills that gap.

## The code
The code consists of two files: `service.js`, the service previously
deployed to ICF, and `service-client.js`, the point of this mailbag.
To keep things simple, we invoke the service via the npm `request` module. The `request` module
is one of the most popular npm modules, typically getting 25-30 million downloads a month.
It's simple; easy to use; and, if you're a node developer, something you probably know already.

## The developerWorks sandbox
The service was deployed to ICF via the
[developerWorks sandbox](https://developer.ibm.com/sandbox/index.html).
The sandbox
lets you run, modify, and re-run code without leaving the browser. Once
you're happy with your modified code, you can click the **Deploy** button to
deploy the code to ICF automatically. Once the code is deployed, anyone anywhere in the world
can use the URL of your deployed code to invoke your microservice. 

## For more information
There are two developerWorks tutorials that cover this topic in far more
detail:

* [Invoking actions on the IBM Cloud Functions platform](https://www.ibm.com/developerworks/library/wa-invoke-openwhisk-action/index.html)
* [Write runnable and deployable code for the IBM Cloud Functions platform](https://www.ibm.com/developerworks/library/wa-write-deployable-code-for-openwhisk/index.html)

The first article shows you how to invoke an ICF action via `curl`, a
browser testing tool like Poster, from a node application, and from a Java
application.

The second article explains how to write applications that can be deployed
to ICF. It has embedded sandboxes inside the article, so you can write and
deploy code without leaving the article.
