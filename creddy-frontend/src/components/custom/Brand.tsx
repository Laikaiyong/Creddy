import Image from 'next/image';

export default function Brand () {
    return (
        <div>
        <a href="/">
              <Image 
                  src="/creddy-logo.svg"
                  alt="Creddy logo"
                  width={50}
                  height={20}
                  className="lg:hidden"
              />
              <Image 
                  src="/creddy-logo.png"
                  alt="Creddy logo"
                  width={80}
                  height={20}
                  className="hidden lg:block"
              />
          </a>
        </div>
    );
}