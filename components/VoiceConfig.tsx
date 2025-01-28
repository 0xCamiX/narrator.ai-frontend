'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface VoiceConfigProps {
  onConfigChange: (config: { voiceName: string; speed: number }) => void;
}

const voices = [
  { voice_name: 'es-CO-SalomeNeural' },
  { voice_name: 'es-CO-GonzaloNeural' },
  { voice_name: 'es-CR-MariaNeural' },
  { voice_name: 'es-CR-JuanNeural' },
  { voice_name: 'es-EC-AndreaNeural' },
  { voice_name: 'es-EC-LuisNeural' },
  { voice_name: 'es-ES-ElviraNeural' },
  { voice_name: 'es-ES-AlvaroNeural' },
  { voice_name: 'es-ES-ArabellaMultilingualNeural' },
  { voice_name: 'es-ES-IsidoraMultilingualNeural' },
  { voice_name: 'es-ES-TristanMultilingualNeural' },
  { voice_name: 'es-ES-XimenaMultilingualNeural' },
  { voice_name: 'es-ES-AbrilNeural' },
  { voice_name: 'es-ES-ArnauNeural' },
  { voice_name: 'es-ES-DarioNeural' },
  { voice_name: 'es-ES-EliasNeural' },
  { voice_name: 'es-ES-EstrellaNeural' },
  { voice_name: 'es-ES-IreneNeural' },
  { voice_name: 'es-ES-LaiaNeural' },
  { voice_name: 'es-ES-LiaNeural' },
  { voice_name: 'es-ES-NilNeural' },
  { voice_name: 'es-ES-SaulNeural' },
  { voice_name: 'es-ES-TeoNeural' },
  { voice_name: 'es-ES-TrianaNeural' },
  { voice_name: 'es-ES-VeraNeural' },
  { voice_name: 'es-ES-XimenaNeural' },
  { voice_name: 'es-MX-DaliaNeural' },
  { voice_name: 'es-MX-JorgeNeural' },
  { voice_name: 'es-MX-BeatrizNeural' },
  { voice_name: 'es-MX-CandelaNeural' },
  { voice_name: 'es-MX-CarlotaNeural' },
  { voice_name: 'es-MX-CecilioNeural' },
  { voice_name: 'es-MX-GerardoNeural' },
  { voice_name: 'es-MX-LarissaNeural' },
  { voice_name: 'es-MX-LibertoNeural' },
  { voice_name: 'es-MX-LucianoNeural' },
  { voice_name: 'es-MX-MarinaNeural' },
  { voice_name: 'es-MX-NuriaNeural' },
  { voice_name: 'es-MX-PelayoNeural' },
  { voice_name: 'es-MX-RenataNeural' },
  { voice_name: 'es-MX-YagoNeural' },
  { voice_name: 'es-NI-YolandaNeural' },
  { voice_name: 'es-NI-FedericoNeural' },
  { voice_name: 'es-US-PalomaNeural' },
  { voice_name: 'es-US-AlonsoNeural' },
  { voice_name: 'es-VE-PaolaNeural' },
  { voice_name: 'es-VE-SebastianNeural' },
  { voice_name: 'es-PE-CamilaNeural' },
  { voice_name: 'es-PE-AlexNeural' },
  { voice_name: 'es-UY-ValentinaNeural' },
  { voice_name: 'es-UY-MateoNeural' },
  { voice_name: 'es-CL-CatalinaNeural' },
  { voice_name: 'es-CL-LorenzoNeural' },
];

export default function VoiceConfig({ onConfigChange }: VoiceConfigProps) {
  const [voiceName, setVoiceName] = useState('');
  const [speed, setSpeed] = useState(1);

  const handleSelect = (value: string) => {
    setVoiceName(value);
    onConfigChange({ voiceName: value, speed });
  };

  const handleSpeedChange = (value: number[]) => {
    setSpeed(value[0]);
    onConfigChange({ voiceName, speed: value[0] });
  };

  return (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle>Voice Config</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a voice' />
          </SelectTrigger>
          <SelectContent>
            {voices.map((voice) => (
              <SelectItem key={voice.voice_name} value={voice.voice_name}>
                {voice.voice_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className='mt-4'>
          <label className='block text-sm font-medium mb-2'>
            Speed: {speed.toFixed(1)}x
          </label>
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            value={[speed]}
            onValueChange={handleSpeedChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
