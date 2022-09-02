const { exec } = require('child_process');
const { writeFileSync } = require('fs');
writeFileSync('out/.nojekyll', "")
exec('yarn publish-page-bot', (err, out) => {
    if (err) {
        throw new Error("FAILED TO PUBLISH" + err)
    }
})

