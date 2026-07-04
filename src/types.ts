export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  institution?: string;
  classGroup?: string;
  class_group?: string;
  status: 'Active' | 'Offline' | 'Suspended' | 'Pending' | 'Approved' | 'Rejected';
  joinedDate: string;
  overallProgress: number; // 0 to 100
  biologyProgress: number; // 0 to 100
  physicsProgress: number; // 0 to 100
  chemistryProgress: number; // 0 to 100
  biologyMCQs: number; // e.g. 400
  physicsMCQs: number; // e.g. 360
  chemistryMCQs: number; // e.g. 444
  biologyAcc: number; // e.g. 82
  physicsAcc: number; // e.g. 68
  chemistryAcc: number; // e.g. 91
  avatarUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  subject: 'Biology' | 'Physics' | 'Chemistry' | 'General';
  unlocked: boolean;
  unlockedAt?: string;
  icon: string;
  gradient: string;
}

export interface RegistrationRequest {
  id: string;
  name: string;
  email: string;
  institution: string;
  classGroup: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  subject: 'Biology' | 'Physics' | 'Chemistry';
  chapterNumber: number;
  title: string;
  subtitle: string;
  quickFact: string;
  contents: { title: string; content: string }[];
  quizQuestions: QuizQuestion[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
  subject: 'Biology' | 'Physics' | 'Chemistry' | 'General';
}
