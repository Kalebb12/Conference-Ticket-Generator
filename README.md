# 🎟️ Multi-Step Ticket Booking Form

A **React-based multi-step ticket booking system** with form validation, Cloudinary image uploads, local storage persistence, and a downloadable ticket feature.

## 📌 Features
- ✅ Multi-step form using **React Hook Form** & **Yup Validation**
- ✅ **Cloudinary Integration** for image uploads
- ✅ **LocalStorage Persistence** to retain user progress
- ✅ **Dynamic Ticket Generation** with overlaid user data
- ✅ **Downloadable Ticket** with event details
- ✅ **Modern UI** with **Tailwind CSS**

## 🛠 Tech Stack
- **Frontend:** React, Next.js (optional), Tailwind CSS
- **State Management:** React Hook Form, useState, useRef
- **Validation:** Yup
- **Image Upload:** Cloudinary API
- **Storage:** LocalStorage

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kalebb12/Conference-Ticket-Generator.git
   cd Conference-Ticket-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install  # or yarn install
   ```

3. **Set up Cloudinary:**
   - Create an account at [Cloudinary](https://cloudinary.com/)
   - Get your Cloudinary API keys
   - Create a `.env` file and add:
     ```env
     VITE_CLOUDINARY_NAME=your_cloud_name
     VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
     ```

4. **Start the development server:**
   ```bash
   npm run dev  # or yarn dev
   ```

## 📸 Screenshots
_(![image](https://github.com/user-attachments/assets/bb0ac7de-123c-427d-b902-257227bd1fd1)
)_

## 📜 Usage
1. Select a **ticket type**
2. Upload an image (stored on Cloudinary)
3. Fill in details and proceed to **download your ticket**

## 🔧 Future Improvements
- ✅ Integration with a backend (Node.js, Express, MongoDB)
- ✅ Payment gateway (Stripe, PayPal)
- ✅ QR Code generation for tickets

## 🤝 Contributing
Pull requests are welcome! Open an issue for suggestions or improvements.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
🚀 **Developed by [Caleb](https://github.com/kalebb12)**

