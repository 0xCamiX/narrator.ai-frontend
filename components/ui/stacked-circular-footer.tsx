import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

function StackedCircularFooter() {
  return (
    <footer className='bg-background py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center'>
          <div className='mb-8 rounded-full bg-primary/10 p-0'>
            <Image
              src='/icon-me.jpeg'
              alt='Logo'
              width={128}
              height={128}
              className='rounded-full'
            />
          </div>
          <div className='mb-8 flex space-x-4'>
            <Link href='https://www.facebook.com' passHref>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Facebook className='h-4 w-4' />
                <span className='sr-only'>Facebook</span>
              </Button>
            </Link>
            <Link href='https://www.twitter.com' passHref>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Twitter className='h-4 w-4' />
                <span className='sr-only'>Twitter</span>
              </Button>
            </Link>
            <Link href='https://www.instagram.com' passHref>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Instagram className='h-4 w-4' />
                <span className='sr-only'>Instagram</span>
              </Button>
            </Link>
            <Link href='https://www.linkedin.com' passHref>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Linkedin className='h-4 w-4' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
            </Link>
            <Link href='https://www.github.com' passHref>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Github className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </Button>
            </Link>
          </div>
          <div className='mb-8 w-full max-w-md'>
            <form className='flex space-x-2'>
              <div className='flex-grow'>
                <Label htmlFor='email' className='sr-only'>
                  Email
                </Label>
                <Input
                  id='email'
                  placeholder='Enter your email'
                  type='email'
                  className='rounded-full'
                />
              </div>
              <Button type='submit' className='rounded-full'>
                Subscribe
              </Button>
            </form>
          </div>
          <div className='text-center'>
            <p className='text-sm text-muted-foreground'>
              © 2025 Juan Camilo Gallego Riveros. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
