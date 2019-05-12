## Setup
add to package.json scripts for enabling hot reload in real devices
```json
"android-linux": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android",
```

## Adding navigation - React navigation (NAVIGATION)
- npm install --save react-navigation
- npm install --save react-native-gesture-handler
- react-native link react-native-gesture-handler
See src/screens/AppNavigator.js

## PROJECT STRUCTURE
### FOLDERS
- library - util functions
- res - all resouces (colors, string, images...)
### IMPORTING
create a package.json file in utils folder e.g. library and import as module, no need to provide exact path
```
import someFunc from 'library/someFile';
```
