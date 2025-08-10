# HealthMate - AI-Powered Health Tracking App

HealthMate is a comprehensive health tracking application that combines daily health logging with AI-powered insights to help users improve their wellness journey.

## 🚀 Features

### 1. Authentication & Profile
- **Firebase Auth** email/password sign up & login
- **User Profile** with optional personal info (age, gender, weight, height)
- **Secure authentication** with protected routes

### 2. Health Log Input
- **Daily symptoms tracking** with common symptom selection and custom input
- **Meal logging** with food item tracking
- **Exercise tracking** with type, duration, and intensity
- **Sleep monitoring** with hours and quality assessment
- **Water intake tracking** in liters
- **Mood tracking** with emoji-based selection
- **Firestore integration** for secure data storage

### 3. AI-Powered Health Insights
- **GPT-4 integration** for personalized health analysis
- **Symptom analysis** with possible causes and urgency levels
- **Personalized health tips** based on user data
- **Pattern detection** for long-term health trends
- **Motivational messages** and reflection questions
- **JSON-structured responses** for consistent data format

### 4. Health Dashboard
- **Interactive charts** showing trends over time (sleep, hydration, mood)
- **Health statistics** with progress indicators
- **AI-generated insights** display
- **Weekly summaries** and motivation cards
- **Responsive design** for all devices

### 5. Reminders & Motivational Tips
- **Daily motivational quotes** from curated collection
- **Wellness tips** and challenges
- **Progress tracking** and achievements
- **Personalized recommendations**

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom animations
- **Authentication**: Firebase Auth
- **Database**: Firestore (Firebase)
- **AI Integration**: OpenAI GPT-4 API
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HealthMate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   - Firebase configuration
   - OpenAI API key
   - Firebase Admin credentials

4. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Create a service account and download the key
   - Add your Firebase config to environment variables

5. **Set up OpenAI**
   - Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/)
   - Add the API key to your environment variables

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication with Email/Password provider
4. Create a Firestore database
5. Go to Project Settings > Service Accounts
6. Generate a new private key
7. Add the configuration to your `.env.local` file

### OpenAI Setup

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and get your API key
3. Add the API key to your `.env.local` file

## 📱 Usage

### For Users

1. **Sign Up/Login**: Create an account or sign in
2. **Complete Profile**: Add your basic health information
3. **Daily Logging**: Use the health log form to track your daily health metrics
4. **View Insights**: Check your dashboard for AI-generated insights and trends
5. **Track Progress**: Monitor your health improvements over time

### For Developers

The application is structured with the following key components:

- **Authentication**: `contexts/AuthContext.tsx`
- **Health Logging**: `components/health/HealthLogForm.tsx`
- **Dashboard**: `components/dashboard/Dashboard.tsx`
- **AI Integration**: `app/api/ai-insights/route.ts`
- **Charts**: `components/dashboard/HealthCharts.tsx`

## 🏗️ Project Structure

```
HealthMate/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   └── health/            # Health tracking components
├── contexts/              # React contexts
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🔒 Security

- **Firebase Auth** for secure authentication
- **Server-side API routes** for AI integration
- **Environment variables** for sensitive data
- **Input validation** on all forms
- **Protected routes** for authenticated users

## 🎨 Design Features

- **Modern UI/UX** with gradient backgrounds and smooth animations
- **Responsive design** that works on all devices
- **Accessible components** with proper ARIA labels
- **Dark mode ready** (can be easily implemented)
- **Custom animations** and transitions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Future Enhancements

- [ ] Push notifications for reminders
- [ ] Integration with wearable devices
- [ ] Social features and sharing
- [ ] Advanced analytics and reporting
- [ ] Meal planning and nutrition tracking
- [ ] Integration with health providers
- [ ] Multi-language support
- [ ] Offline support with PWA features

---

**HealthMate** - Your AI-powered health companion for a better tomorrow! 💪 