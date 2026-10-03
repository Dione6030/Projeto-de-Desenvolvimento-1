import { MenuBar } from "../utilidade/MenuBar";
import { ScreenBackground } from "./ScreenBackground";
import React, { useRef, useState } from "react";
import {
  Alert,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorder,
} from "expo-audio";
import { transcreverAudio } from "../services/api";

type OuvirScreenProps = {
  onBack: () => void;
  token: string | null;
};

type Estado = "parado" | "gravando" | "enviando";

export function OuvirScreen({ onBack, token }: OuvirScreenProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const gravador = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const gravandoRef = useRef(false);

  const [estado, setEstado] = useState<Estado>("parado");
  const [texto, setTexto] = useState("");

  async function pedirPermissao() {
    const { granted } = await AudioModule.requestRecordingPermissionsAsync();
    return granted;
  }

  async function iniciarGravacao() {
    if (!(await pedirPermissao())) {
      Alert.alert(
        "Permissão negada",
        "Libere o microfone nas configurações para falar com o Dexter.",
      );
      return;
    }

    await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
    await gravador.prepareToRecordAsync();
    gravador.record();
    gravandoRef.current = true;
    setEstado("gravando");
  }

  async function finalizarGravacao() {
    if (!gravandoRef.current) {
      return null;
    }

    gravandoRef.current = false;
    await gravador.stop();
    return gravador.uri;
  }

  async function enviarParaTranscricao(uri: string) {
    if (!token) {
      throw new Error("Sessão expirada. Faça login novamente.");
    }
    return transcreverAudio(token, uri);
  }

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
    iniciarGravacao().catch(() => {
      setEstado("parado");
      Alert.alert(
        "Erro",
        "Não foi possível iniciar a gravação. Tente novamente.",
      );
    })
  };

  const onPressOut = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

    try {
      const uri = await finalizarGravacao();
      if (!uri) {
        setEstado("parado");
        return;
      }

      setEstado("enviando");
      setTexto(await enviarParaTranscricao(uri));
    } catch (error) {
      const mensagem = error instanceof Error ? error.message : "Não foi possível transcrever o áudio. Tente novamente.";
      Alert.alert("Erro", mensagem);
    } finally {
      setEstado("parado");
    }
  };

  const legenda =
    estado === 'gravando' ? 'Gravando... solte para enviar'
    : estado === 'enviando' ? 'Transcrevendo...'
    : 'Segure o botão para falar';

  return (
    <ScreenBackground source={require("../img/FundoEscutando.png")}>
      <MenuBar onBack={onBack} />

      {texto !== "" && <Text style={styles.texto}>{texto}</Text>}
      <Text style={styles.legenda}>{legenda}</Text>

      <Animated.View
        style={[styles.micButton, { transform: [{ scale: scaleAnim }] }]}
      >
        <TouchableWithoutFeedback disabled={estado === "enviando"} onPressIn={onPressIn} onPressOut={onPressOut}>
          <Image source={require("../img/falar.png")} style={styles.micIcon} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  micButton: {
    position: "absolute",
    bottom: 80,
    alignSelf: "center",
  },
  micIcon: {
    width: 55,
    height: 50,
    resizeMode: "contain",
  },
  legenda: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 14,
  },
  texto: {
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderRadius: 10,
    color: '#27231F',
    fontSize: 16,
    padding: 16,
  },
});
