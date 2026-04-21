import Link from 'next/link';
import Image from 'next/image';

type SiteLogoProps = {
  size?: number;
  className?: string;
};

export default function SiteLogo({ size = 44, className = '' }: SiteLogoProps) {
  return (
    <Link href="/" aria-label="University of Huddersfield Decision Support Systems logo">
        <div
        className={`relative overflow-hidden rounded-2xl bg-[var(--surface)] shadow-md shadow-[rgba(66,88,109,0.22)] ring-1 ring-[var(--line)] ${className}`.trim()}
        style={{ width: size, height: size }}
        >
        <Image
            src="/images/logo.png"
            alt="University of Huddersfield Decision Support Systems logo"
            fill
            sizes={`${size}px`}
            className="object-contain p-1"
            priority
        />
        </div>
    </Link>
  );
}
