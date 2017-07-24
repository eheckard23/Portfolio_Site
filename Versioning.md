## Versioning
At any point in your work you are going to be making changes big or small to the project. It is important to use the following commands whenever you've made these changes, which are categorized in 3 ways:

> Included in the project is a **gulpfile.js** that has a `bump` task for updating the project version, as well as running a `git tag` with that specific version. After you have pushed your changes to the repo, use the commands below that correspond to the type of version you are working on.

### Major
When your work functions as planned, but has enough changes to the point that an earlier version does not work the same, this is considered a major release.

`gulp bump --v=0`

### Minor
When your work functions as planned, but has only improved on smaller areas of the code that do not alter the overall structure of the project, this is considered to be a minor release. An earlier version should still work along side this the same way, with some smaller improvements.

`gulp bump --v=1`

### Patch
When your work has an unexpected bug that needs to be updated and fixed quickly, this is considered to be a patch release.

`gulp bump --v=2`