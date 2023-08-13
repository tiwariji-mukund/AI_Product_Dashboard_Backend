const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

const metricsFile = path.join(__dirname, '../data/metrics.json');
const predictionsFile = path.join(__dirname, '../data/predictions.json');

// get the data of dashboard page
module.exports.metrics = (req,res) => {
    try {
        const metricsData = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
        res.json(metricsData);
    } catch (error) {
        res.json({error: 'Error in reading the metrics data.'})
    }
}

module.exports.predictions = (req, res) => {
    try {
        exec('python ../python/ai_predictions.py', (err, stdout, stderr) => {
            if(err){
                res.json({error: 'error reading the python script'});
                return;
            }
            const predictionsData = JSON.parse(stdout)
            // assuming predictionsData is an array of predicted results

            // update predictions.json file
            fs.writeFileSync(predictionsFile, JSON.stringify(predictionsData, null, 2));
            
            ejs.renderFile('views/predictions.ejs', {predictions: predictionsData}, (err, renderedHTML) => {
                if(err) {
                    res.json({error: 'error rendering EJS template'});
                    return;
                }
                res.send(renderedHTML);
            });
        });
    } catch (error) {
        res.json({error: 'Error in reading the predictions data.'})
    }
}