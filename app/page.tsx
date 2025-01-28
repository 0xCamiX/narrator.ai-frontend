'use client';

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';

import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer';

import TextEditor from '@/components/TextEditor';
import VoiceConfig from '@/components/VoiceConfig';
import ActionBar from '@/components/ActionBar';
import AudioPlayer from '@/components/AudioPlayer';
import StatusBanner from '@/components/StatusBanner';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function TextToSpeechApp() {
  const [text, setText] = useState('');
  const [voiceName, setVoiceName] = useState('');
  const [speed, setSpeed] = useState(1);
  const [audioUrl, setAudioUrl] = useState('');

  const handleSynthesize = async () => {
    try {
      const body = JSON.stringify({
        text: text,
        voice_name: voiceName,
        output_format: 'Audio16Khz32KBitRateMonoMp3',
        rate: speed,
      });

      const response = await fetch('http://127.0.0.1:8000/speech/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!response.ok) {
        throw new Error('Failed to synthesize audio');
      }

      const audioBlob = await response.blob();
      const synthAudioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(synthAudioUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (!audioUrl) return;
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'narrator.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    };

    return (
      <Button onClick={toggleTheme} variant='outline' size='sm'>
        {theme === 'light' ? (
          <Moon className='mr-2 h-4 w-4' />
        ) : (
          <Sun className='mr-2 h-4 w-4' />
        )}
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    );
  }

  const handleVoiceConfigChange = (config: {
    voiceName: string;
    speed: number;
  }) => {
    setVoiceName(config.voiceName);
    setSpeed(config.speed);
  };

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='min-h-screen bg-background text-foreground'>
        <div className='container mx-auto px-4 py-8'>
          <header className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-primary'>Narrator AI</h1>
            <ThemeToggle />
          </header>
          <StatusBanner />
          <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <TextEditor text={text} onTextChange={setText} />
              <VoiceConfig onConfigChange={handleVoiceConfigChange} />
            </div>
            <div>
              <ActionBar
                onSynthesize={handleSynthesize}
                onDownload={handleDownload}
              />
              <AudioPlayer src={audioUrl} />
            </div>
          </main>
          <div>
            <StackedCircularFooter />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
