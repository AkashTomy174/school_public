/**
 * Icon registry — the single place where content-level icon names resolve to
 * concrete Lucide components.
 *
 * Data modules (`schoolData.ts`) stay presentation-free and only declare a
 * string key; sections look that key up here. Unknown keys fall back to
 * {@link FALLBACK_ICON} so a typo degrades to a neutral glyph instead of a
 * blank space.
 */

import {
  Award,
  Bed,
  Bell,
  BookOpen,
  Bus,
  Calendar,
  CheckCircle2,
  CircleCheck,
  Clock,
  Coffee,
  Compass,
  Drama,
  Eye,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  MessageSquare,
  Phone,
  Quote,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Trophy,
  User,
  UserCheck,
  Video,
  Wind,
  X,
  type LucideIcon,
} from 'lucide-react';

export const ICONS = {
  'award': Award,
  'bed': Bed,
  'bell': Bell,
  'book-open': BookOpen,
  'bus': Bus,
  'calendar': Calendar,
  'check-circle': CheckCircle2,
  'circle-check': CircleCheck,
  'clock': Clock,
  'coffee': Coffee,
  'compass': Compass,
  'drama': Drama,
  'eye': Eye,
  'file-check': FileCheck,
  'file-text': FileText,
  'flask': FlaskConical,
  'graduation-cap': GraduationCap,
  'home': Home,
  'mail': Mail,
  'map-pin': MapPin,
  'maximize': Maximize,
  'maximize-2': Maximize2,
  'message': MessageSquare,
  'phone': Phone,
  'quote': Quote,
  'shield': Shield,
  'shield-check': ShieldCheck,
  'sparkles': Sparkles,
  'star': Star,
  'trees': Trees,
  'trophy': Trophy,
  'user': User,
  'user-check': UserCheck,
  'video': Video,
  'wind': Wind,
  'x': X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

const FALLBACK_ICON = Sparkles;

/** Resolve an icon name, tolerating unknown values from content files. */
export const resolveIcon = (name: string): LucideIcon =>
  (ICONS as Record<string, LucideIcon | undefined>)[name] ?? FALLBACK_ICON;

export interface IconProps {
  /** Icon key declared in the content layer. */
  readonly name: string;
  readonly className?: string;
  readonly strokeWidth?: number;
}

/** Renders a content-declared icon with a guaranteed fallback. */
export const Icon: React.FC<IconProps> = ({ name, className, strokeWidth }) => {
  const Component = resolveIcon(name);
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
};