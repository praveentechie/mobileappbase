## Setup
add to package.json scripts for enabling hot reload in real devices
```json
"android-linux": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android",
```

## Adding navigation (React navigation)
- npm install --save react-navigation
- npm install --save react-native-gesture-handler
- react-native link react-native-gesture-handler
