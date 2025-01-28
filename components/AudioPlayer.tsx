'use client';

import { useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [src]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Audio Player</CardTitle>
      </CardHeader>
      <CardContent>
        <audio ref={audioRef} controls className='w-full'>
          <source src={src} type='audio/mp3' />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
}
