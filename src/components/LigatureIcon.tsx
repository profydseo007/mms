import { ArrowRight, ChevronDown, ChevronRight, Clock, DollarSign, Star, Check, CheckCircle2 } from 'lucide-react';

type LigatureIconName =
  | 'arrow_forward'
  | 'chevron_right'
  | 'expand_more'
  | 'Clock'
  | 'DollarSign'
  | 'Star'
  | 'Check'
  | 'CheckCircle';

const icons: Record<LigatureIconName, React.ElementType> = {
  arrow_forward: ArrowRight,
  chevron_right: ChevronRight,
  expand_more: ChevronDown,
  Clock,
  DollarSign,
  Star,
  Check,
  CheckCircle: CheckCircle2,
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
