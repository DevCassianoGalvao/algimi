import logoAlgimi from '../../imports/logo_algimi.png';

interface AlgimiLogoProps {
  variant?: 'dark' | 'light';
  width?: number;
  className?: string;
}

export function AlgimiLogo({ variant = 'dark', width = 160, className = '' }: AlgimiLogoProps) {
  return (
    <img
      src={logoAlgimi}
      alt="Algimi São Paulo"
      width={width}
      className={className}
      style={{
        filter:
          variant === 'light'
            ? 'brightness(0) invert(1)'
            : 'none',
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
}
