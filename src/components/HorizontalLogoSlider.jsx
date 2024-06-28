import React from 'react';
import Acer from '../Images/acer.png';
import Hcl from '../Images/hcl.png';
import Hp from '../Images/hp.png';
import Microsoft from '../Images/microsoft.png';
import Oracle from '../Images/oracle.svg';
import Samsung from '../Images/samsung.png';
import IBM from '../Images/IBM.png';
import tcs from '../Images/tcs.png';
import wipro from '../Images/wipro.png';
import genpact from '../Images/genpact.png';
import infosys from '../Images/infosys.png';

const logos = [
  { id: 1, src: Acer, alt: 'AcerImg' },
  { id: 2, src: Hcl, alt: 'HclImg' },
  { id: 3, src: Hp, alt: 'HpImg' },
  { id: 4, src: Microsoft, alt: 'MicrosoftImg' },
  { id: 5, src: Oracle, alt: 'OracleImg' },
  { id: 6, src: Samsung, alt: 'SamsungImg' },
  { id: 7, src: IBM, alt: 'IBMImg' },
  { id: 8, src: tcs, alt: 'tcsImg' },
  { id: 9, src: wipro, alt: 'wiproImg' },
  { id: 10, src: genpact, alt: 'genpactImg' },
  { id: 11, src: infosys, alt: 'infosysImg' },
];

const HorizontalLogoSlider = () => {
  const cloneLogos = [...logos,...logos];
  return (
    
    <div className="w-11/12 mx-auto mt-10 max-w-[1480px] flex flex-col md:flex-row ">
      <div className="flex items-center flex-col justify-center h-38 md:h-42 overflow-hidden bg-black">
        <h1 className='font-mullish text-2xl lg:text-3xl font-bold mb-4 mt-[4rem] text-white'>Our Trusted Partners</h1>
        <div className='w-[2880px] overflow-hidden '>
           <div className="animate-marquee w-full flex justify-center gap-20 mt-4">
            {cloneLogos.map((logo) => (
              <div key={logo.id} className="w-24 h-24 md:w-30 md:h-30 flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="object-contain" style={{ width: '100px', height: '100px' }} />
              </div>
            ))}
            {cloneLogos.map((logo) => (
              <div key={logo.id} className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="object-contain" style={{ width: '100px', height: '100px' }} />
              </div>
            ))}
          </div>
           <div className="animate-marquee1 flex justify-center gap-20 mt-4">
            {cloneLogos.map((logo) => (
              <div key={logo.id} className="w-24 h-24 md:w-30 md:h-30 flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="object-contain" style={{ width: '100px', height: '100px' }} />
              </div>
            ))}
            {cloneLogos.map((logo) => (
              <div key={logo.id} className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="object-contain" style={{ width: '100px', height: '100px' }} />
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <style jsx>{`
        .animate-marquee1{
          animation: marquee1 50s linear infinite;
        }

        @keyframes marquee1 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(+100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalLogoSlider;
