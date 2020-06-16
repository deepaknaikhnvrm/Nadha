import React from 'react';
import {Card, Fab, Icon, Text} from "@nadha/views";
import {TouchableOpacity} from "react-native";
import {PlayerContext} from '@nadha/core';

export const Toolbox = ({navigation}: { navigation: any }) => {
    return (
        <React.Fragment>
            <PlayerContext.Consumer>
                {({current, send}) => (
                    current.matches("idle") ? false : <Card style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10,
                    }}>
                        <Icon name={current.matches("play") ? "Pause" : "Play"} onPress={() => send('TOGGLE')}/>
                        <TouchableOpacity style={{marginHorizontal: 16, justifyContent: 'center', alignItems: 'center'}}
                                          onPress={() => navigation.navigate("Player")}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>{current.context.media.title}</Text>
                            {current.context.media.subtitle ? <Text>{current.context.media.subtitle}</Text> : false}
                        </TouchableOpacity>
                    </Card>
                )}
            </PlayerContext.Consumer>
            <Fab
                style={{position: "absolute", bottom: 10, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </React.Fragment>

    )
}