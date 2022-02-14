# GROWTH CODING CHALLENGE @ Fabulous

## Objective

Your assignment is to complete the following tasks using java script code.

## Task 1

### Description

Create a script which based on user data, and experiment config transforms the default config and returns the transformed object as described in **Requirements**.
The transform script should not use any additional modules, and should stay pure `java script`, also do not use the built in methods like `reverse` or `map`.

### Input

You will find all necesarry input in the `input` folder:

- user data object in `user.json`,
- experiment config code in `experiment_data.js`,
- default config in `default_config.json`,
- details for bucket `A` users in `bucket_a_values.json`.

### Output

Modify the `getConfig` method in `config_transform.js` file, so that the returned value fulfills the **Requirements**.  
Feel free to modify the code as you need, add new files or methods to make it readable. Only thing you need to keep is the last `console.log` line.

### Requirements

1. For premim users in control group return the deafult config value.
1. For premium users in bucket `A` swap the description of each step to the ones provided in `bucket_a_values.json`, e.g. first step should look like this:

    ```json
        {
            "name": "first",
            "description": "a first alternative step",
            "value": 1
        }
    ```

1. For premium users in bucket `B` reverse the order of the steps from the default config.
1. For non premium users return an config with empty list of steps:

## Task 2

### Description

It should be possible to somehow test all possible scenarios from **Task 1** to verify that the code works in all cases.  
You can modify this project, use npm, and some third party libraries for purpose of testing the code.

### Requirements

Prepare the tests for all possible scenarios, you will have a chance to further describe the testing approach when submiting the assignment on *CodeSubmit*.

---

## Evaluation Criteria

- Correctness: does the functionality act in sensible, thought-out ways?
- Compliance: have the specifications been met?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

## CodeSubmit

- Please organize, design, test and document your code as if it were going into production.
- Push your changes to the master branch.
- Please do one or more commits per tasks and provide a commit description as if it was a pull request.
- After you have pushed your code, you may submit the assignment on the assignment page.

---

All the best and happy coding,

The Fabulous Team

## Notes from Lenin
- After cloning this repo run `npm install`
- To execute the tests run `npm run test`
