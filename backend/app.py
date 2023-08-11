import tensorflow as tf
import numpy as np
from PIL import Image
from flask import Flask, request ,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
model = tf.keras.models.load_model("backend/model/plantDiseaseDetectionmodel.h5")


class_names = ['Apple Scab', 'Apple Black rot', 'Apple healthy', 'Corn(maize) Common rust',
               'Corn(maize) healthy', 'Corn(maize) Northern Leaf Blight', 'Grape Black rot',
               'Grape Esca(Black Measles)', 'Grape healthy', 'Peach Bacterial spot', 'Peach healthy',
               'Strawberry healthy', 'Strawberry Leaf scorch', 'Tomato Bacterial spot', 'Tomato Early blight',
               'Tomato healthy']

@app.route('/predict', methods=['POST'])
def predict_disease():
    if 'file' not in request.files:
        return "No file part in the request."
    file = request.files['file']

    # Ensure that a file is selected
    if file.filename == '':
        return "No selected file."

    # Read the image file and process it
    img = Image.open(file)
    img = img.resize((256, 256))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    test_data = img_array / 255.0

 
    # Predict the class probabilities for the test image
    predictions = model.predict(test_data)
    class_index = np.argmax(predictions)
    predicted_class_name = class_names[class_index]
    
   # Convert the predicted_class_name to string before jsonify
    predicted_class_name = str(class_names[class_index])

# Return the response as JSON
    return jsonify({"predicted_class": predicted_class_name})


if __name__=='__main__':
    app.run()