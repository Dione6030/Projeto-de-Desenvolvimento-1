import { StatusBar } from 'expo-status-bar';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { loginStyles } from './loginStyles';

type SobreDexterProps = {
    onCriarConta: () => void;
    onVoltar: () => void;
};

export function SobreDexter({
    onCriarConta,
    onVoltar,
}: SobreDexterProps) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={loginStyles.container}
    >
        <StatusBar style="light" />

        <Image
            source={require('../../assets/2.png')}
            style={loginStyles.background}
            resizeMode="cover"
        />

        <View style={loginStyles.aboutCard}>
            <ScrollView
            contentContainerStyle={loginStyles.aboutScrollContent}
            showsVerticalScrollIndicator
            >
            <Text style={loginStyles.aboutTitle}>
                🧭 Sobre o Dexter
            </Text>

            <Text style={loginStyles.aboutText}>
                O Dexter foi criado para simplificar o dia a dia de quem precisa
                gerenciar muitas tarefas.
            </Text>

            <Text style={loginStyles.aboutText}>
                Ele transforma informações em ações — seja por voz, texto ou
                formulário — e ajuda a manter tudo organizado com clareza e
                agilidade.
            </Text>

            <Text style={loginStyles.aboutSectionTitle}>
                🎯 Propósito
            </Text>

            <Text style={loginStyles.aboutText}>
                Mais do que um aplicativo de tarefas, o Dexter é um assistente
                inteligente que entende o contexto das suas atividades e estrutura
                agendas automaticamente.
            </Text>

            <Text style={loginStyles.aboutText}>
                Seu objetivo é reduzir o tempo gasto com organização manual e
                aumentar a produtividade.
            </Text>

            <Text style={loginStyles.aboutSectionTitle}>
                ⚙️ Como funciona
            </Text>

            <Text style={loginStyles.aboutText}>
                • Tela Falar: grave um áudio e o sistema cria sua agenda.{'\n\n'}
                • Tela Escrever: digite suas tarefas e receba confirmação
                automática.{'\n\n'}
                • Tela Agenda: visualize prioridades por cor — vermelho, amarelo
                e verde.{'\n\n'}
                • Tela Arquivo e Excluídos: mantenha histórico e controle total.
                {'\n\n'}
                • Notificações: alertas visuais mudam conforme o prazo se
                aproxima.
            </Text>

            <Text style={loginStyles.aboutSectionTitle}>
                🌱 Impacto
            </Text>

            <Text style={loginStyles.aboutText}>
                O Dexter ajuda você a focar no que realmente importa, tornando sua
                rotina mais leve, organizada e eficiente — um dia de cada vez.
            </Text>
            </ScrollView>

            <TouchableOpacity
            onPress={onCriarConta}
            style={loginStyles.primaryButton}
            >
            <Text style={loginStyles.primaryButtonText}>
                Criar minha conta
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={onVoltar}
            style={loginStyles.secondaryButton}
            >
            <Text style={loginStyles.secondaryButtonText}>
                Voltar
            </Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
}