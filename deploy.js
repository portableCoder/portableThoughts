const { writeFileSync } = require('fs');
const ghpages = require('gh-pages');
writeFileSync('out/.nojekyll', "")
ghpages.publish('out', function (err) {
    throw new Error("FAILED TO PUBLISH: " + err)
});