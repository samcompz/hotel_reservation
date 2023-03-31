import react from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import useState from "react";




const [images, setImages] = useState([]);
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

// const IMAGES = {
//     image1: require("./assets/purple_beach.jpg"),
//     image2: require("./assets/superior-room-home-page.jpg"),
//     // image3: require("./assets/the-lanesborough-london-presidential-suite.jpg"),
//     // image4: require("./assets/the-lanesborough-london-london.jpg"),
//     // image5: require("./assets/3d-printing.jpg"),
//     // image6: require("./assets/3d-printing.jpg"),
//     // image7: require("./assets/3d-printing.jpg"),
//     // image8: require("./assets/3d-printing.jpg"),
//     // image9: require("./assets/3d-printing.jpg"),
//     // image10: require("./assets/3d-printing.jpg"),
//     // image11: require("./assets/3d-printing.jpg"),
//     // image12: require("./assets/3d-printing.jpg"),
//     // image13: require("./assets/3d-printing.jpg"),
//     // image14: require("./assets/3d-printing.jpg"),
//     // image15: require("./assets/3d-printing.jpg"),
//     // image16: require("./assets/3d-printing.jpg"),
//     // image17: require("./assets/3d-printing.jpg"),
//     // image18: require("./assets/3d-printing.jpg"),
//     // image19: require("./assets/3d-printing.jpg"),
//     // image20: require("./assets/3d-printing.jpg"),
//     // image21: require("./assets/3d-printing.jpg"),

// }



const Gallery = () => {
//     const [images, setImages] = useState([
//         { id: 1, image: IMAGES.image1 },
//         { id: 2, image: IMAGES.image2 },
//         { id: 3, image: IMAGES.image3 },
//         { id: 4, image: IMAGES.image4 },
//         { id: 5, image: IMAGES.image5 },
//         { id: 6, image: IMAGES.image6 },
//         { id: 7, image: IMAGES.image7 },
//     ]);

    return (
        <View style={styles.container}>
            <Text style={styles.ttext}>Gallery</Text>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text:{
        color: "#fff",
        fontsize: 32,
        marginTop: 50,
        marginTopBottom: 25,
    }
});

export default Gallery;
