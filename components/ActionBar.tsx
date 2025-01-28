'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Play,
  Save,
  Download,
  MoreVertical,
  Share2,
  Clock,
  FileJson,
} from 'lucide-react';

interface ActionBarProps {
  onSynthesize: () => void;
  onDownload: () => void;
}

export default function ActionBar({
  onSynthesize,
  onDownload,
}: ActionBarProps) {
  return (
    <div className='flex justify-between items-center mb-8'>
      <div className='space-x-2'>
        <Button size='lg' onClick={onSynthesize}>
          <Play className='mr-2 h-4 w-4' /> Preview
        </Button>
        <Button size='lg' variant='outline' onClick={onDownload}>
          <Download className='mr-2 h-4 w-4' /> Download MP3
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon'>
            <MoreVertical className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            <FileJson className='mr-2 h-4 w-4' /> Export Configuration
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clock className='mr-2 h-4 w-4' /> Conversion History
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2 className='mr-2 h-4 w-4' /> Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
