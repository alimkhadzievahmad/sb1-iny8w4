import { Brain, Calculator, Sigma, Shapes, Variable, PenTool, BookText } from 'lucide-react';
import { Topic } from '../types';
import React from 'react';

export const useTopics = (): Topic[] => {
  const createIcon = (Icon: React.ComponentType<any>) => (
    <Icon className="w-8 h-8" />
  );

  return [
    {
      id: 1,
      title: 'Текстовые задачи',
      icon: createIcon(BookText),
      subtopics: ['Движение и время', 'Работа и производительность', 'Проценты и доли', 'Смеси и растворы'],
      interactive: 'graph',
      description: 'Решение практических задач с использованием математических моделей'
    },
    {
      id: 2,
      title: 'Вероятности',
      icon: createIcon(Brain),
      subtopics: ['Классическая вероятность', 'Условная вероятность', 'Геометрическая вероятность', 'Комбинаторика'],
      interactive: 'probability',
      description: 'Расчет вероятностей событий и комбинаторные задачи'
    },
    {
      id: 3,
      title: 'Вычисления',
      icon: createIcon(Calculator),
      subtopics: ['Производные', 'Интегралы', 'Пределы', 'Ряды'],
      interactive: 'calculator',
      description: 'Математические вычисления и преобразования'
    },
    {
      id: 4,
      title: 'Геометрия',
      icon: createIcon(Shapes),
      subtopics: ['Планиметрия', 'Стереометрия', 'Векторы', 'Координатная геометрия'],
      interactive: 'geometry',
      description: 'Геометрические задачи и построения'
    },
    {
      id: 5,
      title: 'Уравнения',
      icon: createIcon(Sigma),
      subtopics: ['Линейные', 'Квадратные', 'Тригонометрические', 'Показательные'],
      interactive: 'equation',
      description: 'Решение различных типов уравнений'
    },
    {
      id: 6,
      title: 'Параметры',
      icon: createIcon(Variable),
      subtopics: ['Линейные с параметром', 'Квадратные с параметром', 'Системы с параметром', 'Неравенства с параметром'],
      interactive: 'parameter',
      description: 'Задачи с параметрами и их исследование'
    },
    {
      id: 7,
      title: 'Построение графиков',
      icon: createIcon(PenTool),
      subtopics: ['Элементарные функции', 'Кусочные функции', 'Параметрические графики', 'Преобразования графиков'],
      interactive: 'plot',
      description: 'Построение и анализ графиков функций'
    }
  ];
};