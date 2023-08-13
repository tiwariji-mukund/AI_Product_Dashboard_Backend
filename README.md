# AI Product Dashboard - Setup and Documentation

This project implements a Node.js server as a backend for an AI product's dashboard. The server provides API endpoints for metrics and predictions, and it integrates with a Python script to generate mock prediction data.

## Project Structure

The project directory structure is organized as follows:

![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/e353a162-ebe4-484c-9a47-b97431d02ea7)


- `backend/`: Contains the Node.js server code, including routes, controllers, and the main server file `server.js`.
- `python/`: Contains the Python script `ai_prediction.py` for generating mock prediction data.
- `backend/views/`: Contains the EJS template file `predictions.ejs` for rendering prediction data as HTML.
- `backend/data/`: Contains JSON files for storing metrics and predictions data.
- `README.md`: The documentation you're currently reading.

## Output
### Sign In
![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/1c45fe65-95e4-4713-810a-f99cc6e72507)

### Sign Up
![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/6ac80882-4fa4-45ed-bf7c-1f0be01086a9)

### Dashboard
![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/6160a3c0-14ce-4517-b153-2fd8c5107e5b)

### Predictions
![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/ebffdb48-15bd-44d5-9d48-ce6292bf9b25)

### Metrics
![image](https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend/assets/92503293/f5bb688b-6c56-46ee-9480-95160c216e70)

## Setup Instructions

1. Clone the repository to your local machine:
   `git clone https://github.com/tiwariji-mukund/AI_Product_Dashboard_Backend`

2. Navigate to the `project-folder/backend` directory: `cd project-folder/backend`

3. Install Node.js dependencies: `npm install`

4. Navigate to the `project-folder/python` directory: `cd ../python`


7. Start the Node.js server by returning to the `backend` directory and running:   `npm start`


8. In a web browser, access the API endpoints:

- Metrics Endpoint: `http://localhost:8000/api/metrics`
- Predictions Endpoint: `http://localhost:8000/api/predictions`

## Design Decisions

- **Directory Structure**: The project is organized into different folders for better separation of concerns: `backend` for Node.js code, EJS temolate, routes, controllers, database and `python` for Python scripts.

- **API Endpoints**: Separate API endpoints are created for metrics and predictions to adhere to RESTful principles.

- **Python Integration**: The Python script `ai_predictions.py` generates mock prediction data based on input data. The Node.js server calls this script using `child_process` and integrates the results with the `/api/predictions` endpoint.

- **EJS Template**: The EJS template `predictions.ejs` is used to render prediction data as an HTML page. This provides a user-friendly representation of the predictions.

- **Data Storage**: JSON files are used to store metrics and predictions data. The data is read and written using the `fs` module in Node.js.

- **Error Handling**: Proper error handling is implemented to handle exceptions during data processing, API requests, and script execution.

## Further Improvements

- Implement database integration for data storage instead of using JSON files.
- Enhance the Python script with a more sophisticated prediction model.
- Improve frontend integration and visualization for the AI product's dashboard.
- Conduct unit and integration testing to ensure robustness.

