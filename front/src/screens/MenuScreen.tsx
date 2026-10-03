import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { AgendaScreen } from './AgendaScreen';
import { ArquivoScreen } from './ArquivoScreen';
import { ExcluidosScreen } from './ExcluidosScreen';
import { NotificaScreen } from './NotificaScreen';
import { ObservarScreen } from './ObservarScreen';
import { OuvirScreen } from './OuvirScreen';
import { ScreenBackground } from './ScreenBackground';
import { screenStyles } from './screenStyles';

const menuItems = [
  {
    nome: 'Falar',
    icon: require('../../assets/icone 1.png')
  },
  {
    nome: 'Escrever',
    icon: require('../../assets/icone 2.png')
  },
  {
    nome: 'Agenda',
    icon: require('../../assets/icone 3.png')
  },
  {
    nome: 'Arquivo',
    icon: require('../../assets/icone 4.png')
  },
  {
    nome: 'Excluidos',
    icon: require('../../assets/icone 5.png')
  },
  {
    nome: 'Notificações',
    icon: require('../../assets/icone 6.png')
  }
];

type OuvirScreenProps = {
  onBack: () => void;
  falar: () => void;
};

type MenuScreenProps = {
  token: string | null;
  onLogout: () => void;
};

export function MenuScreen({ token, onLogout }: MenuScreenProps) {
  const [selectedScreen, setSelectedScreen] = useState('');

  if (selectedScreen === 'Falar') return <OuvirScreen onBack={() => setSelectedScreen('')} falar={() => setSelectedScreen('')} />;
  if (selectedScreen === 'Escrever') return <ObservarScreen onBack={() => setSelectedScreen('')} />;
  if (selectedScreen === 'Agenda') return <AgendaScreen onBack={() => setSelectedScreen('')} token={token}/>;
  if (selectedScreen === 'Arquivo') return <ArquivoScreen onBack={() => setSelectedScreen('')} token={token}/>;
  if (selectedScreen === 'Excluidos') return <ExcluidosScreen onBack={() => setSelectedScreen('')} token={token}/>;
  if (selectedScreen === 'Notificações') return <NotificaScreen onBack={() => setSelectedScreen('')}/>;


  return (
    <ScreenBackground>
      <StatusBar style="dark" />
      <Text style={screenStyles.title}>Menu</Text>

      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.nome}
          onPress={() => setSelectedScreen(item.nome)}
          style={screenStyles.menuItem}
        >
          <Text style={screenStyles.menuItemText}>{item.nome}</Text>

          <Image
            source={item.icon}
            style={screenStyles.menuItemIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={onLogout} style={[screenStyles.menuItem, { marginTop: 55, backgroundColor: '#D5A23A' }]}>
        <Text style={screenStyles.menuItemText}>Sair</Text>
      </TouchableOpacity>
    </ScreenBackground>
  );
}