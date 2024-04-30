import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

interface TextProps {
  content: string;
  size?: 'base-12' | 'base-16' | 'base-20'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'black' | 'gray';
}

const Text:React.FC<TextProps> = ({ content, size = 'base-16', weight = 'regular', color = 'black' }) => {
  const sizeClassName = () => {
    switch (size) {
      case 'base-12':
        return 'text-[12px]';
      case 'base-16':
        return 'text-[16px] md:text-[18px]';
      case 'base-20':
        return 'text-[20px] md:text-[36px]';
    }
  }

  const weightClassName = () => {
    switch (weight) {
      case 'regular':
        return 'font-normal';
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      case 'bold':
        return 'font-bold';
      case 'extrabold':
        return 'font-extrabold';
    }
  }

  const colorClassName = () => {
    switch (color) {
      case 'black':
        return 'text-[#333333]';
      case 'gray':
        return 'text-[#333333CC]';
    }
  }

  return (
    <span className={`${rubik.className} ${sizeClassName()} ${weightClassName()} ${colorClassName()}`}>{content}</span>
  )
}

export { Text }