import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: "none",
    flex: 1,
    padding: 25,
    paddingTop: 72,
  },
  backgroundImage: {
  opacity: 0.50,
  },
  title: {
    color: '#27231F',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 40,
  },
  subtitle: {
    color: '#68615A',
    fontSize: 16,
    marginBottom: 24,
    marginTop: 6,
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(39, 35, 31, 0.12)',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 6,
  },
  menuItemText: {
    color: '#27231F',
    fontSize: 17,
    fontWeight: '600',
  },
  menuItemIcon: {
    height: 28,
    width: 28,
  },
  menuItemIconWrapper: {
    height: 34,
    justifyContent: 'center',
    position: 'relative',
    width: 34,
  },
  notificationBadge: {
    alignItems: 'center',
    backgroundColor: '#C62828',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    height: 21,
    justifyContent: 'center',
    minWidth: 21,
    paddingHorizontal: 4,
    position: 'absolute',
    right: -8,
    top: -8,
  },
  notificationBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },

  // Estilo para o botão de enviar
  messageContainer: {
    position: 'absolute',
    bottom: 80,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 8,
    margin: 10,
  },
  textInput: {
    flex: 1,
    maxHeight: 120,
    paddingTop: 4,
    color: '#000',
  },
  keyboardContainer: {
    flex: 1,
  },
  areaMensagens: {
    flex: 1,
    padding: 10,
  },
  bolhaMensagem: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    backgroundColor: '#222',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4,
  },
  textoMensagem: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  sendButton: {

    width: 44, 
    height: 44,
    backgroundColor: '#222', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22, 
    marginLeft: 8,
  },
  sendButtonImage: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF', 
  },
});