import { useState } from 'react';
import { TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Text } from 'react-native';
import { MenuBar } from '../utilidade/MenuBar';
import { ScreenBackground } from './ScreenBackground';
import { screenStyles } from './screenStyles';



type ObservarScreenProps = {
  onBack: () => void;
};

export function ObservarScreen({ onBack }: ObservarScreenProps) {
  const [text, setText] = useState('');
  const [mensagens, setMensagens] = useState<string[]>([]);

  const handleSend = () => {
    if (text.trim() === '') return;
    
    console.log('Texto digitado:', text);

    setMensagens((mensagensAtuais) => [...mensagensAtuais, text]);
    setText('');
  };

  return (
    <ScreenBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={screenStyles.keyboardContainer}
      >
        <MenuBar onBack={onBack} />

        <View style={screenStyles.areaMensagens}>
          {mensagens.map((mensagem, index) => (
            <View key={index} style={screenStyles.bolhaMensagem}>
              <Text style={screenStyles.textoMensagem}>{mensagem}</Text>
            </View>
          ))}
        </View>

        <View style={screenStyles.messageContainer}>
          <TextInput
            multiline
            maxLength={500}
            onChangeText={setText}
            placeholder="Digite seu texto..."
            placeholderTextColor="#8A8178"
            style={screenStyles.textInput}
            textAlignVertical="top"
            value={text}
          />

          {/* Botão de enviar */}
          <TouchableOpacity
            style={screenStyles.sendButton}
            onPress={handleSend}
            activeOpacity={0.7}
          >
            <Image
              source={require('../../assets/icone 7.png')}
              style={screenStyles.sendButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
}
