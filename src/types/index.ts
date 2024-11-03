export interface Topic {
  id: number;
  title: string;
  icon: React.ReactNode;
  subtopics: string[];
  description: string;
  interactive: string;
}

export interface TopicCardProps extends Topic {
  isSelected: boolean;
  onSelect: () => void;
}