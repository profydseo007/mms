
export type ActivePage =
  | 'home'
  | 'about'
  | 'trial'
  | 'login'
  | 'a-levels'
  | 'curriculum'
  | 'pricing'
  | 'blogs'
  | 'blog'
  | 'resources-hub'
  | 'mock-papers'
  | 'predicted-papers'
  | 'gcse-maths-mock'
  | 'gcse-physics-mock'
  | 'gcse-chemistry-mock'
  | 'gcse-biology-mock'
  | 'gcse-combined-science-mock'
  | 'alevel-maths-mock'
  | 'alevel-physics-mock'
  | 'alevel-chemistry-mock'
  | 'alevel-biology-mock'
  | 'gcse-maths-predicted'
  | 'gcse-physics-predicted'
  | 'gcse-chemistry-predicted'
  | 'gcse-biology-predicted'
  | 'gcse-combined-science-predicted'
  | 'alevel-maths-predicted'
  | 'alevel-physics-predicted'
  | 'alevel-chemistry-predicted'
  | 'alevel-biology-predicted'
  | 'privacy'
  | 'refund'
  | 'subject'
  | 'test-prep';

export interface SubjectData {
  title: string;
  description: string;
  features: string[];
}
