# Financial AI App - React Native Implementation

This project recreates the three screens from the provided image using Expo React Native with exact UI matching.

## Screens Implemented

### 1. Voice Assessment Screen (`/voice-assessment`)
- **Features:**
  - Animated listening circle with pulsing effect
  - Wave animation around the microphone
  - Dark theme with green accents
  - Bottom navigation with camera, microphone, and close buttons
  - Responsive design for both Android and iPhone

### 2. Morty AI Chat Screen (`/morty-ai`)
- **Features:**
  - Chat interface with user and AI message bubbles
  - Interactive chart showing mortgage rates over time
  - Green accent color for user messages
  - Input field with attachment, microphone, and send buttons
  - AI avatar indicator

### 3. Choose Your Plan Screen (`/choose-plan`)
- **Features:**
  - Monthly and Annual subscription plans
  - Toggle switches for Auto Pay
  - Feature lists with checkmarks
  - Discount badge for annual plan
  - Call-to-action button
  - Footer links (Disclaimer, Privacy policy, Restore Purchase)

## Key Features

- **Responsive Design:** Works perfectly on both Android and iPhone
- **Dark Theme:** Black background with green (#00FF88) accents
- **Animations:** Smooth animations for the voice assessment screen
- **Interactive Elements:** Toggle switches, buttons, and input fields
- **Chart Integration:** SVG-based chart for mortgage rates visualization

## How to Run

1. **Install Dependencies:**
   ```bash
   cd my-app
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm start
   ```

3. **Run on Device/Simulator:**
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - For Web: `npm run web`

## Navigation

The app includes navigation buttons on the main screen to access all three new screens:
- Voice Assessment
- Morty AI Chat
- Choose Plan

## File Structure

```
my-app/
├── app/
│   ├── voice-assessment.tsx    # Voice Assessment Screen
│   ├── morty-ai.tsx           # Morty AI Chat Screen
│   ├── choose-plan.tsx        # Choose Your Plan Screen
│   └── _layout.tsx            # Updated with new routes
├── constants/
│   └── theme.ts               # Updated with dark green theme
└── package.json               # All required dependencies included
```

## Dependencies Used

- `expo` - React Native framework
- `@expo/vector-icons` - Icons
- `react-native-svg` - SVG support for charts
- `react-native-safe-area-context` - Safe area handling
- `react-native-reanimated` - Animations

## Theme Colors

- **Background:** #000000 (Black)
- **Primary:** #00FF88 (Bright Green)
- **Text:** #FFFFFF (White)
- **Card:** #1A1A1A (Dark Gray)
- **Border:** #333333 (Medium Gray)

The implementation matches the provided image exactly with responsive design for both Android and iPhone screens.
