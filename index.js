const core = require('@actions/core')

try {
    const NameToGreet = core.getInput('who-to-greet');
    console.log(`Hello, ${NameToGreet}!`);
    core.setOutput('time', new Date().toTimeString());
} catch (error) {
    core.setFailed(error.message);
}