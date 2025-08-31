# 📝 Anuj Writes

A modern blogging platform where users can create, edit, and share posts.  
Built with **Vite + React** on the frontend, **Appwrite** as the backend service, and deployed on **Vercel**.

---

## 🚀 Live Demo
🔗 [Visit Website](https://anuj-writes.vercel.app)

---

## ✨ Features
- 🔐 User authentication (Login / Register with Appwrite)
- ➕ Create, edit, and delete posts
- 👀 View all posts from community
- 🖼️ Image & media uploads with Appwrite Storage
- ⚡ State management with Redux Toolkit
- 🎨 Responsive UI with modern design
- 🌍 Deployed seamlessly on Vercel

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite), TailwindCSS
- **Backend & Auth:** Appwrite
- **Database:** Appwrite Databases
- **Deployment:** Vercel

---

## 📂 Project Structure
```bash
anuj-writes/
│── public/           # Static assets (favicon, etc.)
│── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # App pages (Home, Login, Dashboard, etc.)
│   ├── context/      # Auth & state management
│   ├── appwrite/     # Appwrite service configuration
│   └── App.jsx       # Main app entry
│── .env              # Environment variables (not pushed to GitHub)
│── package.json
│── README.md
```
## ⚙️ Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/anuj-writes.git
cd anuj-writes
```

2. Install dependencies

```bash
npm install
```


3. Set up environment variables

   Create a .env file in the root directory and add:

```bash
VITE_APPWRITE_URL=https://<your-appwrite-url>/v1
VITE_APPWRITE_PROJECT_ID=<your-project-id>
VITE_APPWRITE_DATABASE_ID=<your-database-id>
VITE_APPWRITE_COLLECTION_ID=<your-collection-id>
VITE_APPWRITE_BUCKET_ID=<your-bucket-id>
VITE_TINYMCE_API_KEY=<your-tinymce-id>
```


4. Run locally

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

## 📦 Deployment

This project is deployed on Vercel.
To redeploy, push changes to the main branch, and Vercel will automatically build and deploy.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and open a PR.

## 🧑‍💻 Author

**Anuj Jadhav**

📧 anujjadhav2003@gmail.com

 [🔗 Portfolio](https://portfolio-git-main-anujs-projects-5a26abb1.vercel.app/)
