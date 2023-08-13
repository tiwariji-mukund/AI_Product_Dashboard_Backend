import random
import json

def make_predictions(input_data):
    predicted_results = []
    for data in input_data:
        predicted_result = make_prediction(data) #dummy prediction data
        actual_result = get_actual(data)
        prediction = {
            "input": data,
            "prediction": predicted_result,
            "actual": actual_result
        }
        predicted_results.append(prediction)
    return predicted_results

def make_prediction(input_data):
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
    # You might have a database or other source for actual sentiment labels
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