const { Alert } = require("react-native");

async addPost() {
    if (
        this.StaticRange.caption
    ) {
        let  postData = {
            prevew_image: this.state.previewImage,
            caption: this.state.caption
            author: firebase.auth().currentUser.displayName,
            created_on: new Date(),
            author_uid: firebase.auth().currentUser.uid,
            profile_image: this.state.profile_image,
            likes: 0
        };
        await firebase.database()
        .ref(
            "/posts/"+
            Math.random()
            .toString(36)
            .slice(2)
        )
        .set(postData)
        .then(function (snapshot) {});
    }else{
        Alert.alert(
            "Error"
            "All fields are required!"
        )
    }
}