# 🔒 SmartShield

SmartShield is an advanced malware detection and secure image-sharing system that leverages machine learning, steganography, browser-based security protocols, and TypeScript. It detects image-based malware and ensures that sensitive image files can only be accessed by the intended recipient or device.

---

## 🚀 Features

### 🛡️ Malware Detection
- Detects malware hidden in image files using an ensemble ML model.
- Uses ResNet50 for feature extraction and SVM, Random Forest, and Logistic Regression for classification.
- Integrated into a browser extension for real-time malware scanning.

### 🔐 Secure Image Sharing
- Steganographically embeds user/device metadata in images.
- Ensures only authorized users/devices can decode or access the image.
- Unauthorized access results in image corruption or destruction.

### 🌐 Browser Extension
- “Check Image” button for analyzing images before download.
- Option to manually upload and check images for malware threats.

---

## 🧠 Tech Stack

### 💻 Frontend
- HTML, CSS, JavaScript, **TypeScript**
- React (for extension UI)
- Tailwind CSS (for styling)

### 🔙 Backend
- Flask (Python)
- SQLAlchemy + SQLite
- Steganography libraries (`cv2`, `Pillow`)

## 🧠 AI/ML Tech Stack

- **ResNet50** – Used as a feature extractor for malware images.
- **Ensemble Classifier** – Combination of:
  - Support Vector Machine (SVM)
  - Random Forest
  - Logistic Regression
- **VotingClassifier** – Implements soft voting for better accuracy.
- **Malimg Dataset** – Dataset of malware images used for training and evaluation.
- **Joblib** – Used for saving and loading the trained model (`svm_model.pkl`).

---

## 🖥️ Web Tech Stack

| Layer       | Tech Used                |
|-------------|--------------------------|
| Frontend    | React.js, Tailwind CSS   |
| Backend     | Flask (Python)           |
| Steganography | Stegano (Python)        |
| Database    | MongoDB                  |
| Auth        | Email/Password Login     |

---

## 🧪 How It Works

1. 🖼️ **User uploads an image**
2. 🔍 **Image is analyzed using ResNet + ML ensemble**
3. ✅ **Safe images** are either:
   - Downloaded normally, or
   - Embedded with user/device metadata
4. 🔓 **Only the intended user/device** can view or decode the image
5. 🚫 **Unauthorized attempts** lead to image corruption or destruction

---

## 🧠 Malware Detection Flow

- ResNet50 pre-trained model is used for feature extraction.
- Extracted features are passed to a soft voting ensemble model:
  - SVM (linear kernel)
  - Random Forest (n=100)
  - Logistic Regression
- Predicts one of the 25 malware classes from **Malimg dataset**.
- If confidence < threshold (e.g., 60%), returns "No Malware".

## 🔮 Future Scope

1. **Device-Level Locking**  
   Bind image access to device fingerprints or MAC addresses. Ensures only specific machines can decode or view sensitive files.

2. **Time-Based Access Control**  
   Auto-expire access after a set time window (e.g., 24 hours after download link is generated).

3. **IP Whitelisting**  
   Restrict file access to predefined IP ranges (great for enterprise/internal networks).

4. **Cryptographic Enhancement**  
   Integrate AES encryption in addition to steganography for dual-layer security.

5. **Blockchain Audit Trails**  
   Maintain tamper-proof logs of image modifications, access attempts, and transmission.

6. **Watermarking + Steganography**  
   Combine visible and invisible markings to prevent both unauthorized use and tampering.

---

## 🤖 LLM (Large Language Model) Integration

We plan to integrate an LLM-powered chatbot into the platform to assist with:

1. **User Queries**  
   - "Why was my file blocked?"  
   - "How can I securely send this image?"

2. **Forensic & Security Insights**  
   - "This image was modified twice and attempted to be accessed by an unauthorized system."  
   - "Tampering suspected. Recommend isolating source device."

3. **Dynamic Policy Generation**  
   - “For healthcare images, only allow access from these 3 IPs and auto-delete after 24 hours.”

4. **Security Recommendations**  
   - Based on image metadata and usage patterns, recommend firewall rules or access restrictions.

✅ Perfect for **enterprise clients**, **security analysts**, and **forensics teams** looking to enforce adaptive policies.

---


##  Project Strcuture

smartshield/
│
├── backend/
│   ├── app.py
│   ├── model/
│   │   └── ensemble_model.pkl
│   └── utils/
│       └── steganography.py
│
├── frontend/
│   ├── index.html
│   └── extension/
│       ├── manifest.json
│       ├── popup.tsx
│       ├── background.ts
│       ├── utils/
│       │   └── imageUtils.ts
│       └── style.css
│
└── README.md

## 🧰 Installation

### Backend (Flask API)

```bash
git clone https://github.com/yourusername/smartshield.git
cd smartshield/backend
pip install -r requirements.txt
python app.py
