import logo01 from '../assets/logos/logo01.png';
import logo03 from '../assets/logos/logo03.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  logoType?: 'header' | 'footer';
}

export default function Logo({ variant = 'dark', logoType = 'header' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#1e1e1e]';
  const logoImage = logoType === 'footer' ? logo03 : logo01;
  
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={logoImage}
        alt="Logo Dra. Lidiane Sarmento - Especialista em Harmonização Orofacial em Manaus"
        className="h-8 w-auto sm:h-12 md:h-14 object-contain flex-shrink-0"
        loading="eager"
        width="120"
        height="120"
        itemProp="logo"
      />
      <div className="flex flex-col">
        <h1 className={`text-base sm:text-lg md:text-[22px] font-normal ${textColor} m-0 font-body leading-tight`}>
          Dra. Lidiane Sarmento
        </h1>
        <p className={`text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[1px] sm:tracking-[2px] mt-0.5 sm:mt-1 ${textColor} font-body leading-tight`}>
          HARMONIZAÇÃO OROFACIAL
        </p>
      </div>
    </div>
  );
}

