import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/base";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    likedImageUrl:
      "https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg",
  },
  {
    name: "Comment",
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    likedImageUrl:
      "https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg",
  },
  {
    name: "Share",
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    likedImageUrl:
      "https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg",
  },
  {
    name: "Save",
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    likedImageUrl:
      "https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.story} source={{ uri: post.profile_picture }} />
      <Text style={{ color: "white", marginLeft: "700" }}>{post.user}</Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

export default Post;
const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <AntDesign
        style={styles.footerIcon}
        name="hearto"
        size={24}
        color="black"
      />
      <Ionicons
        name="chatbubble-outline"
        size={24}
        color="black"
        style={styles.footerIcon}
      />
      <FontAwesome
        name="send-o"
        size={24}
        color="black"
        style={styles.footerIcon}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Feather
        style={styles.footerIcon}
        name="bookmark"
        size={24}
        color="black"
      />
    </View>
  </View>
  //   <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
    color: "white",
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
