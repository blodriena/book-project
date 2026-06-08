'use client'

import { BookOpen, Sparkles, Award, Flame, Heart, Brain, Rocket } from 'lucide-react'
import { IconType } from '@/lib/collections'

export function GetCollectionIcon({ iconType }: { iconType: IconType }) {
  const icons = {
    flame: <Flame size={24} />,
    sparkles: <Sparkles size={24} />,
    award: <Award size={24} />,
    book: <BookOpen size={24} />,
    heart: <Heart size={24} />,
    brain: <Brain size={24} />,
    rocket: <Rocket size={24} />,
  }
  return icons[iconType]
}
