import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function StatusBanner() {
  return (
    <Alert className='mb-8'>
      <Info className='h-4 w-4' />
      <AlertTitle>Auto-save enabled</AlertTitle>
      <AlertDescription>
        Your project is automatically saved every 30 seconds.
      </AlertDescription>
    </Alert>
  );
}
