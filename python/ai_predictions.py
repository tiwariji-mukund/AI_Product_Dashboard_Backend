import random
import json

# function to make make predictions from the given input data
def make_predictions(input_data):
    # store the predicted result in an array
    predicted_results = []
    # travel through all the input data
    for data in input_data:
        # call the make_predictions function to predicted the result 
        predicted_result = make_prediction(data) 
        # call the get_actual function to return the actual result 
        actual_result = get_actual(data)
        # stored the input data, prediction result and actual result in a prediction dictionary
        prediction = {
            "input": data,
            "prediction": predicted_result,
            "actual": actual_result
        }
        # all the predictions are stored in the predicted_result array and then returned
        predicted_results.append(prediction)
    return predicted_results

# function to make_predictions from given data
def make_prediction(input_data):
    # on the basis of the sentiments of the data it will predicted whether the data is of +ve, -ve or neutral sentiment
    sentiment_scores = {
        "positive": random.uniform(0.0, 1.0),
        "neutral": random.uniform(0.0, 1.0),
        "negative": random.uniform(0.0, 1.0)
    }
    
    # Ensure the sum of sentiment_scores is 1 to represent probabilities
    total_score = sum(sentiment_scores.values())
    normalized_scores = {label: score / total_score for label, score in sentiment_scores.items()}
    
    predicted_class = max(normalized_scores, key=normalized_scores.get)
    return predicted_class


def get_actual(input_data):
    # For this example, we'll just generate some random actual labels
    actual_labels = ["positive", "neutral" ,"negative"]
    return random.choice(actual_labels)

# Actual customer reviews
input_data = [
    "I absolutely love this product! It's fantastic!",
    "This product is a complete waste of money. Avoid it.",
    "The product is okay, not great but not terrible.",
    "This product is a garbage."
]

# calling the prediction function
predictions = make_predictions(input_data)

# Print mock predictions
print(json.dumps(predictions, indent=0))