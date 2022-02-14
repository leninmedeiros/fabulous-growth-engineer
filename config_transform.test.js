const expData = require('./input/experiment_data');

const defaultConfig = require("./input/default_config.json")
const configTransform = require("./config_transform");

jest.mock("./input/experiment_data")

describe('getConfig', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    test('Non-premium user must return empty steps list', () => {
        jest.spyOn(expData, 'getUser').mockImplementation(() => ({'isPremium' : false}))

        let result = configTransform.getConfig()

        expect(result).toEqual({steps: []})
    })
    
    test('Premium user from bucket B must return reverse steps list', () => {
        jest.spyOn(expData, 'getBucket').mockImplementation(() => 'B')
        jest.spyOn(expData, 'getUser').mockImplementation(() => ({'isPremium' : true}))

        let result = configTransform.getConfig()
        let auxList = [...defaultConfig.steps].reverse()

        expect(result).toEqual({steps: auxList})
    })

    test('Premium user from bucket A must return steps list accordingly', () => {
        jest.spyOn(expData, 'getBucket').mockImplementation(() => 'A')
        jest.spyOn(expData, 'getUser').mockImplementation(() => ({'isPremium' : true}))

        let bucketAConfig = {
            "steps": [
                {
                    "name": "first",
                    "description": "a first alternative step",
                    "value": 1
                },
                {
                    "name": "second",
                    "description": "a second alternative step",
                    "value": 2
                },
                {
                    "name": "third",
                    "description": "a third alternative step",
                    "value": 3
                },
                {
                    "name": "fourth",
                    "description": "a fourth step",
                    "value": 4
                }
            ]
        }
        
        let result = configTransform.getConfig()

        expect(result).toEqual(bucketAConfig) 
    })

    test('Premium user from control bucket must return default steps list', () => {
        jest.spyOn(expData, 'getBucket').mockImplementation(() => 'control')
        jest.spyOn(expData, 'getUser').mockImplementation(() => ({'isPremium' : true}))

        let result = configTransform.getConfig()

        expect(result).toEqual(defaultConfig)
    })
})