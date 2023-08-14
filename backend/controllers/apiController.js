const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

// connected the relative path of metrics.json file to the server
const metricsFile = path.join(__dirname, '../data/metrics.json');
// connected the relative path of predictions.json file to the server
const predictionsFile = path.join(__dirname, '../data/predictions.json');

// get the data of dashboard page
module.exports.metrics = (req,res) => {
    try {
        // try to read thr metricsData from metrics.json file and return it in the json format to the browser
        const metricsData = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
        res.json(metricsData);
    } catch (error) {
        res.json({error: 'Error in reading the metrics data.'})
    }
}

// controller for predictions
module.exports.predictions = (req, res) => {
    try {
        // try to execute the python dcript from python folder
        exec('python ../python/ai_predictions.py', (err, stdout, stderr) => {
            // if any error return in the form of json
            if(err){
                res.json({error: 'error reading the python script'});
                return;
            }
            // assuming predictionsData is an array of predicted results
            const predictionsData = JSON.parse(stdout)

            // update predictions.json file
            fs.writeFileSync(predictionsFile, JSON.stringify(predictionsData, null, 2));
            
            // rednder the json file in form of ejs file where predictionsData is shared as predictions
            ejs.renderFile('views/predictions.ejs', {predictions: predictionsData}, (err, renderedHTML) => {
                // if error in rendering the ejs template return the error in json format
                if(err) {
                    res.json({error: 'error rendering EJS template'});
                    return;
                }
                // send the rendered ejs file to the browser
                res.send(renderedHTML);
            });
        });
    } catch (error) {
        // if controller encounter any error return the wrror in jdon format on the browser
        res.json({error: 'Error in reading the predictions data.'})
    }
}