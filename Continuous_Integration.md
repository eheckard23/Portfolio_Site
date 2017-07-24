## Continuous Integration
This part of the deployment model is not required but is recommended for ensuring that your code passes any necessary tests before pushing to further stages. If you choose to add this part, begin by visiting and signing up with [Codeship](https://codeship.com/)

A service like Codeship allows you to add and listen for pushes to an existing repository. When you push any commits, Codeship will download a copy of your repo and run any commands you provide, including tests.
#### Sign in using your GitHub account.
![image](https://user-images.githubusercontent.com/17580530/28239348-739a90e0-6938-11e7-8564-e0d456d36506.png)
#### Create a new project using GitHub
![image](https://user-images.githubusercontent.com/17580530/28239363-b7dde784-6938-11e7-8ee9-f9b8a2ccb5fd.png)
#### Copy and paste your repository's clone URL and hit Connect
![image](https://user-images.githubusercontent.com/17580530/28239368-c9d0dd2a-6938-11e7-8a31-110ec4360485.png)
#### Select the Basic plan and you should now be able to add your commands
I won't go into detail how extensive these commands can be, but in my simple case of making sure that my Mocha tests are passing, my commands would look like this...

##### Setup Commands
These commands are run before Codeship will run any designated tests.

***Be sure to substitute whichever version of Node your project is currently using where it says 6.9.4. You can check for the version by running `node -v` in your project folder.***

![image](https://user-images.githubusercontent.com/17580530/28239463-c5344aca-693a-11e7-987a-8054155f2c2c.png)
##### Test Commands
These commands are where you can specify which tests you want Codeship to actually run. In my case I want **all** mocha tests in my *test* folder to run:
![image](https://user-images.githubusercontent.com/17580530/28239514-e35a9044-693b-11e7-91fa-17619dfd35c9.png)

Once you're done with that, you should be able to start pushing to your repository and seeing the tests run in Codeship at the same time.
