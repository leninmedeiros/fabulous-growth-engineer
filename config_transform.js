// This stores the info regarding the user being premium or non-premium.
const user = require('./input/user.json')
// This retrieves the default config.
const defaultConfig = require('./input/default_config.json')
// This retrieves the config for group A.
const bucketAValues = require('./input/bucket_a_values.json')

const {getBucket,getUser} = require('./input/experiment_data')

// This retrieves the default steps
const defaultSteps = defaultConfig['steps']
// This retrieves the number of steps (equal to the length of the default steps array).
const numberOfSteps = defaultSteps.length
// This retrieves the empty steps setup.
const emptySteps = {"steps": []}

// This function applies the rules for steps in group A for premium users and returns an array of steps accordingly.
function formatStepsAccordingToA(steps) {
    let arrayToBeReturned = []

    for (let i = 0; i < steps.length; i++) {
        let element = steps[i]
        // This is just swaping the respective description of the default step to the one in bucket A accordingly.
        // For this experiment setup I will be considering that all the buckets have the same number of steps,
        // as I believe having different number of steps among groups might affect experiment results.
        if (bucketAValues[element["name"]]) {
            element["description"] = bucketAValues[element["name"]]
        }
        arrayToBeReturned.push(element)
    }

    return {steps : arrayToBeReturned}
}

// This function applies the rules for steps in group B for premium users and returns an array of steps accordingly.
function reverseSteps(steps) {
    // This instantiates the array to be returned having the same size of the default steps array.
    let dataToBeReturned = Array(numberOfSteps)
    let i = numberOfSteps - 1
    
    // This adds the default steps to the array to be returned following the reverse order.
    steps.forEach(element => {
        dataToBeReturned[i] = element
        i -= 1
    });
     
    return {steps : dataToBeReturned}
 }

 function getConfig() {
    // If the user is not premium, this returns an empty list of steps.
    if (!getUser()?.isPremium) {
        return emptySteps
    // If the user is premium, it will perform the following.
    } else {
        // This checks the bucket returned by getBucket() and acts accordingly based on the value returned (A, B or default)
        switch(getBucket()) {
            case 'A':
                return formatStepsAccordingToA(defaultSteps)
            case 'B':
                return reverseSteps(defaultSteps)
            default:
                return {steps: defaultSteps}
                
        }
    }
}

console.log(getConfig())

module.exports = {
    getConfig: getConfig
};