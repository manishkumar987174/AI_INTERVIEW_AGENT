# AI Interview Agent 🤖

Hey there! Welcome to the AI Interview Agent – your friendly companion for crushing those job interviews. We're all about making interview practice fun, smart, and super effective with our AI-powered platform that adapts to you and gives real-time feedback. Whether you're prepping for your dream tech role or just want to boost your confidence, we've got you covered!

## What Makes Us Awesome? 🚀

Here's what you can expect from your interview practice sessions:

- **Tailored Mock Interviews**: Practice HR chats, technical deep-dives, and industry-specific scenarios that match your goals
- **Smart AI Conversations**: Our AI doesn't just ask questions – it follows up intelligently and adjusts difficulty based on how you're doing
- **Instant Feedback**: Get real-time insights on your answers with detailed performance scores and tips
- **Resume Magic**: Upload your resume and let us analyze it to create personalized interview prep
- **Your Interview Journey**: Keep track of all your sessions and see how you're improving over time
- **PDF Reports**: Download beautiful, comprehensive reports of your interview performance
- **Credit System**: Manage your practice sessions with our built-in credit system (because great things shouldn't break the bank!)
- **Analytics Dashboard**: Visualize your progress with charts and trends – watch yourself level up!

## Our Tech Toolbox 🛠️

We built this with some awesome open-source tools to make everything smooth and reliable:

### Frontend (The Shiny Part You See)

- **React 19** - The latest and greatest for building interactive UIs
- **Vite** - Lightning-fast development and builds
- **Redux Toolkit** - Keeps everything organized and state-managed
- **Tailwind CSS** - Makes styling a breeze with utility classes
- **Motion** - Adds those smooth animations that make the app feel alive
- **React Router** - Handles all the page navigation seamlessly
- **Axios** - Our trusty sidekick for talking to the backend
- **Firebase** - Handles authentication and keeps things secure

### Backend (The Brain Behind the Scenes)

- **Node.js** - JavaScript everywhere, baby!
- **Express.js** - Simple and powerful web framework
- **MongoDB** - Flexible database that grows with you
- **JWT** - Keeps your sessions secure with tokens
- **Razorpay** - Smooth payment processing for premium features
- **Multer** - Handles file uploads like a pro
- **PDF.js** - Processes and analyzes PDF documents

## Getting Started (It's Easier Than You Think!) 📋

Before we dive in, make sure you have:

- Node.js (version 16 or newer – check with `node --version`)
- A MongoDB database (local or cloud)
- A Firebase project set up
- Razorpay account if you want payment features

## Installation Guide 🔧

Let's get you up and running in just a few steps:

1. **Grab the code**

   ```bash
   git clone https://github.com/your-username/ai-interview-agent.git
   cd ai-interview-agent
   ```

2. **Set up the server side**

   ```bash
   cd server
   npm install
   ```

3. **Set up the client side**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure your environment**

   In the `server` folder, create a `.env` file with your secrets:

   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

5. **Fire it up!**

   **Terminal 1 (Server):**

   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 (Client):**

   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**

   Head to [http://localhost:5173](http://localhost:5173) and start practicing!

## How to Use It 📖

Ready to ace that interview? Here's the quick guide:

1. **Get Started**: Sign up or log in to your account
2. **Pick Your Practice**: Choose between HR interviews, technical questions, or custom scenarios
3. **Chat with AI**: Answer questions in real-time – our AI adapts to your responses!
4. **Get Feedback**: Review your performance instantly with detailed scores and suggestions
5. **Track Your Growth**: Check your history and analytics to see how you're improving

## API Reference (For the Tech-Savvy Folks) 🔌

If you're building on top of this or just curious about the backend:

### Authentication

- `POST /api/auth/register` - Create a new account
- `POST /api/auth/login` - Sign in to your account
- `POST /api/auth/logout` - Sign out

### User Stuff

- `GET /api/user/current-user` - Get your profile info
- `PUT /api/user/update` - Update your details

### Interview Magic

- `POST /api/interview/start` - Kick off a new practice session
- `POST /api/interview/answer` - Submit your response to a question
- `GET /api/interview/history` - See all your past interviews
- `GET /api/interview/report/:id` - Get a detailed report for a specific session




1. Fork this repo
2. Create your feature branch (`git checkout -b feature/cool-new-thing`)
3. Make your changes and commit (`git commit -m 'Added something awesome'`)
4. Push to your branch (`git push origin feature/cool-new-thing`)
5. Open a Pull Request and let's chat about it!


</content>
