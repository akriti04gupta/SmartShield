from flask import Flask, request, jsonify
from model import predict_from_image
from PIL import Image
import io
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/check', methods=['POST'])
def check_image():
    try:
        data = request.get_json()
        if not data or 'imageUrl' not in data:
            return jsonify({'error': 'No imageUrl provided'}), 400

        image_url = data['imageUrl']

        # Download the image
        response = requests.get(image_url)
        response.raise_for_status()
        image_bytes = io.BytesIO(response.content)
        image = Image.open(image_bytes).convert("RGB")

        # Predict using your model (now expecting 3 return values)
        label, confidence, predicted_class = predict_from_image(image)

        return jsonify({
            'safe': label.lower() == 'no malware',
            'predicted_class': predicted_class,
            'confidence': round(confidence, 4),
            'label': label
        })

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
