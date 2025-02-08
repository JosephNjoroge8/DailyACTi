Daily Work Breakdown Structure - Activity Tracker
Overview
This project is a web-based Daily Work Breakdown Structure that helps you track your daily activities over a 90-day period. The system allows you to mark activities as completed, and it automatically updates the status of each activity:

Green: Activity completed within 24 hours.

Red: Activity not completed within 24 hours.

The application is designed to be scalable, allowing multiple users to create accounts, customize their activity lists, and track their progress.

Features
Daily Activity Tracking:

Track 10 predefined daily activities (customizable).

Each activity must be performed for a minimum of 30 minutes daily.

Visual feedback (green/red) for completed/missed activities.

User Authentication:

Sign up and log in using email/password.

Each user has their own activity tracking data.

Responsive Design:

Built with Tailwind CSS for mobile-first responsiveness.

Works seamlessly on devices of all sizes.

Scalability:

Built on Firebase for backend and hosting.

Supports multiple users with separate activity tracking.

Free Hosting:

Hosted on Firebase Hosting (free tier available).

Activities to Track
The following activities are included by default:

Body Exercising

Reading self-help books and personal development

Forex/Binary training trading

IT networking skills

Communication/sales and oratory skills training

Programming/coding practice

Journaling and article writing

Videography and YouTube content creation

Daily reflection and next day planning

Financial literacy

Technologies Used
Frontend:

HTML, CSS (Tailwind CSS), JavaScript

Backend:

Firebase Firestore (NoSQL database)

Firebase Authentication (user login/signup)

Hosting:

Firebase Hosting (free tier)

Setup Instructions
1. Set Up Firebase
Go to Firebase Console.

Create a new project (e.g., "DailyTracker").

Enable Firestore Database and Authentication (Email/Password).

Set Firestore rules to allow read/write access for authenticated users:

javascript
Copy
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
Go to Project Settings > General > Your Apps and add a web app. Copy the Firebase configuration.

2. Download and Set Up the Project
Clone or download the project files.

Replace the Firebase configuration in the code with your own:

javascript
Copy
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
3. Run Locally
Install a local server (optional):

bash
Copy
npm install -g live-server
Start the server:

bash
Copy
live-server public
Open your browser and navigate to http://localhost:8080.

4. Deploy to Firebase Hosting
Install Firebase CLI:

bash
Copy
npm install -g firebase-tools
Log in to Firebase:

bash
Copy
firebase login
Initialize your project:

bash
Copy
firebase init
Select Hosting and Firestore.

Choose your Firebase project.

Set public as the public directory.

Deploy your project:

bash
Copy
firebase deploy
Your site will be hosted at https://<your-project-id>.web.app.

File Structure
Copy
activity-tracker/
├── public/
│   ├── index.html       # Main HTML file
│   ├── css/            # Tailwind CSS (if extracted)
│   └── js/             # JavaScript files
├── README.md           # Project documentation
└── firebase.json       # Firebase Hosting configuration
How It Works
User Registration:

Users can sign up with an email and password.

Each user gets their own Firestore collection for activity tracking.

Activity Tracking:

Users can mark activities as completed by ticking checkboxes.

Completed activities turn green.

Missed activities (not completed within 24 hours) turn red.

Data Storage:

Activity data is stored in Firestore under the user's unique ID.

Each activity record includes:

activity: Name of the activity.

completed: Boolean (true/false).

timestamp: Time of last update.

Responsive Design:

The application adapts to different screen sizes using Tailwind CSS.

Scalability
Multiple Users:

Firebase Authentication supports unlimited users.

Each user's data is stored separately in Firestore.

Custom Activities:

Users can add or remove activities from their tracking list.

Free Tier:

Firebase offers a generous free tier for small-scale projects.

Future Enhancements
Custom Activity Lists:

Allow users to add, edit, or remove activities.

Progress Reports:

Generate weekly/monthly progress reports.

Reminders:

Send email or push notifications for pending activities.

Analytics:

Track user engagement and activity completion rates.

Hosting Options
Firebase Hosting (Recommended):

Free tier available.

Easy deployment using Firebase CLI.

GitHub Pages:

Free static site hosting.

Netlify/Vercel:

Free hosting with automatic deployments from GitHub.

Support
For any issues or questions, feel free to open an issue on the GitHub repository or contact the project maintainer.

License
This project is open-source and available under the MIT License.