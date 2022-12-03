import './index.scss';

type Props = {
  className?: string;
};

export default function BrandLogo({ className }: Props) {
  return <div className={`brand-logo ${className}`}>ninjaa</div>;
}
