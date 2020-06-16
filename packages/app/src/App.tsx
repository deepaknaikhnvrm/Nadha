/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {ActivityIndicator, SafeAreaView, View} from "react-native";
import {DefaultTheme, Screen, ThemeProvider} from "@nadha/views";
import {configureStore, PlayerContext, playerMachine} from "@nadha/core";
import Navigation from "./navigation";
import {Provider} from "react-redux";
// @ts-ignore
import {PersistGate} from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";
import {useMachine} from "@xstate/react";

const {store, persistor} = configureStore();

const Loader = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"}/>
    </View>
);

const App = () => {
    const [current, send] = useMachine(playerMachine);
    return (
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <ThemeProvider theme={DefaultTheme}>
                    <ErrorBoundary>
                        <PlayerContext.Provider value={{current, send}}>
                            <SafeAreaView style={{flex: 1}}>
                                <Screen>
                                    <Navigation/>
                                </Screen>
                            </SafeAreaView>
                        </PlayerContext.Provider>
                    </ErrorBoundary>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
