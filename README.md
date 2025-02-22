# goToEcom
Here’s a concise and well-structured **README** for your project:  

---

# 🎬 Movie Search App 🎥  

A **TMDB/OMDB Clone** built using **Expo, React Native, React Query, and Redux Toolkit**. Users can **search movies, view details, and shortlist favorites** for later viewing.  

## 🚀 Features  
✅ **Search for movies & TV shows** via OMDB API  
✅ **View movie details** including posters, ratings, and descriptions  
✅ **Shortlist movies** and manage your saved favorites using **Redux Toolkit**  
✅ **Optimized API calls** with **React Query** for caching & performance  
✅ **Smooth navigation** with **React Navigation**  

## 🏗️ Tech Stack  
- **Expo** (React Native Framework)  
- **React Query** (Efficient API data fetching & caching)  
- **Redux Toolkit** (State management for shortlist feature)  
- **React Navigation** (Stack-based navigation)  
- **Axios** (HTTP client for API requests)  

## 📂 Folder Structure  
```
📦 src
│   ├── 📂 api             # API calls (OMDB integration)
│   ├── 📂 hooks           # React Query custom hooks
│   ├── 📂 redux           # Redux store & shortlist slice
│   ├── 📂 screen          # Movie list & shortlist screens
│   ├── 📂 component       # Reusable UI components
│   ├── App.js             # Main entry point with navigation
```

## 📦 Installation  
1️⃣ Clone the repository:  
```sh
git clone https://github.com/your-repo/movie-search-app.git
cd movie-search-app
```
2️⃣ Install dependencies:  
```sh
npm install
```
3️⃣ Start the Expo server:  
```sh
npx expo start
```

## 🔗 API Setup  
Create a `.env` file and add:  
```
EXPO_PUBLIC_API_URL=https://www.omdbapi.com/?apikey=YOUR_API_KEY
```

## 🎯 Usage  
- **Search for movies** on the home screen  
- **Tap "Add to Shortlist"** to save movies  
- **Go to the Shortlist screen** to view saved movies  
- **Remove movies** from the shortlist if needed  

---

🔥 **Built with love using Expo & React Native** ❤️  
