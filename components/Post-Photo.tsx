import { Pressable, View , Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
    id: string;
    avatarURL: string;
    username: string;
    photoURL: string;
    caption?: string;
    likeCount: number;
    commentCount: number;
    tag?: string;
}

export default function PostPhoto({id, username, photoURL, likeCount, commentCount, avatarURL, tag, caption} : Props){

    const [liked, setLiked] = useState(false);

    return(
        <View style = {styles.card}>
            {/* Top row where avatar + name + tag pill is shown */}
            <View style = {styles.headerRow}>
                <View style = {styles.userInfo}>
                    <Image
                        source = {{uri: avatarURL}}
                        style = {styles.avatar}
                    />
                    <Text style = {styles.username}>{username}</Text>
                </View>

                <View style = {styles.tagPill}>
                    <Text style = {styles.tagText}>{tag}</Text>
                </View>
            </View>

            {/*Main image*/}
            <Image
                source = {{uri: photoURL}}
                style = {styles.mainImage}
                resizeMode = "cover"
            />

            {/* Actions row */}
            <View style = {styles.actionsRow}>

                {/* Like button */}
                <TouchableOpacity
                    style = {styles.iconButton}
                    onPress = {() => setLiked(!liked)}
                >
                    <Ionicons
                        name = {liked ? "heart" : "heart-outline"}
                        size = {26}
                        color = {liked ? "red" : "#333"}                    
                    />     
                </TouchableOpacity>

                {/* Comment button */}
                <TouchableOpacity style = {styles.iconButton}>
                    <Ionicons
                        name = "chatbox-outline"
                        size = {26}
                        color = "#333"
                    />
                </TouchableOpacity>
            </View>

            {/* Caption */}
            <Text style = {styles.caption}>{caption}</Text>
        </View>      
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        paddingBottom: 16,
        marginVertical: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginRight: 15
    },
    username: {
        fontFamily: 'Lemon-Milk',
        fontSize: 14
    },
    tagPill: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: "#ffe6ea",
    },
    tagText: {
        fontSize: 11,
        fontFamily: 'DuruSans',
        color: "#d46a7a"
    },
    mainImage: {
        width: "100%",
        height: 480
    },
    actionsRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 4
    },
    iconButton: {
        marginRight: 16
    },
    iconText: {
        fontSize: 20
    },
    caption: {
        paddingHorizontal: 16,
        fontSize: 13,
        fontFamily: 'DuruSans',
        marginTop: 4,
        color: "#444"
    }
});