import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

type LigatureIconName = 'arrow_forward' | 'chevron_right' | 'expand_more';

const icons = {
  arrow_forward: ArrowRight,
  chevron_right: ChevronRight,
  expand_more: ChevronDown,
};

interface LigatureIconProps {
  name: LigatureIconName;
  className?: string;
}

export default function LigatureIcon({ name, className = '' }: LigatureIconProps) {
  const Icon = icons[name];

  return (
    <Icon
      aria-hidden="true"
      className={`inline-block h-5 w-5 shrink-0 ${className}`}
      strokeWidth={2.25}
    />
  );
}
