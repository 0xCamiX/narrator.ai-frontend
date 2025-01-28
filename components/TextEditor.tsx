'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Link, XCircle } from 'lucide-react';

interface TextEditorProps {
  text: string;
  onTextChange: (value: string) => void;
}

export default function TextEditor({ text, onTextChange }: TextEditorProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
  };

  const handleClearClick = () => {
    onTextChange('');
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const content = await file.text();
    onTextChange(content);
  };

  return (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle>Text Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder='Enter your advertising text here...'
          value={text}
          onChange={handleTextChange}
          className='min-h-[200px] mb-4'
        />
        <div className='flex justify-between items-center'>
          <span className='text-sm text-muted-foreground'>
            Words: {wordCount} | Characters: {text.length}
          </span>
          <div className='space-x-2 flex items-center'>
            <label htmlFor='fileImport' className='cursor-pointer'>
              <Button variant='outline' size='sm'>
                <Upload className='h-4 w-4 mr-2' />
                Import File
              </Button>
              <input
                id='fileImport'
                type='file'
                accept='.txt'
                className='hidden'
                onChange={handleFileImport}
              />
            </label>
            <Button variant='outline' size='sm'>
              <Link className='h-4 w-4 mr-2' />
              Import URL
            </Button>
            <Button variant='outline' size='sm' onClick={handleClearClick}>
              <XCircle className='h-4 w-4 mr-2' />
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
