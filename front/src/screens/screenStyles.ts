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
    marginBottom: 65,
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
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderColor: 'rgba(39, 35, 31, 0.22)',
    borderRadius: 10,
    borderWidth: 1,
    color: '#27231F',
    fontSize: 16,
    maxHeight: 120,
    minHeight: 52,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 45,
    paddingHorizontal: 5,
  },
  keyboardContainer: {
  flex: 1,
  },
});