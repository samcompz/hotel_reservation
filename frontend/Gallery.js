import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageGrid from 'react-native-image-grid';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // get all images in gallery
        const options = {
            assetType: 'Photos',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
            quality: 0.8,
        };
        CameraRoll.getPhotos(options).then(({ edges }) => {
            const images = edges.map(({ node }) => node.image);
            setImages(images);
        });
    }, []);

    const renderImage = image => {
        return (
            <Image
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100 }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <ImageGrid
                data={images}
                itemsPerRow={3}
                renderItem={renderImage}
            />
            <Text>Gallery</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Gallery;
