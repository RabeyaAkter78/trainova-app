# TraiNova - Premium Fitness & Wellness Platform

TraiNova is a production-grade, cross-platform mobile frontend application built with React Native, Expo, and TypeScript. It is designed to look and feel like a real funded startup product with a premium UI/UX, glassmorphism elements, and a clean, scalable architecture.

> [!IMPORTANT]
> This is a **Frontend-Only** project. All data is managed via local state and mock data stores. No real backend APIs are connected.

---

## 🎯 Focus & Target


- **Scalable Architecture**: A folder structure designed for large-scale applications.
- **Premium UI/UX**: Custom dark theme with glassmorphism, soft shadows, and smooth layouts.
- **State Management**: Complex state handling with Redux Toolkit.
- **Component Reusability**: Highly modular components for maintainability.

---

## 🚀 Features

### 1. Pre-Login Experience
- **Interactive Landing Screen**: Features an auto-sliding hero carousel highlighting business values.
- **Combined Auth Flow**: A tab-based, clean Sign In and Sign Up interface.

### 2. Post-Login Dashboard (Home)
- **Personalized Greeting**: Shows user stats like calories burned and workout time.
- **Horizontal Sliders**: Quick access to Recommended Trainers, Top Rated Gyms, and Trending Products.

### 3. Fitness Ecosystem
- **Trainers**: Browse trainers with filters, view detailed profiles, read reviews, and initiate direct messaging.
- **Gyms**: Find nearby gyms, view amenities (Pool, Sauna, etc.), and submit a membership application via a slide-up modal form.
- **Products**: A grid-based shop with detailed product views, ratings, and a complete add-to-cart system.

### 4. Commerce & Analytics
- **Cart System**: Real-time item count badge on the cart icon, quantity adjustments, and subtotal calculations.
- **Polished Checkout Flow**: A 3-step wizard (Shipping -> Payment -> Confirmation) for a seamless buying experience.
- **Orders Analytics**: A dedicated page showing total spent, total products, and a full history table of past orders.

### 5. Profile & Management
- **Account Settings**: Edit profile details, change profile photo using native image picker (`expo-image-picker`), and change password via modal.
- **Subscriptions**: View active and expired gym memberships with renewal options.
- **Notifications**: A dedicated notification screen with read/delete functionality.

---

## 🛠️ Tech Stack

- **Core**: React Native, Expo, TypeScript
- **Navigation**: React Navigation v7 (Stack & Bottom Tabs)
- **Styling**: NativeWind (TailwindCSS for React Native)
- **State Management**: Redux Toolkit (RTK)
- **Icons**: Expo Vector Icons (Ionicons)
- **Image Handling**: Expo Image, Expo Image Picker

---

## 🏃‍♂️ How to Run

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Expo Go app on your physical device (for testing) or an emulator.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RabeyaAkter78/trainova-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd trainova-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:
```bash
npx expo start -c
```

- **Android**: Press `a` to run on an Android emulator or scan the QR code with the Expo Go app.
- **iOS**: Press `i` to run on an iOS simulator or scan the QR code with the Camera app.
- **Web**: Press `w` to run in the browser (Note: some native features like Image Picker might behave differently).

---

## 📁 Folder Structure

```text
src/
├── app/               # App configuration and entry
├── assets/            # Static assets (images, fonts)
├── components/        # Reusable UI components
├── constants/         # App constants (colors, layout)
├── hooks/              # Custom React hooks
├── mock/              # Mock data stores (gyms, products, trainers)
├── navigation/        # Navigation stacks and tabs
├── redux/             # Redux store and slices
├── screens/           # All application screens
│   ├── auth/
│   ├── gyms/
│   ├── home/
│   ├── products/
│   └── profile/
└── utils/             # Helper functions
```
