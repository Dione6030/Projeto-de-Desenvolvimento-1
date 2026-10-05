import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383838',
    },
    background: {
        ...StyleSheet.absoluteFill,
        width: undefined,
        height: undefined,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    logoWrapper: {
        width: '90%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#D9A632',
        fontSize: 60,
        fontWeight: '500',
        letterSpacing: 1,
        marginTop: 5,
    },



    logoContainer: {
        width: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    orbita: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#D9A632',
    },

    pontoOrbitaContainer: {
        position: 'absolute',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    pontoOrbita: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#D9A632',
    },
});