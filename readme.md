# Table of Contents
* [Overview](#overview)
* [Installation](#installation)
* [Deployment Process](#deployment-process)
* [Versioning](https://github.com/eheckard23/Portfolio_Site/blob/master/Versioning.md)
* [Continuous Integration](https://github.com/eheckard23/Portfolio_Site/blob/master/Versioning.md)

## Overview
This guide will go over the process of installing this application onto your local machine to deploying to a live production server.

## Installation
Begin by forking this repository to make changes.

![image](https://user-images.githubusercontent.com/17580530/28235659-5b816a04-68e0-11e7-8d86-36e8603c1878.png)

Then be sure to clone your repository down to a folder on your local computer. 

![image](https://user-images.githubusercontent.com/17580530/28235676-b620cba8-68e0-11e7-9703-54cb36ee0408.png)

Now that you have the project on your machine, `cd` into your project folder, there is a bash script called **setup.sh** that will install the dependencies as well as run a gulp task to create and checkout a development branch to work in. In your terminal go ahead and run:

`./setup.sh`

This script should start your project on a local server, you may run `npm start` as well.

## Deployment Process
In order to go through the deployment process properly, follow this branching model:

***When you are ready to push up your changes to the repo, follow [this guide](https://github.com/eheckard23/Portfolio_Site/blob/master/Versioning.md) below for creating proper versioning to your work.***

### Develop
All of your work needs to revolve around the **dev** branch. If you are not already checked into **dev** or have not run the project **setup.sh** script, do those steps before moving on. 

### Feature
While working on fixes and minor updates in **development** is best practice, any bigger, planned additions to the project should be expanded to a **feature** branch.

`git branch -b <NAME_OF_YOUR_FEATURE>`

Work on your updates in this branch, once a new feature has been completed and works as planned, [tag](https://github.com/eheckard23/Portfolio_Site/blob/master/Versioning.md) the project version and then `push` those changes to your **feature** branch.

***`Merge` all work back into dev branch when finished with feature***

### Release
When a new feature(s) has been added to the **dev** branch and is working as planned, it is time to add these changes into a **release** branch using whatever the current version of the project is on. A gulp task for creating this branch is already setup, in your terminal run:

`gulp newRelease`

This will create and checkout the new release branch with the current version.

The main focus of the release branch is to stage the new version of the project on a server that looks as identical to a live server as possible. For this project, you will create a stage/production pipeline through [Heroku](https://www.heroku.com/
)

#### Log in to your Heroku account and begin by creating a new app

![image](https://user-images.githubusercontent.com/17580530/28242122-8ef3938a-6971-11e7-9528-1e337003bffb.png)

This will be your staging server so name your app following this convention:

`YOUR-APP-NAME-stage`

#### Go back to your Personal Apps and create a second app
This will be your production server, name it following:

`YOUR-APP-NAME-prod`

#### Create a pipeline
![image](https://user-images.githubusercontent.com/17580530/28242149-874c73bc-6972-11e7-819b-0f6632c1ab1d.png)

You can name the pipeline however you like, if you followed the naming convention for the stage/production apps, you can name the pipeline after the app itself:

`YOUR-APP-NAME`

Make sure you add the 2 different applications correctly in the pipeline dashboard.

![image](https://user-images.githubusercontent.com/17580530/28242185-3d68b9ee-6973-11e7-9f38-c1b7cb22eca6.png)

#### Connect to your GitHub repository
Connect your staging application to your GitHub account. You should be able to search and add the specific repository as well.

![image](https://user-images.githubusercontent.com/17580530/28242204-81421cdc-6973-11e7-9058-c873637e1d40.png)

#### Auto Deployment
Once your repository is added, enable auto deployment **from your release branch**. If you have tests running through Codeship ([follow this guide](https://github.com/eheckard23/Portfolio_Site/blob/master/Versioning.md)), you should check the box asking to wait for CI to pass before it deploys to the server.

> If you don't see your release branch listed in the options, you may need to `push` that branch up to the repository.

![image](https://user-images.githubusercontent.com/17580530/28249627-4731d28a-6a27-11e7-9484-97dd9a121159.png)

#### Manual Deploy
Initially, you can choose to run a manual deploy to avoid having to re-`push` your release branch up.

![image](https://user-images.githubusercontent.com/17580530/28249673-492c0226-6a28-11e7-8d01-00669282028f.png)

If it passes Codeship, you should be able to see the build process on Heroku. If successful, you can open the app up and see it running live on a staging server. 


### Production
If all the necessary changes or fixes to the **release** branch are made and the project is ready for production, Heroku allows you to very easily promote your staging app to the production server.

![image](https://user-images.githubusercontent.com/17580530/28249712-145291d6-6a29-11e7-8ce7-09a340fdb84e.png)

Simply click the **Promote to prodcution** button and Heroku will deploy your staging application to a live, production server. You should now have 2 separate links to see the staging application and production application running in the browser.





