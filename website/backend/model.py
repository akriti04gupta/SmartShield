from keras.models import load_model
from keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import random
import joblib
from keras.applications.resnet50 import ResNet50, preprocess_input
from keras.preprocessing.image import img_to_array

# Load SVM + RF + LR ensemble model
model_path = r"C:\Users\Lenovo\Desktop\Ss\website\backend\ensemble_model.pkl"
ensemble_model = joblib.load(model_path)  # Make sure the variable name matches

# Load ResNet50 for feature extraction (without top layer)
resnet = ResNet50(weights='imagenet', include_top=False, pooling='avg')

# Class labels
CATEGORIES = [
    'Adialer.C', 'Agent.FYI', 'Allaple.A', 'Allaple.L', 'Alueron.gen!J',
    'Autorun.K', 'C2LOP.P', 'C2LOP.gen!g', 'Dialplatform.B', 'Dontovo.A',
    'Fakerean', 'Instantaccess', 'Lolyda.AA1', 'Lolyda.AA2', 'Lolyda.AA3',
    'Lolyda.AT', 'Malex.gen!J', 'Obfuscator.AD', 'Rbot!gen', 'Skintrim.N',
    'Swizzor.gen!E', 'Swizzor.gen!I', 'VB.AT', 'Wintrim.BX', 'Yuner.A'
]

def extract_features(image):
    # Resize the image to match ResNet50 input dimensions
    image = image.resize((224, 224))
    img_array = img_to_array(image)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)  # Preprocess the image for ResNet50
    features = resnet.predict(img_array)  # Extract features using ResNet50
    return features[0]  # Return the features

def predict_from_image(image):
    features = extract_features(image)  # Extract features from the image
    prediction_probs = ensemble_model.predict_proba([features])[0]  # Get prediction probabilities
    predicted_index = np.argmax(prediction_probs)  # Get the index of the most probable class
    confidence = float(np.max(prediction_probs)) * 100  # Convert to percentage
    predicted_label = CATEGORIES[predicted_index]  # Get the label from the categories

    # If the confidence is less than 60%, classify as "NO MALWARE"
    if confidence < 60:
        label = "NO MALWARE"
    else:
        label = "MALWARE DETECTED"

    return label, confidence, predicted_label  # Return the label, confidence, and predicted label
