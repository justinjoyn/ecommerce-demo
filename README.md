# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

> **Note**: This application uses latest LTS version of Node (v20.10.0). It is recommended to use NVM to manage Node versions across projects. This project contains an .nvmrc which can auto set the required version of Node by running `nvm use`.

## Step 1: Install Dependencies

Install the required dependencies

```bash
yarn
```

If you're on iOS, Pods will also have to be installed, like so

```bash
npx pod-install
```

## Step 2: Start the Metro Server

Start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the React Native project:

```bash
yarn start
```

## Step 3: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the React Native project. Run the following command to start the _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see the app running in the _Android Emulator_ or _iOS Simulator_ shortly provided you have set up the emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.
