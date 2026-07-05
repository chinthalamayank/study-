import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Award, 
  ArrowRight, 
  Check, 
  X, 
  UserPlus, 
  Hourglass, 
  Search, 
  Bell, 
  Settings, 
  BookOpen, 
  HelpCircle, 
  LogOut, 
  ChevronRight, 
  Menu, 
  Lock, 
  Clock, 
  Sun,
  Moon, 
  Info, 
  ChevronLeft, 
  MoreVertical, 
  RotateCcw, 
  Sparkles,
  SearchCode,
  GraduationCap,
  Filter,
  CheckCircle2,
  XCircle,
  TrendingUp
} from 'lucide-react';
import { User, Achievement, RegistrationRequest, QuizQuestion, Chapter, GlossaryItem } from './types';
import { PRE_SEEDED_USERS, PRE_SEEDED_ACHIEVEMENTS, PRE_SEEDED_GLOSSARY, PRE_SEEDED_REQUESTS, PRE_SEEDED_CHAPTERS } from './data';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';

export default function App() {
  // --- Persistent Core States ---
  const [users, setUsers] = useState<User[]>(() => {
    if (!isSupabaseConfigured) {
      const saved = localStorage.getItem('so_users_v3');
      return saved ? JSON.parse(saved) : PRE_SEEDED_USERS;
    }
    return [];
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    if (!isSupabaseConfigured) {
      const saved = localStorage.getItem('so_current_user_v3');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    if (!isSupabaseConfigured) {
      const saved = localStorage.getItem('so_achievements_v3');
      return saved ? JSON.parse(saved) : PRE_SEEDED_ACHIEVEMENTS;
    }
    return PRE_SEEDED_ACHIEVEMENTS;
  });

  const [requests, setRequests] = useState<RegistrationRequest[]>(() => {
    if (!isSupabaseConfigured) {
      const saved = localStorage.getItem('so_requests_v3');
      return saved ? JSON.parse(saved) : PRE_SEEDED_REQUESTS;
    }
    return [];
  });

  const [glossary, setGlossary] = useState<GlossaryItem[]>(() => {
    if (!isSupabaseConfigured) {
      const saved = localStorage.getItem('so_glossary_v3');
      return saved ? JSON.parse(saved) : PRE_SEEDED_GLOSSARY;
    }
    return PRE_SEEDED_GLOSSARY;
  });

  // --- Supabase Backend Integration States & Effects ---
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadUserProfileAndStats = async (userId: string) => {
    try {
      const { data: profileRow, error: profileErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileErr || !profileRow) {
        console.error('Error fetching profile:', profileErr);
        return null;
      }

      const { data: attempts, error: attemptsErr } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', userId);

      const quizAttempts = attempts || [];

      const biologyAttempts = quizAttempts.filter(a => a.subject === 'Biology');
      const physicsAttempts = quizAttempts.filter(a => a.subject === 'Physics');
      const chemistryAttempts = quizAttempts.filter(a => a.subject === 'Chemistry');

      const biologyMCQs = biologyAttempts.reduce((sum, a) => sum + a.total, 0);
      const physicsMCQs = physicsAttempts.reduce((sum, a) => sum + a.total, 0);
      const chemistryMCQs = chemistryAttempts.reduce((sum, a) => sum + a.total, 0);

      const biologyCorrect = biologyAttempts.reduce((sum, a) => sum + a.score, 0);
      const physicsCorrect = physicsAttempts.reduce((sum, a) => sum + a.score, 0);
      const chemistryCorrect = chemistryAttempts.reduce((sum, a) => sum + a.score, 0);

      const biologyAcc = biologyMCQs > 0 ? Math.round((biologyCorrect / biologyMCQs) * 100) : 0;
      const physicsAcc = physicsMCQs > 0 ? Math.round((physicsCorrect / physicsMCQs) * 100) : 0;
      const chemistryAcc = chemistryMCQs > 0 ? Math.round((chemistryCorrect / chemistryMCQs) * 100) : 0;

      const uniqueBioChapters = new Set(biologyAttempts.map(a => a.chapter_title)).size;
      const uniquePhysChapters = new Set(physicsAttempts.map(a => a.chapter_title)).size;
      const uniqueChemChapters = new Set(chemistryAttempts.map(a => a.chapter_title)).size;

      const biologyProgress = Math.min(100, uniqueBioChapters * 100);
      const physicsProgress = Math.min(100, uniquePhysChapters * 100);
      const chemistryProgress = Math.min(100, uniqueChemChapters * 100);

      const overallProgress = Math.round((biologyProgress + physicsProgress + chemistryProgress) / 3);

      const mappedUser: User = {
        id: profileRow.id,
        name: profileRow.name,
        email: profileRow.email,
        role: profileRow.role,
        institution: profileRow.institution || '',
        classGroup: profileRow.class_group || '',
        status: profileRow.status === 'Approved' ? 'Active' : (profileRow.status === 'Suspended' ? 'Suspended' : 'Offline'),
        joinedDate: profileRow.joined_date ? new Date(profileRow.joined_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Today',
        overallProgress,
        biologyProgress,
        physicsProgress,
        chemistryProgress,
        biologyMCQs,
        physicsMCQs,
        chemistryMCQs,
        biologyAcc,
        physicsAcc,
        chemistryAcc,
        avatarUrl: profileRow.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMSFtgiNw4N8tEAp5nELDgzJ_autdfZ-kfzq9XfOf4_raBjdcpbqOssPENHoddAcxOa-VER7hnABS_DyRk4q5PtLiT6I028HaF9wHgRZUe4yr8ZtXF387Yzwd6Odm_AuZcdTWKl0489dRgwSeo86Bq57cMD_yRRSY4mDdyKrobJttUBI1Ig3Tsilwuj_DN_TnadDcm9i-byS_KTU-9xCzuB5UDqIsAHhiKk2FDeUyez7NSrwAQu12PaJ0CMcH2qYkHk1GIZIC3-R7'
      };

      return { mappedUser, profile: profileRow };
    } catch (err) {
      console.error('Error loading user profile:', err);
      return null;
    }
  };

  const fetchAchievements = async (userId: string) => {
    try {
      const { data: userAch, error } = await supabase
        .from('user_achievements')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching user achievements:', error);
        return;
      }

      const unlockedMap = new Map<string, string>();
      if (userAch) {
        userAch.forEach(ua => {
          unlockedMap.set(ua.achievement_id, ua.unlocked_at);
        });
      }

      const mappedAchievements = PRE_SEEDED_ACHIEVEMENTS.map(ach => {
        const isUnlocked = unlockedMap.has(ach.id);
        const unlockedAtTime = unlockedMap.get(ach.id);
        return {
          ...ach,
          unlocked: isUnlocked,
          unlockedAt: isUnlocked && unlockedAtTime ? new Date(unlockedAtTime).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : ach.unlockedAt
        };
      });

      setAchievements(mappedAchievements);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchAdminData = async () => {
    try {
      const { data: allProfiles, error: profErr } = await supabase
        .from('profiles')
        .select('*')
        .order('joined_date', { ascending: false });

      if (profErr) {
        console.error('Error fetching admin profiles:', profErr);
      } else if (allProfiles) {
        const { data: allAttempts, error: attErr } = await supabase
          .from('quiz_attempts')
          .select('*');

        const attemptsByUserId = new Map<string, any[]>();
        if (allAttempts) {
          allAttempts.forEach(att => {
            const list = attemptsByUserId.get(att.user_id) || [];
            list.push(att);
            attemptsByUserId.set(att.user_id, list);
          });
        }

        const mappedUsers = allProfiles.map((p): User => {
          const uAttempts = attemptsByUserId.get(p.id) || [];
          const biologyAttempts = uAttempts.filter(a => a.subject === 'Biology');
          const physicsAttempts = uAttempts.filter(a => a.subject === 'Physics');
          const chemistryAttempts = uAttempts.filter(a => a.subject === 'Chemistry');

          const biologyMCQs = biologyAttempts.reduce((sum, a) => sum + a.total, 0);
          const physicsMCQs = physicsAttempts.reduce((sum, a) => sum + a.total, 0);
          const chemistryMCQs = chemistryAttempts.reduce((sum, a) => sum + a.total, 0);

          const biologyCorrect = biologyAttempts.reduce((sum, a) => sum + a.score, 0);
          const physicsCorrect = physicsAttempts.reduce((sum, a) => sum + a.score, 0);
          const chemistryCorrect = chemistryAttempts.reduce((sum, a) => sum + a.score, 0);

          const biologyAcc = biologyMCQs > 0 ? Math.round((biologyCorrect / biologyMCQs) * 100) : 0;
          const physicsAcc = physicsMCQs > 0 ? Math.round((physicsCorrect / physicsMCQs) * 100) : 0;
          const chemistryAcc = chemistryMCQs > 0 ? Math.round((chemistryCorrect / chemistryMCQs) * 100) : 0;

          const uniqueBioChapters = new Set(biologyAttempts.map(a => a.chapter_title)).size;
          const uniquePhysChapters = new Set(physicsAttempts.map(a => a.chapter_title)).size;
          const uniqueChemChapters = new Set(chemistryAttempts.map(a => a.chapter_title)).size;

          const biologyProgress = Math.min(100, uniqueBioChapters * 100);
          const physicsProgress = Math.min(100, uniquePhysChapters * 100);
          const chemistryProgress = Math.min(100, uniqueChemChapters * 100);

          const overallProgress = Math.round((biologyProgress + physicsProgress + chemistryProgress) / 3);

          return {
            id: p.id,
            name: p.name,
            email: p.email,
            role: p.role,
            institution: p.institution || '',
            classGroup: p.class_group || '',
            status: p.status === 'Approved' ? 'Active' : (p.status === 'Suspended' ? 'Suspended' : 'Offline'),
            joinedDate: p.joined_date ? new Date(p.joined_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Today',
            overallProgress,
            biologyProgress,
            physicsProgress,
            chemistryProgress,
            biologyMCQs,
            physicsMCQs,
            chemistryMCQs,
            biologyAcc,
            physicsAcc,
            chemistryAcc,
            avatarUrl: p.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMSFtgiNw4N8tEAp5nELDgzJ_autdfZ-kfzq9XfOf4_raBjdcpbqOssPENHoddAcxOa-VER7hnABS_DyRk4q5PtLiT6I028HaF9wHgRZUe4yr8ZtXF387Yzwd6Odm_AuZcdTWKl0489dRgwSeo86Bq57cMD_yRRSY4mDdyKrobJttUBI1Ig3Tsilwuj_DN_TnadDcm9i-byS_KTU-9xCzuB5UDqIsAHhiKk2FDeUyez7NSrwAQu12PaJ0CMcH2qYkHk1GIZIC3-R7'
          };
        });

        setUsers(mappedUsers);
      }

      const { data: pendingProfiles, error: pendingErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('status', 'Pending')
        .order('joined_date', { ascending: false });

      if (pendingErr) {
        console.error('Error fetching pending profiles:', pendingErr);
      } else if (pendingProfiles) {
        const mappedRequests = pendingProfiles.map((p): RegistrationRequest => ({
          id: p.id,
          name: p.name,
          email: p.email,
          institution: p.institution || '',
          classGroup: p.class_group || '',
          submittedAt: p.joined_date ? new Date(p.joined_date).toLocaleString() : 'Just Now',
          status: 'Pending'
        }));
        setRequests(mappedRequests);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const syncCurrentUser = async (userId: string) => {
    const res = await loadUserProfileAndStats(userId);
    if (res) {
      const { mappedUser, profile: prof } = res;
      setCurrentUser(mappedUser);
      setProfile(prof);

      await fetchAchievements(userId);

      if (prof.role === 'admin' || prof.role === 'teacher') {
        await fetchAdminData();
      }

      if (prof.status === 'Pending') {
        setAuthTab('waiting');
      } else if (prof.status === 'Suspended') {
        setLoginError('This account is suspended. Please contact administrator.');
        setCurrentUser(null);
        setProfile(null);
        await supabase.auth.signOut();
      } else if (prof.status === 'Rejected') {
        setLoginError('Your admission request was rejected. Please contact administrator.');
        setCurrentUser(null);
        setProfile(null);
        await supabase.auth.signOut();
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        syncCurrentUser(session.user.id);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        await syncCurrentUser(session.user.id);
      } else {
        setCurrentUser(null);
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // --- UI Layout & Route States ---
  const [activeTab, setActiveTab] = useState<'dashboard' | 'biology' | 'physics' | 'chemistry' | 'glossary' | 'achievements' | 'admin'>('dashboard');
  const [authTab, setAuthTab] = useState<'login' | 'signup' | 'demo' | 'waiting'>('login');
  
  // Mobile navigation drawer toggle
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  // Night theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('so_night_mode') === 'true';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('so_night_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('so_night_mode', 'false');
    }
  }, [isDark]);
  
  // Search state in header (filters active content depending on current tab!)
  const [searchQuery, setSearchQuery] = useState('');
  
  // Reading chapter section selection
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const chapterRef = useRef<HTMLDivElement>(null);

  // Active quiz state
  const [quizState, setQuizState] = useState<null | {
    subject: string;
    chapterTitle: string;
    questions: QuizQuestion[];
    currentIndex: number;
    selectedIndex: number | null;
    isAnswered: boolean;
    score: number;
    isMixed: boolean;
  }>(null);

  // Confetti particles for correct answers
  const [confetti, setConfetti] = useState<{ id: number; color: string; left: number; delay: number }[]>([]);

  // Auth Inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpInstitution, setSignUpInstitution] = useState('');
  const [signUpGroup, setSignUpGroup] = useState('Class 9A');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  // Notifications
  const [notifications, setNotifications] = useState<string[]>([
    'Welcome back to Study Odyssey! Your streak is active.',
    'Pro Tip: Complete the Physics quiz to unlock the "Motion Pro" medal.'
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Admin Controls
  const [adminUserSearch, setAdminUserSearch] = useState('');
  const [adminRoleFilter, setAdminRoleFilter] = useState<'All' | 'student' | 'teacher'>('All');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Trigger confetti particles
  const triggerConfetti = () => {
    const colors = ['#0F4C81', '#10B981', '#FF9800', '#94f990', '#F43F5E', '#8ebdf9'];
    const particles = Array.from({ length: 40 }).map((_, idx) => ({
      id: Date.now() + idx,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100, // percentage left
      delay: Math.random() * 0.5
    }));
    setConfetti(particles);
    setTimeout(() => setConfetti([]), 3000);
  };

  // --- Handlers ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    const emailToFind = loginEmail.trim();
    const passwordToVerify = loginPassword.trim();
    
    if (!emailToFind) {
      setLoginError('Please enter your email address.');
      return;
    }
    
    if (!passwordToVerify) {
      setLoginError('Please enter your password.');
      return;
    }

    if (!isSupabaseConfigured) {
      // Local/Offline Login Fallback
      const found = users.find(u => u.email.toLowerCase() === emailToFind.toLowerCase());
      if (found) {
        if (found.status === 'Suspended') {
          setLoginError('This account is suspended. Please contact administrator.');
          return;
        }
        
        const hasCustomPassword = !!found.password;
        const isMatch = hasCustomPassword 
          ? passwordToVerify === found.password 
          : (passwordToVerify.toLowerCase() === found.email.split('@')[0].toLowerCase() || passwordToVerify === 'admin');

        if (!isMatch) {
          setLoginError('Incorrect password. Please try again.');
          return;
        }

        setCurrentUser(found);
        localStorage.setItem('so_current_user_v3', JSON.stringify(found));
        triggerToast(`Welcome back, ${found.name}!`);
      } else {
        setLoginError('User account not found. Please register or verify your credentials.');
      }
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailToFind,
        password: passwordToVerify
      });

      if (error) {
        setLoginError(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        await syncCurrentUser(data.user.id);
        triggerToast('Session started successfully.');
      }
    } catch (err: any) {
      setLoginError(err.message || 'An error occurred during login.');
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpName || !signUpEmail || !signUpInstitution || !signUpPassword) {
      triggerToast('Please fill out all fields.');
      return;
    }

    if (!isSupabaseConfigured) {
      // Local/Offline SignUp Fallback
      const newRequest: RegistrationRequest = {
        id: 'req_' + Date.now(),
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        institution: signUpInstitution,
        classGroup: signUpGroup,
        submittedAt: new Date().toLocaleString(),
        status: 'Pending'
      };

      const updated = [newRequest, ...requests];
      setRequests(updated);
      localStorage.setItem('so_requests_v3', JSON.stringify(updated));
      setAuthTab('waiting');
      triggerToast('Registration request submitted successfully.');
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: signUpEmail.trim(),
        password: signUpPassword,
        options: {
          data: {
            name: signUpName.trim()
          }
        }
      });

      if (error) {
        triggerToast('Registration failed: ' + error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        // Update profile in profiles table with meta fields
        const { error: profileErr } = await supabase
          .from('profiles')
          .update({
            institution: signUpInstitution,
            class_group: signUpGroup,
            role: 'student',
            status: 'Pending'
          })
          .eq('id', data.user.id);

        if (profileErr) {
          console.error('Error updating profile metadata:', profileErr);
        }

        setAuthTab('waiting');
        triggerToast('Registration request submitted successfully.');
      }
    } catch (err: any) {
      triggerToast('An error occurred during signup: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (user: User) => {
    if (!isSupabaseConfigured) {
      setCurrentUser(user);
      localStorage.setItem('so_current_user_v3', JSON.stringify(user));
      setActiveTab(user.role === 'admin' || user.role === 'teacher' ? 'admin' : 'dashboard');
      triggerToast(`Logged in as ${user.name} (${user.role.toUpperCase()})`);
      return;
    }
    triggerToast(`To login, use: ${user.email} with password as email prefix`);
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
    setProfile(null);
    localStorage.removeItem('so_current_user_v3');
    setLoginEmail('');
    setLoginPassword('');
    setAuthTab('login');
    setActiveTab('dashboard');
    triggerToast('Logged out successfully.');
  };

  const handleApproveRequest = async (req: RegistrationRequest) => {
    if (!isSupabaseConfigured) {
      const newUser: User = {
        id: 'usr_' + Date.now(),
        name: req.name,
        email: req.email,
        password: req.password,
        role: 'student',
        status: 'Active',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        overallProgress: 0,
        biologyProgress: 0,
        physicsProgress: 0,
        chemistryProgress: 0,
        biologyMCQs: 0,
        physicsMCQs: 0,
        chemistryMCQs: 0,
        biologyAcc: 0,
        physicsAcc: 0,
        chemistryAcc: 0,
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhd_uZLvNLN7sVBdUbckdiD-B5lqGXLZE5O3WYuIgv_qFul8ZdG1ACXMgH4IjyxsJK3iaoT7sJcFDdB4jO6OlBGLUOQ4s_QfOfoyK8iirTM6EGG1paB2BB_89AZRFUQhN1j9Gg9xInvDbeia3V3DIfCawbO2RIGS-4ITLyNHDKP9Jz_ZiK5dakAesqV5ZluOLLIbbtgyN_VvNqWCGBfZTfpQQurx8kspLlOwaVjx3FKAgiT1JmmBa2zh49czJUknT5-TmGnYc5uCts'
      };

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('so_users_v3', JSON.stringify(updatedUsers));

      const updatedRequests = requests.map(r => r.id === req.id ? { ...r, status: 'Approved' as const } : r);
      setRequests(updatedRequests);
      localStorage.setItem('so_requests_v3', JSON.stringify(updatedRequests));

      triggerToast(`Approved & registered ${req.name}!`);
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ status: 'Approved' })
        .eq('id', req.id);

      if (error) {
        triggerToast('Failed to approve request: ' + error.message);
        return;
      }

      triggerToast(`Approved & registered ${req.name}!`);
      await fetchAdminData();
    } catch (e: any) {
      triggerToast('Error: ' + e.message);
    }
  };

  const handleRejectRequest = async (reqId: string) => {
    if (!isSupabaseConfigured) {
      const updatedRequests = requests.map(r => r.id === reqId ? { ...r, status: 'Rejected' as const } : r);
      setRequests(updatedRequests);
      localStorage.setItem('so_requests_v3', JSON.stringify(updatedRequests));
      triggerToast('Registration request declined.');
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ status: 'Rejected' })
        .eq('id', reqId);

      if (error) {
        triggerToast('Failed to reject request: ' + error.message);
        return;
      }

      triggerToast('Registration request declined.');
      await fetchAdminData();
    } catch (e: any) {
      triggerToast('Error: ' + e.message);
    }
  };

  const handleStatusChange = async (userId: string, currentStatus: any) => {
    if (!isSupabaseConfigured) {
      const nextStatus = currentStatus === 'Suspended' ? 'Active' as const : 'Suspended' as const;
      const updatedUsers = users.map(u => u.id === userId ? { ...u, status: nextStatus } : u);
      setUsers(updatedUsers);
      localStorage.setItem('so_users_v3', JSON.stringify(updatedUsers));
      triggerToast(`User status updated to ${nextStatus}.`);
      return;
    }

    try {
      const nextStatus = currentStatus === 'Suspended' ? 'Approved' : 'Suspended';
      const { error } = await supabase
        .from('profiles')
        .update({ status: nextStatus })
        .eq('id', userId);

      if (error) {
        triggerToast('Failed to update status: ' + error.message);
        return;
      }

      triggerToast(`User status updated to ${nextStatus}.`);
      await fetchAdminData();
    } catch (e: any) {
      triggerToast('Error: ' + e.message);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      if (!isSupabaseConfigured) {
        const updatedUsers = users.filter(u => u.id !== userId);
        setUsers(updatedUsers);
        localStorage.setItem('so_users_v3', JSON.stringify(updatedUsers));
        triggerToast('User account deleted.');
        return;
      }

      try {
        const { error } = await supabase
          .from('profiles')
          .delete()
          .eq('id', userId);

        if (error) {
          triggerToast('Failed to delete user: ' + error.message);
          return;
        }

        triggerToast('User account deleted.');
        await fetchAdminData();
      } catch (e: any) {
        triggerToast('Error: ' + e.message);
      }
    }
  };

  const handleResetProgress = async () => {
    if (!currentUser) return;
    if (confirm('This will delete all your quiz attempts and achievements. Proceed?')) {
      if (!isSupabaseConfigured) {
        localStorage.removeItem('so_users_v3');
        localStorage.removeItem('so_current_user_v3');
        localStorage.removeItem('so_achievements_v3');
        localStorage.removeItem('so_requests_v3');
        localStorage.removeItem('so_glossary_v3');
        setUsers(PRE_SEEDED_USERS);
        setAchievements(PRE_SEEDED_ACHIEVEMENTS);
        setRequests(PRE_SEEDED_REQUESTS);
        setGlossary(PRE_SEEDED_GLOSSARY);
        const resetCurrentUser = PRE_SEEDED_USERS.find(u => u.id === currentUser.id);
        setCurrentUser(resetCurrentUser || null);
        if (resetCurrentUser) {
          localStorage.setItem('so_current_user_v3', JSON.stringify(resetCurrentUser));
        }
        setShowSettings(false);
        triggerToast('System mock data restored.');
        return;
      }

      try {
        setLoading(true);
        await supabase
          .from('quiz_attempts')
          .delete()
          .eq('user_id', currentUser.id);

        await supabase
          .from('user_achievements')
          .delete()
          .eq('user_id', currentUser.id);

        setShowSettings(false);
        triggerToast('Database progress reset complete.');
        await syncCurrentUser(currentUser.id);
      } catch (e: any) {
        triggerToast('Reset failed: ' + e.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Launch a standard chapter quiz
  const startChapterQuiz = (chapter: Chapter) => {
    setQuizState({
      subject: chapter.subject,
      chapterTitle: chapter.title,
      questions: chapter.quizQuestions,
      currentIndex: 0,
      selectedIndex: null,
      isAnswered: false,
      score: 0,
      isMixed: false
    });
  };

  // Launch a mix question quiz (from quick start)
  const startMixQuiz = () => {
    // Combine all questions across all chapters
    const allQuestions = PRE_SEEDED_CHAPTERS.flatMap(ch => 
      ch.quizQuestions.map(q => ({
        ...q,
        question: `[${ch.subject}] ${q.question}`
      }))
    );
    
    // Shuffle and pick 4 questions for demo
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 4);

    setQuizState({
      subject: 'General Science',
      chapterTitle: 'Mixed revision syllabus',
      questions: shuffled,
      currentIndex: 0,
      selectedIndex: null,
      isAnswered: false,
      score: 0,
      isMixed: true
    });
  };

  const handleSelectQuizOption = (optionIndex: number) => {
    if (!quizState || quizState.isAnswered) return;

    const currentQuestion = quizState.questions[quizState.currentIndex];
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    let newScore = quizState.score;

    if (isCorrect) {
      newScore += 1;
      triggerConfetti();
    }

    setQuizState(prev => prev ? {
      ...prev,
      selectedIndex: optionIndex,
      isAnswered: true,
      score: newScore
    } : null);
  };

  const handleNextQuizQuestion = () => {
    if (!quizState) return;

    const nextIdx = quizState.currentIndex + 1;
    if (nextIdx < quizState.questions.length) {
      setQuizState(prev => prev ? {
        ...prev,
        currentIndex: nextIdx,
        selectedIndex: null,
        isAnswered: false
      } : null);
    } else {
      // Quiz complete! Let's update user metrics & achievements in database/local
      if (currentUser) {
        const finalScore = quizState.score;
        const totalQ = quizState.questions.length;
        const correctPct = Math.round((finalScore / totalQ) * 100);

        if (!isSupabaseConfigured) {
          const isBio = quizState.subject === 'Biology';
          const isPhys = quizState.subject === 'Physics';
          const isChem = quizState.subject === 'Chemistry';

          const updatedUsers = users.map(u => {
            if (u.id === currentUser.id) {
              const newBioMCQs = isBio ? u.biologyMCQs + totalQ : u.biologyMCQs;
              const newPhysMCQs = isPhys ? u.physicsMCQs + totalQ : u.physicsMCQs;
              const newChemMCQs = isChem ? u.chemistryMCQs + totalQ : u.chemistryMCQs;

              const newBioCorr = isBio ? Math.round((u.biologyMCQs * (u.biologyAcc / 100)) + finalScore) : Math.round(u.biologyMCQs * (u.biologyAcc / 100));
              const newPhysCorr = isPhys ? Math.round((u.physicsMCQs * (u.physicsAcc / 100)) + finalScore) : Math.round(u.physicsMCQs * (u.physicsAcc / 100));
              const newChemCorr = isChem ? Math.round((u.chemistryMCQs * (u.chemistryAcc / 100)) + finalScore) : Math.round(u.chemistryMCQs * (u.chemistryAcc / 100));

              const newBioAcc = newBioMCQs > 0 ? Math.round((newBioCorr / newBioMCQs) * 100) : u.biologyAcc;
              const newPhysAcc = newPhysMCQs > 0 ? Math.round((newPhysCorr / newPhysMCQs) * 100) : u.physicsAcc;
              const newChemAcc = newChemMCQs > 0 ? Math.round((newChemCorr / newChemMCQs) * 100) : u.chemistryAcc;

              const newBioProg = isBio ? Math.min(100, u.biologyProgress + 25) : u.biologyProgress;
              const newPhysProg = isPhys ? Math.min(100, u.physicsProgress + 25) : u.physicsProgress;
              const newChemProg = isChem ? Math.min(100, u.chemistryProgress + 25) : u.chemistryProgress;

              const newOverallProg = Math.round((newBioProg + newPhysProg + newChemProg) / 3);

              return {
                ...u,
                overallProgress: newOverallProg,
                biologyProgress: newBioProg,
                physicsProgress: newPhysProg,
                chemistryProgress: newChemProg,
                biologyMCQs: newBioMCQs,
                physicsMCQs: newPhysMCQs,
                chemistryMCQs: newChemMCQs,
                biologyAcc: newBioAcc,
                physicsAcc: newPhysAcc,
                chemistryAcc: newChemAcc,
              };
            }
            return u;
          });

          setUsers(updatedUsers);
          localStorage.setItem('so_users_v3', JSON.stringify(updatedUsers));
          const nextCurrentUser = updatedUsers.find(u => u.id === currentUser.id);
          if (nextCurrentUser) {
            setCurrentUser(nextCurrentUser);
            localStorage.setItem('so_current_user_v3', JSON.stringify(nextCurrentUser));
          }

          if (correctPct >= 90) {
            let achievementIdToUnlock = '';
            if (quizState.subject === 'Chemistry') {
              achievementIdToUnlock = 'atom-smasher';
            } else if (quizState.subject === 'Biology') {
              achievementIdToUnlock = 'cell-master';
            }

            if (achievementIdToUnlock) {
              const updatedAchievements = achievements.map(ach => {
                if (ach.id === achievementIdToUnlock) {
                  return { ...ach, unlocked: true, unlockedAt: 'Just Now' };
                }
                return ach;
              });
              setAchievements(updatedAchievements);
              localStorage.setItem('so_achievements_v3', JSON.stringify(updatedAchievements));
              triggerToast(`New achievement unlocked!`);
            }
          }

          triggerToast(`Quiz completed! Score: ${finalScore}/${totalQ}`);
        } else {
          supabase
            .from('quiz_attempts')
            .insert({
              user_id: currentUser.id,
              subject: quizState.subject,
              chapter_title: quizState.chapterTitle,
              score: finalScore,
              total: totalQ
            })
            .then(async ({ error }) => {
              if (error) {
                console.error('Error saving quiz attempt:', error);
              } else {
                triggerToast(`Quiz completed! Score: ${finalScore}/${totalQ}`);
                await syncCurrentUser(currentUser.id);
              }
            });

          if (correctPct >= 90) {
            let achievementIdToUnlock = '';
            if (quizState.subject === 'Chemistry') {
              achievementIdToUnlock = 'atom-smasher';
            } else if (quizState.subject === 'Biology') {
              achievementIdToUnlock = 'cell-master';
            }

            if (achievementIdToUnlock) {
              supabase
                .from('user_achievements')
                .upsert({
                  user_id: currentUser.id,
                  achievement_id: achievementIdToUnlock
                })
                .then(({ error }) => {
                  if (error) {
                    console.error('Error unlocking achievement:', error);
                  } else {
                    triggerToast(`New achievement unlocked!`);
                    fetchAchievements(currentUser.id);
                  }
                });
            }
          }
        }
      }
      
      // Keep quiz screen on final results panel (currentIndex will equal length)
      setQuizState(prev => prev ? {
        ...prev,
        currentIndex: nextIdx
      } : null);
    }
  };

  const handleQuitQuiz = () => {
    setQuizState(null);
  };

  // Scroll to section helper in chapter reading view
  const scrollToChapterSection = (idx: number) => {
    setSelectedSectionIndex(idx);
    if (chapterRef.current) {
      chapterRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Dynamic Search Filters ---
  const activeChapter: Chapter | undefined = PRE_SEEDED_CHAPTERS.find(
    ch => ch.subject.toLowerCase() === activeTab.toLowerCase()
  );

  // Filter glossary based on search and subject filter tab
  const [glossaryFilterSubject, setGlossaryFilterSubject] = useState<'All' | 'Biology' | 'Physics' | 'Chemistry'>('All');
  const filteredGlossary = glossary.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = glossaryFilterSubject === 'All' || item.subject === glossaryFilterSubject;
    return matchesSearch && matchesSubject;
  });

  // Filter achievements based on search
  const filteredAchievements = achievements.filter(ach => {
    return ach.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           ach.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter admin students table
  const filteredAdminUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(adminUserSearch.toLowerCase()) || 
                          u.email.toLowerCase().includes(adminUserSearch.toLowerCase());
    const matchesRole = adminRoleFilter === 'All' || u.role === adminRoleFilter;
    return matchesSearch && matchesRole;
  });

  // Auto redirect / match tab click logic helper
  const navigateToChapter = (subject: 'Biology' | 'Physics' | 'Chemistry') => {
    setActiveTab(subject.toLowerCase() as any);
    setSelectedSectionIndex(0);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-text-main antialiased selection:bg-physics-deep-blue/20 flex flex-col relative overflow-hidden">
      
      {/* Toast Notification Popups */}
      <AnimatePresence>
        {successToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1E293B] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-outline-variant/20"
          >
            <Sparkles className="w-5 h-5 text-chemistry-amber animate-pulse" />
            <span className="font-medium text-sm">{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONFETTI EFFECT ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="confetti"
            style={{
              left: `${c.left}%`,
              backgroundColor: c.color,
              top: `-10px`,
              animationDelay: `${c.delay}s`
            }}
          />
        ))}
      </div>

      {/* =======================================================================
          UNAUTHENTICATED LANDING / REGISTRATION / LOGIN SHELL 
          ======================================================================= */}
      {!currentUser && (
        <div className="pattern-bg min-h-screen flex flex-col">
          {/* Header */}
          <header className="w-full py-6 px-6 md:px-16 flex justify-between items-center z-40 absolute top-0">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-physics-deep-blue text-4xl animate-bounce">rocket_launch</span>
              <div>
                <h1 className="font-hanken text-2xl font-extrabold text-physics-deep-blue tracking-tight leading-none">Study Odyssey</h1>
                <p className="font-mono text-[11px] text-text-muted mt-1 uppercase tracking-widest">NCERT Class 9 Revision</p>
              </div>
            </div>

            {/* Night Theme Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-white/80 dark:bg-slate-800 shadow-sm hover:shadow transition-all text-text-main hover:text-physics-deep-blue border border-outline-variant/10 active:scale-95 z-50"
              title={isDark ? "Switch to Light Theme" : "Switch to Night Theme"}
            >
              {isDark ? <Sun className="w-5 h-5 text-chemistry-amber" /> : <Moon className="w-5 h-5 text-physics-deep-blue" />}
            </button>
          </header>

          {/* Main Hero and Forms */}
          <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-6 md:px-16">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Hero & Value Propositions */}
              <div className="space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-primary-fixed rounded-full border border-primary-fixed-dim/20">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">science</span>
                  <span className="font-mono text-[11px] text-primary uppercase tracking-wider font-semibold">Science Syllabus Ready</span>
                </div>
                
                <h2 className="font-hanken text-4xl md:text-5xl font-black text-physics-deep-blue leading-tight tracking-tight">
                  Master Class 9 Science. <br />
                  <span className="text-chemistry-amber">The Odyssey Way.</span>
                </h2>
                
                <p className="font-sans text-base md:text-lg text-text-muted max-w-lg leading-relaxed">
                  Transform your NCERT revision into an engaging journey. Track your progress across Physics, Chemistry, and Biology, unlock achievements, and master concepts with precision.
                </p>

                {/* Feature Mini Bento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg">
                  <div className="glass-card p-4 rounded-xl flex items-start gap-3 transition-transform hover:-translate-y-1">
                    <div className="p-2 bg-surface-container-highest rounded-lg text-physics-deep-blue">
                      <span className="material-symbols-outlined text-2xl">analytics</span>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-bold text-physics-deep-blue uppercase tracking-wider">Visual Progress</h3>
                      <p className="text-[12px] text-text-muted mt-0.5 leading-snug">Track chapter mastery rings and precision percentages.</p>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-xl flex items-start gap-3 transition-transform hover:-translate-y-1">
                    <div className="p-2 bg-surface-container-highest rounded-lg text-biology-leaf-green">
                      <span className="material-symbols-outlined text-2xl">emoji_events</span>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-bold text-physics-deep-blue uppercase tracking-wider">Achievements</h3>
                      <p className="text-[12px] text-text-muted mt-0.5 leading-snug">Earn gamified milestone medals for top scores.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interaction Card */}
              <div className="relative w-full max-w-md mx-auto lg:ml-auto">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-tertiary-fixed-dim rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
                
                <div className="glass-card rounded-2xl p-6 relative z-10 shadow-xl border border-white/50 bg-white/90">
                  
                  {/* Auth Tabs Header */}
                  {authTab !== 'waiting' && (
                    <div className="flex border-b border-surface-variant mb-6">
                      <button 
                        onClick={() => setAuthTab('login')}
                        className={`flex-1 pb-3 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all ${authTab === 'login' ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-primary'}`}
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => setAuthTab('signup')}
                        className={`flex-1 pb-3 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all ${authTab === 'signup' ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-primary'}`}
                      >
                        Sign Up
                      </button>
                    </div>
                  )}

                  {/* Tab Contents */}
                  <AnimatePresence mode="wait">
                    {authTab === 'login' && (
                      <motion.form 
                        key="login"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleLogin}
                        className="space-y-4 text-left"
                      >
                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Email Address</label>
                          <input 
                            type="email" 
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="student@school.edu"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Password</label>
                          <input 
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="••••••••"
                          />
                        </div>

                        {loginError && (
                          <div className="text-xs text-error font-medium bg-error-container/20 p-2 rounded-lg border border-error-container/30">
                            ⚠ {loginError}
                          </div>
                        )}

                        <div className="flex justify-between items-center pt-1 text-xs">
                          <label className="flex items-center gap-2 cursor-pointer text-text-muted hover:text-text-main">
                            <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant w-4 h-4" />
                            <span>Remember me</span>
                          </label>
                          <button 
                            type="button"
                            onClick={() => triggerToast('Forgot password logic can be requested from your teacher/administrator.')} 
                            className="text-primary font-medium hover:underline text-xs"
                          >
                            Forgot Password?
                          </button>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-physics-deep-blue text-white font-mono text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl hover:bg-primary transition-colors mt-4 shadow-md flex items-center justify-center gap-2 group active:scale-98"
                        >
                          Begin Session 
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </motion.form>
                    )}

                    {authTab === 'signup' && (
                      <motion.form 
                        key="signup"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSignUp}
                        className="space-y-4 text-left"
                      >
                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Full Name</label>
                          <input 
                            type="text" 
                            required
                            value={signUpName}
                            onChange={(e) => setSignUpName(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="Sarah Jenkins"
                          />
                        </div>
                        
                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Email Address</label>
                          <input 
                            type="email" 
                            required
                            value={signUpEmail}
                            onChange={(e) => setSignUpEmail(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="student@school.edu"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Password</label>
                          <input 
                            type="password" 
                            required
                            value={signUpPassword}
                            onChange={(e) => setSignUpPassword(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="••••••••"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">School/Institution Name</label>
                          <input 
                            type="text" 
                            required
                            value={signUpInstitution}
                            onChange={(e) => setSignUpInstitution(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm placeholder-text-muted/60"
                            placeholder="KV No. 1 or Public School"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 font-bold">Class / Batch Section</label>
                          <select 
                            value={signUpGroup}
                            onChange={(e) => setSignUpGroup(e.target.value)}
                            className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-physics-deep-blue focus:border-transparent transition-all outline-none text-sm"
                          >
                            <option value="Class 9A">Class 9A - Science Morning</option>
                            <option value="Class 9B">Class 9B - Science Evening</option>
                            <option value="Class 9C">Class 9C - Advanced Revision</option>
                          </select>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-physics-deep-blue text-white font-mono text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl hover:bg-primary transition-colors mt-4 shadow-md flex items-center justify-center gap-2 group active:scale-98"
                        >
                          Request Access 
                          <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                        </button>
                      </motion.form>
                    )}



                    {authTab === 'waiting' && (
                      <motion.div 
                        key="waiting"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-6 text-center space-y-5"
                      >
                        <div className="relative">
                          <div className="w-16 h-16 bg-[#ffdcbe] text-chemistry-amber rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl animate-spin">hourglass_top</span>
                          </div>
                          <div className="absolute inset-0 border-4 border-chemistry-amber rounded-full animate-ping opacity-20"></div>
                        </div>

                        <div>
                          <h3 className="font-hanken text-lg font-bold text-physics-deep-blue">Application Received</h3>
                          <p className="font-sans text-xs text-text-muted mt-2 max-w-[280px] mx-auto leading-relaxed">
                            Your revision account is currently pending administrator review. Once granted, you can login with your email address.
                          </p>
                        </div>

                        <div className="w-full bg-surface-container-low rounded-xl p-3 border border-surface-variant/40 flex items-center gap-3 text-left">
                          <span className="material-symbols-outlined text-text-muted text-xl">info</span>
                          <div>
                            <p className="font-mono text-[10px] font-bold text-physics-deep-blue uppercase tracking-wider">Status: <span className="text-chemistry-amber">Pending Admin Approval</span></p>
                            <p className="text-[10px] text-text-muted">SARAH JENKINS & MARCUS PATEL have matching requests seeded.</p>
                          </div>
                        </div>

                        <button 
                          onClick={() => setAuthTab('login')}
                          className="text-xs font-mono font-bold text-primary hover:underline"
                        >
                          Return to Login
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </main>
        </div>
      )}


      {/* =======================================================================
          AUTHENTICATED APPLICATION LAYOUT
          ======================================================================= */}
      {currentUser && (
        <div className="flex-grow flex flex-col">
          
          {/* ----------------- Top Navigation Bar ----------------- */}
          <header className="flex justify-between items-center px-6 md:px-8 w-full h-16 sticky top-0 z-30 bg-white shadow-sm border-b border-surface-container">
            <div className="flex items-center gap-3">
              {/* Mobile Burger Menu Icon */}
              <button 
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="p-1.5 rounded-lg hover:bg-surface-container md:hidden text-text-main transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-physics-deep-blue text-3xl">rocket_launch</span>
                <span className="font-hanken text-xl font-extrabold text-physics-deep-blue tracking-tight leading-none">Study Odyssey</span>
              </div>
            </div>

            {/* Global Search Bar (Dynamic depending on tab!) */}
            <div className="flex-1 max-w-md mx-6 relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[18px]">search</span>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'glossary' ? 'Search glossary definitions...' :
                  activeTab === 'achievements' ? 'Search achievements...' : 'Search subjects, facts or terminologies...'
                }
                className="w-full bg-surface-container-low border border-transparent rounded-full py-2 pl-9 pr-4 focus:ring-2 focus:ring-physics-deep-blue focus:bg-white transition-all text-xs font-sans outline-none text-text-main placeholder-text-muted/60"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              {/* Night Theme Toggle */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-text-muted hover:text-physics-deep-blue relative"
                title={isDark ? "Switch to Light Theme" : "Switch to Night Theme"}
              >
                {isDark ? <Sun className="w-5 h-5 text-chemistry-amber" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Help Center Shortcut */}
              <button 
                onClick={() => setShowHelp(true)}
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-text-muted hover:text-physics-deep-blue relative group"
                title="Help Center"
              >
                <HelpCircle className="w-5 h-5" />
              </button>

              {/* Notification bell */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-text-muted hover:text-physics-deep-blue relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-error-rose rounded-full"></span>
                </button>
                
                {/* Custom Notifications Dropdown */}
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-surface-variant p-4 z-40 text-left"
                    >
                      <h4 className="font-mono text-xs font-bold text-physics-deep-blue uppercase tracking-wider mb-2 border-b pb-1 flex justify-between items-center">
                        <span>Notifications</span>
                        <span className="text-[9px] bg-[#ffdad6] text-error px-1.5 py-0.5 rounded-full font-bold">2 Info</span>
                      </h4>
                      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                        {notifications.map((n, i) => (
                          <div key={i} className="flex gap-2 items-start text-xs border-b border-surface-container-low pb-2 last:border-0 last:pb-0">
                            <span className="material-symbols-outlined text-chemistry-amber text-[16px] mt-0.5">campaign</span>
                            <p className="text-text-main font-sans leading-snug">{n}</p>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => {
                          setNotifications(['Welcome to Study Odyssey!']);
                          triggerToast('Notifications cleared.');
                          setShowNotifications(false);
                        }}
                        className="w-full text-center text-[10px] font-mono text-primary font-bold hover:underline mt-2 pt-2 border-t block"
                      >
                        Clear Notification Log
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Settings / Restorer button */}
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-text-muted hover:text-physics-deep-blue"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* User Avatar & Profile details */}
              <div className="flex items-center gap-2 border-l border-surface-container pl-3 ml-1">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant shadow-sm bg-surface-container flex items-center justify-center text-xs font-mono font-bold text-physics-deep-blue">
                  <img 
                    alt="User profile avatar" 
                    className="w-full h-full object-cover" 
                    src={currentUser.avatarUrl} 
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span>{currentUser.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-bold text-physics-deep-blue leading-none truncate max-w-[120px]">{currentUser.name}</p>
                  <p className="text-[10px] text-text-muted capitalize leading-none mt-1">{currentUser.role}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-grow flex relative">
            
            {/* ----------------- Side Navigation Bar ----------------- */}
            {/* Responsive Sidebar for desktop and mobile */}
            <aside className={`w-64 flex-col py-6 bg-surface border-r border-outline-variant shrink-0 z-30 transition-transform duration-300 bg-[#f7f9fb]
              ${isMobileNavOpen ? 'flex fixed left-0 top-16 h-[calc(100vh-64px)] translate-x-0' : 'hidden md:flex md:static md:translate-x-0'}`}
            >
              <div className="flex-1 px-3 space-y-1">
                <button 
                  onClick={() => { setActiveTab('dashboard'); setIsMobileNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'dashboard' ? 'text-primary font-bold border-l-4 border-primary bg-surface-container-high' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'dashboard' ? "'FILL' 1" : "'FILL' 0" }}>dashboard</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Dashboard</span>
                </button>

                <button 
                  onClick={() => { navigateToChapter('Biology'); setIsMobileNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'biology' ? 'text-biology-leaf-green font-bold border-l-4 border-biology-leaf-green bg-biology-leaf-green/10' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">eco</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Biology</span>
                </button>

                <button 
                  onClick={() => { navigateToChapter('Physics'); setIsMobileNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'physics' ? 'text-physics-deep-blue font-bold border-l-4 border-physics-deep-blue bg-physics-deep-blue/10' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">science</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Physics</span>
                </button>

                <button 
                  onClick={() => { navigateToChapter('Chemistry'); setIsMobileNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'chemistry' ? 'text-chemistry-amber font-bold border-l-4 border-chemistry-amber bg-chemistry-amber/10' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">experiment</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Chemistry</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('glossary'); setIsMobileNavOpen(false); setSearchQuery(''); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'glossary' ? 'text-primary font-bold border-l-4 border-primary bg-surface-container-high' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'glossary' ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Glossary</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('achievements'); setIsMobileNavOpen(false); setSearchQuery(''); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'achievements' ? 'text-primary font-bold border-l-4 border-primary bg-surface-container-high' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'achievements' ? "'FILL' 1" : "'FILL' 0" }}>emoji_events</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Achievements</span>
                </button>

                {/* Admin Only Tab */}
                {(currentUser.role === 'admin' || currentUser.role === 'teacher') && (
                  <button 
                    onClick={() => { setActiveTab('admin'); setIsMobileNavOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'admin' ? 'text-primary font-bold border-l-4 border-primary bg-[#ffdad6] text-error' : 'text-text-muted hover:bg-surface-container-low hover:translate-x-0.5'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'admin' ? "'FILL' 1" : "'FILL' 0" }}>admin_panel_settings</span>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">Admin Panel</span>
                  </button>
                )}
              </div>

              {/* SideBar Bottom Actions */}
              <div className="px-4 mt-auto pt-4 border-t border-outline-variant space-y-4">
                <button 
                  onClick={() => { startMixQuiz(); setIsMobileNavOpen(false); }}
                  className="w-full py-2.5 px-4 bg-physics-deep-blue text-white rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-sm flex items-center justify-center gap-2 animate-pulse active:scale-95"
                >
                  <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                  Start Revision
                </button>

                <div className="space-y-1.5">
                  <button 
                    onClick={() => { setShowHelp(true); setIsMobileNavOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-xs text-text-muted hover:bg-surface-container-low transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">help</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider">Help Center</span>
                  </button>
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-xs text-error hover:bg-error-container/20 transition-all border border-transparent hover:border-error-container/30"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider">Logout</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Application Container */}
            <main className="flex-1 overflow-y-auto p-6 md:p-8 w-full max-w-7xl mx-auto">
              
              {/* Custom Settings Modal Toggle */}
              {showSettings && (
                <div className="mb-6 p-4 bg-white rounded-xl border border-[#ffb870] shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-chemistry-amber"></div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-physics-deep-blue uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">construction</span>
                      Odyssey Testing Settings
                    </h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {isSupabaseConfigured 
                        ? 'You are connected to Supabase. This will delete all your custom database quiz attempts and unlocked achievements to restore default state.'
                        : 'You are running in Offline Demo Mode. This will clear browser local revision cache and restore default pre-seeded state.'
                      }
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={handleResetProgress}
                      className="bg-chemistry-amber hover:bg-[#ffa643] text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      {isSupabaseConfigured ? 'Reset Cloud Progress' : 'Reset Local Storage'}
                    </button>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="border border-outline px-3 py-1.5 rounded-full text-xs font-mono transition-all text-text-muted hover:bg-surface-container-low"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                
                {/* -----------------------------------------------------------------
                    DASHBOARD SCREEN VIEW 
                    ----------------------------------------------------------------- */}
                {activeTab === 'dashboard' && (
                  <motion.div 
                    key="dashboard"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-8"
                  >
                    {/* Welcome Banner */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
                      <div className="text-left">
                        <h1 className="font-hanken text-3xl md:text-4xl font-extrabold text-text-main leading-tight tracking-tight">
                          Hi, {currentUser.name}
                        </h1>
                        <p className="text-sm md:text-base text-text-muted mt-1">Ready to continue your revision Odyssey today?</p>
                      </div>

                      {/* Overall Progress Bento Widget */}
                      <div className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex items-center gap-6 min-w-[280px]">
                        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                            <circle 
                              className="text-physics-deep-blue stroke-current transition-all duration-1000 ease-in-out" 
                              cx="50" 
                              cy="50" 
                              fill="transparent" 
                              r="40" 
                              strokeWidth="8"
                              strokeDasharray="251.2"
                              strokeDashoffset={251.2 - (251.2 * currentUser.overallProgress) / 100}
                              strokeLinecap="round"
                            ></circle>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-sm font-bold text-text-main leading-none">{currentUser.overallProgress}%</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <h3 className="font-mono text-[10px] text-text-muted mb-1 uppercase tracking-wider font-bold">Overall Journey</h3>
                          <p className="font-sans text-sm font-bold text-text-main">
                            {Math.round(1600 * currentUser.overallProgress / 100)} / 1,600 MCQs
                          </p>
                          <button 
                            onClick={() => {
                              triggerToast(`Overall mastery represents cumulative statistics across syllabus chapters.`);
                            }}
                            className="mt-1.5 text-physics-deep-blue font-mono text-[11px] font-bold flex items-center gap-1 hover:underline"
                          >
                            View details <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subject Mastery Grids */}
                    <div className="space-y-4 text-left">
                      <h2 className="font-hanken text-xl md:text-2xl font-bold text-text-main">Subject Mastery</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Biology Mastery Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-biology-leaf-green opacity-[0.03] rounded-bl-full transition-transform group-hover:scale-110"></div>
                          <div className="w-full flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-biology-leaf-green/10 rounded-xl text-biology-leaf-green">
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                              </div>
                              <span className="font-hanken font-bold text-lg text-text-main">Biology</span>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-biology-leaf-green bg-biology-leaf-green/10 px-2.5 py-0.5 rounded-full">{currentUser.biologyAcc}% Acc</span>
                          </div>

                          <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="9"></circle>
                              <circle 
                                className="text-biology-leaf-green stroke-current transition-all duration-1000 ease-in-out" 
                                cx="50" 
                                cy="50" 
                                fill="transparent" 
                                r="40" 
                                strokeWidth="9"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * currentUser.biologyProgress) / 100}
                                strokeLinecap="round"
                              ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-mono text-sm font-bold text-text-main leading-none">{currentUser.biologyProgress}%</span>
                            </div>
                          </div>

                          <p className="text-xs text-text-muted mb-4 font-sans">{currentUser.biologyMCQs} / 500 MCQs answered</p>
                          <button 
                            onClick={() => navigateToChapter('Biology')}
                            className="w-full py-2.5 border-2 border-biology-leaf-green text-biology-leaf-green rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-biology-leaf-green hover:text-white transition-all"
                          >
                            Resume Biology
                          </button>
                        </div>

                        {/* Physics Mastery Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-physics-deep-blue opacity-[0.03] rounded-bl-full transition-transform group-hover:scale-110"></div>
                          <div className="w-full flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-physics-deep-blue/10 rounded-xl text-physics-deep-blue">
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                              </div>
                              <span className="font-hanken font-bold text-lg text-text-main">Physics</span>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-physics-deep-blue bg-physics-deep-blue/10 px-2.5 py-0.5 rounded-full">{currentUser.physicsAcc}% Acc</span>
                          </div>

                          <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="9"></circle>
                              <circle 
                                className="text-physics-deep-blue stroke-current transition-all duration-1000 ease-in-out" 
                                cx="50" 
                                cy="50" 
                                fill="transparent" 
                                r="40" 
                                strokeWidth="9"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * currentUser.physicsProgress) / 100}
                                strokeLinecap="round"
                              ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-mono text-sm font-bold text-text-main leading-none">{currentUser.physicsProgress}%</span>
                            </div>
                          </div>

                          <p className="text-xs text-text-muted mb-4 font-sans">{currentUser.physicsMCQs} / 600 MCQs answered</p>
                          <button 
                            onClick={() => navigateToChapter('Physics')}
                            className="w-full py-2.5 border-2 border-physics-deep-blue text-physics-deep-blue rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-physics-deep-blue hover:text-white transition-all"
                          >
                            Resume Physics
                          </button>
                        </div>

                        {/* Chemistry Mastery Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-chemistry-amber opacity-[0.03] rounded-bl-full transition-transform group-hover:scale-110"></div>
                          <div className="w-full flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-chemistry-amber/10 rounded-xl text-chemistry-amber">
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>experiment</span>
                              </div>
                              <span className="font-hanken font-bold text-lg text-text-main">Chemistry</span>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-chemistry-amber bg-chemistry-amber/10 px-2.5 py-0.5 rounded-full">{currentUser.chemistryAcc}% Acc</span>
                          </div>

                          <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="9"></circle>
                              <circle 
                                className="text-chemistry-amber stroke-current transition-all duration-1000 ease-in-out" 
                                cx="50" 
                                cy="50" 
                                fill="transparent" 
                                r="40" 
                                strokeWidth="9"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * currentUser.chemistryProgress) / 100}
                                strokeLinecap="round"
                              ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-mono text-sm font-bold text-text-main leading-none">{currentUser.chemistryProgress}%</span>
                            </div>
                          </div>

                          <p className="text-xs text-text-muted mb-4 font-sans">{currentUser.chemistryMCQs} / 500 MCQs answered</p>
                          <button 
                            onClick={() => navigateToChapter('Chemistry')}
                            className="w-full py-2.5 border-2 border-chemistry-amber text-chemistry-amber rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-chemistry-amber hover:text-white transition-all"
                          >
                            Resume Chemistry
                          </button>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Section: Recent Achievements & Quick start mixed test */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Unlocked / Locked Achievements Box */}
                      <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container text-left">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="font-hanken text-lg font-bold text-text-main">Recent achievements</h2>
                          <button 
                            onClick={() => setActiveTab('achievements')}
                            className="font-mono text-xs font-bold text-physics-deep-blue hover:underline"
                          >
                            View All
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {achievements.slice(0, 4).map((ach) => (
                            <div 
                              key={ach.id}
                              className={`flex flex-col items-center text-center p-3 rounded-xl bg-[#f7f9fb] transition-all group hover:bg-[#eceef0] border ${ach.unlocked ? 'border-transparent' : 'border-dashed border-outline-variant/60 opacity-60 grayscale'}`}
                            >
                              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${ach.unlocked ? ach.gradient : 'from-surface-variant to-outline-variant'} flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform`}>
                                <span className={`material-symbols-outlined text-white text-[24px]`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                  {ach.unlocked ? ach.icon : 'lock'}
                                </span>
                              </div>
                              <h4 className="font-mono text-[10px] text-text-main font-bold leading-tight truncate w-full">{ach.title}</h4>
                              <p className="text-[9px] text-text-muted mt-0.5 truncate w-full">
                                {ach.unlocked ? (ach.unlockedAt || 'Unlocked') : ach.subject}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mixed Quick Start Box */}
                      <div className="bg-gradient-to-br from-physics-deep-blue to-primary rounded-2xl p-5 shadow-lg text-white flex flex-col justify-between relative overflow-hidden group text-left">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white opacity-[0.07] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-chemistry-amber font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                            <h2 className="font-hanken text-lg font-bold">Quick Start</h2>
                          </div>
                          <p className="text-xs text-white/95 leading-relaxed">
                            Jump straight into a mixed 10-question quiz covering your weakest topics to boost your overall accuracy.
                          </p>
                        </div>

                        <button 
                          onClick={startMixQuiz}
                          className="w-full py-3 bg-white text-physics-deep-blue rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-surface-bright shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6 relative z-10"
                        >
                          Start Mix Quiz
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>

                    </div>

                  </motion.div>
                )}


                {/* -----------------------------------------------------------------
                    BIOLOGY / PHYSICS / CHEMISTRY SYLLABUS NOTES SCREEN 
                    ----------------------------------------------------------------- */}
                {['biology', 'physics', 'chemistry'].includes(activeTab) && activeChapter && (
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
                  >
                    
                    {/* Notes Content Pane */}
                    <div className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-surface-container p-6 md:p-8">
                      
                      {/* Chapter Header */}
                      <div className="mb-8 text-left pb-6 border-b border-surface-container-low" ref={chapterRef}>
                        <span className={`inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider mb-3
                          ${activeTab === 'biology' ? 'bg-biology-leaf-green/10 text-biology-leaf-green' : 
                            activeTab === 'physics' ? 'bg-physics-deep-blue/10 text-physics-deep-blue' : 
                            'bg-chemistry-amber/10 text-chemistry-amber'}`}
                        >
                          {activeChapter.subject} - Chapter {activeChapter.chapterNumber}
                        </span>
                        
                        <h1 className="font-hanken text-3xl md:text-4xl font-extrabold text-text-main leading-tight tracking-tight mt-1">
                          {activeChapter.title}
                        </h1>
                        <p className="text-sm md:text-base text-text-muted mt-2 font-sans">{activeChapter.subtitle}</p>
                      </div>

                      {/* Segmented Notes Content display */}
                      <div className="space-y-6">
                        {activeChapter.contents.map((sec, idx) => (
                          <div 
                            key={idx} 
                            className={`p-4 rounded-xl transition-all border ${selectedSectionIndex === idx ? 'bg-surface-bright border-outline-variant/60 shadow-xs' : 'border-transparent'}`}
                          >
                            <h3 className="font-hanken text-base font-bold text-physics-deep-blue mb-2">{sec.title}</h3>
                            <p className="text-xs md:text-sm text-text-main leading-relaxed font-sans whitespace-pre-wrap">
                              {sec.content}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Interactive concept details drawer specific to chapter */}
                      <div className="mt-8 pt-6 border-t border-surface-container-low text-left">
                        <div className="bg-[#f2f4f6] rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h4 className="font-mono text-[10px] font-bold text-physics-deep-blue uppercase tracking-wider flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px]">menu_book</span>
                              Interactive Active Recall Challenge
                            </h4>
                            <p className="text-xs text-text-muted mt-1 leading-relaxed">
                              Ready to test your comprehension? Revise the exact Class 9 NCERT curriculum questions.
                            </p>
                          </div>
                          <button 
                            onClick={() => startChapterQuiz(activeChapter)}
                            className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-md transition-all flex items-center gap-1 shrink-0
                              ${activeTab === 'biology' ? 'bg-biology-leaf-green hover:bg-secondary' : 
                                activeTab === 'physics' ? 'bg-physics-deep-blue hover:bg-primary-container' : 
                                'bg-chemistry-amber hover:bg-tertiary-container'}`}
                          >
                            Start Unit Quiz
                            <span className="material-symbols-outlined text-[16px]">quiz</span>
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Right-pane Contents Sidebar & Quick Fact */}
                    <div className="lg:col-span-3 space-y-6">
                      
                      <div className="sticky top-20 bg-white rounded-2xl shadow-xs border border-surface-container p-5">
                        <h3 className="font-hanken text-base font-bold text-text-main mb-4 flex items-center gap-2 border-b pb-2">
                          <span className={`material-symbols-outlined ${activeTab === 'biology' ? 'text-biology-leaf-green' : activeTab === 'physics' ? 'text-physics-deep-blue' : 'text-chemistry-amber'}`}>list</span>
                          Syllabus Index
                        </h3>
                        
                        <ul className="flex flex-col gap-2 font-sans text-xs">
                          {activeChapter.contents.map((sec, idx) => (
                            <li key={idx}>
                              <button 
                                onClick={() => scrollToChapterSection(idx)}
                                className={`w-full text-left py-2 px-3 rounded-lg transition-all flex items-center gap-2 font-medium ${selectedSectionIndex === idx ? (activeTab === 'biology' ? 'bg-biology-leaf-green/10 text-biology-leaf-green' : activeTab === 'physics' ? 'bg-physics-deep-blue/10 text-physics-deep-blue' : 'bg-chemistry-amber/10 text-chemistry-amber') : 'text-text-muted hover:bg-surface-container-low hover:text-text-main'}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${selectedSectionIndex === idx ? (activeTab === 'biology' ? 'bg-biology-leaf-green' : activeTab === 'physics' ? 'bg-physics-deep-blue' : 'bg-chemistry-amber') : 'bg-transparent'}`}></span>
                                <span className="truncate">{sec.title}</span>
                              </button>
                            </li>
                          ))}
                        </ul>

                        {/* Quick Fact Component */}
                        <div className="mt-6 pt-5 border-t border-surface-container-low">
                          <div className={`p-4 rounded-xl flex items-start gap-2.5 border text-left
                            ${activeTab === 'biology' ? 'bg-biology-leaf-green/5 border-biology-leaf-green/20' : 
                              activeTab === 'physics' ? 'bg-physics-deep-blue/5 border-physics-deep-blue/20' : 
                              'bg-chemistry-amber/5 border-chemistry-amber/20'}`}
                          >
                            <span className={`material-symbols-outlined mt-0.5
                              ${activeTab === 'biology' ? 'text-biology-leaf-green' : activeTab === 'physics' ? 'text-physics-deep-blue' : 'text-chemistry-amber'}`}
                            >
                              info
                            </span>
                            <div>
                              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-main">Quick Fact</p>
                              <p className="text-[11px] text-text-muted mt-1 leading-relaxed font-sans">
                                {activeChapter.quickFact}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Extra Quiz Button */}
                        <button 
                          onClick={() => startChapterQuiz(activeChapter)}
                          className={`w-full py-2.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider text-white mt-4 shadow-sm transition-all flex items-center justify-center gap-1
                            ${activeTab === 'biology' ? 'bg-biology-leaf-green hover:bg-secondary' : 
                              activeTab === 'physics' ? 'bg-physics-deep-blue hover:bg-primary-container' : 
                              'bg-chemistry-amber hover:bg-tertiary-container'}`}
                        >
                          Start Chapter Quiz
                        </button>
                      </div>

                    </div>

                  </motion.div>
                )}


                {/* -----------------------------------------------------------------
                    GLOSSARY DICTIONARY VIEW
                    ----------------------------------------------------------------- */}
                {activeTab === 'glossary' && (
                  <motion.div 
                    key="glossary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <h1 className="font-hanken text-3xl font-extrabold text-text-main tracking-tight">Active recall Glossary</h1>
                      <p className="text-xs text-text-muted mt-1">Review standard definitions for Class 9 NCERT terminologies quickly.</p>
                    </div>

                    {/* Filter and Search box */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-surface-container flex flex-col md:flex-row justify-between items-center gap-4">
                      
                      {/* Filter category pills */}
                      <div className="flex gap-1.5 shrink-0">
                        {(['All', 'Biology', 'Physics', 'Chemistry'] as const).map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setGlossaryFilterSubject(sub)}
                            className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all border ${glossaryFilterSubject === sub ? 'bg-physics-deep-blue text-white border-physics-deep-blue' : 'bg-surface-container-low hover:bg-surface-container text-text-muted border-transparent'}`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>

                      {/* Embedded mobile search bar helper */}
                      <div className="relative w-full md:max-w-xs">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[16px]">search</span>
                        <input 
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search terminologies..."
                          className="w-full bg-surface-container-low border border-transparent rounded-full py-2 pl-9 pr-4 focus:ring-2 focus:ring-physics-deep-blue focus:bg-white transition-all text-xs font-sans outline-none text-text-main"
                        />
                      </div>
                    </div>

                    {/* Term Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {filteredGlossary.map((item) => (
                        <div 
                          key={item.id}
                          className="bg-white p-4 rounded-2xl border border-surface-container shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5 relative group"
                        >
                          <span className={`absolute top-4 right-4 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full
                            ${item.subject === 'Biology' ? 'bg-biology-leaf-green/10 text-biology-leaf-green' : 
                              item.subject === 'Physics' ? 'bg-physics-deep-blue/10 text-physics-deep-blue' : 
                              'bg-chemistry-amber/10 text-chemistry-amber'}`}
                          >
                            {item.subject}
                          </span>
                          
                          <h3 className="font-hanken font-bold text-base text-physics-deep-blue mb-2 pr-16">{item.term}</h3>
                          <p className="text-xs text-text-muted font-sans leading-relaxed">{item.definition}</p>
                        </div>
                      ))}

                      {filteredGlossary.length === 0 && (
                        <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-surface-container text-text-muted text-xs font-mono">
                          No matching glossary terminologies found.
                        </div>
                      )}
                    </div>

                  </motion.div>
                )}


                {/* -----------------------------------------------------------------
                    ACHIEVEMENTS TAB VIEW 
                    ----------------------------------------------------------------- */}
                {activeTab === 'achievements' && (
                  <motion.div 
                    key="achievements"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <h1 className="font-hanken text-3xl font-extrabold text-text-main tracking-tight">Milestone achievements</h1>
                      <p className="text-xs text-text-muted mt-1">Unlock gamified achievements by completing revision tests with top scores.</p>
                    </div>

                    {/* Stats overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-2xl border border-surface-container flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">emoji_events</span>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">Total Achievements</p>
                          <p className="font-mono text-base font-bold text-physics-deep-blue">{achievements.length}</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-surface-container flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-success-emerald/10 text-success-emerald flex items-center justify-center">
                          <span className="material-symbols-outlined">stars</span>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">Unlocked Medals</p>
                          <p className="font-mono text-base font-bold text-success-emerald">
                            {achievements.filter(a => a.unlocked).length}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-surface-container flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-outline-variant/10 text-text-muted flex items-center justify-center">
                          <span className="material-symbols-outlined">lock</span>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">Locked Targets</p>
                          <p className="font-mono text-base font-bold text-text-main">
                            {achievements.filter(a => !a.unlocked).length}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Achievements List Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredAchievements.map((ach) => (
                        <div 
                          key={ach.id}
                          className={`bg-white p-4 rounded-2xl border border-surface-container shadow-xs flex items-center gap-4 relative overflow-hidden transition-all hover:shadow-sm ${!ach.unlocked && 'opacity-70'}`}
                        >
                          <div className={`w-14 h-14 shrink-0 rounded-full bg-gradient-to-br ${ach.unlocked ? ach.gradient : 'from-surface-variant to-outline-variant'} flex items-center justify-center text-white shadow-sm`}>
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                              {ach.unlocked ? ach.icon : 'lock'}
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-sans font-bold text-sm text-physics-deep-blue truncate">{ach.title}</h3>
                              <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full shrink-0
                                ${ach.subject === 'Biology' ? 'bg-biology-leaf-green/10 text-biology-leaf-green' : 
                                  ach.subject === 'Physics' ? 'bg-physics-deep-blue/10 text-physics-deep-blue' : 
                                  ach.subject === 'Chemistry' ? 'bg-chemistry-amber/10 text-chemistry-amber' : 'bg-surface-container text-text-muted'}`}
                              >
                                {ach.subject}
                              </span>
                            </div>
                            <p className="text-xs text-text-muted mt-1 leading-snug font-sans">{ach.description}</p>
                            <p className="text-[10px] text-primary font-mono font-bold uppercase tracking-wider mt-1">
                              {ach.unlocked ? `Unlocked: ${ach.unlockedAt || 'Syllabus Complete'}` : 'Locked (Pending high score)'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                )}


                {/* -----------------------------------------------------------------
                    ADMIN & TEACHER STUDENT MANAGEMENT DASHBOARD
                    ----------------------------------------------------------------- */}
                {activeTab === 'admin' && (currentUser.role === 'admin' || currentUser.role === 'teacher') && (
                  <motion.div 
                    key="admin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 text-left"
                  >
                    <div>
                      <h1 className="font-hanken text-3xl font-extrabold text-text-main tracking-tight">Admin & Teacher Dashboard</h1>
                      <p className="text-xs text-text-muted mt-1">Manage Class 9 student registrations, approve requests, and monitor overall accuracy logs.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Pending Admission Approvals Panel */}
                      <section className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-surface-container">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-surface-container-low">
                          <h3 className="font-hanken text-base font-bold text-physics-deep-blue flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-chemistry-amber">person_add</span>
                            Pending Admission Requests
                          </h3>
                          <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
                            {requests.filter(r => r.status === 'Pending').length} Pending
                          </span>
                        </div>

                        <div className="space-y-3">
                          {requests.filter(r => r.status === 'Pending').map((req) => (
                            <div 
                              key={req.id}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors border border-surface-container-low gap-3"
                            >
                              <div>
                                <p className="font-sans font-bold text-xs text-text-main">{req.name}</p>
                                <p className="text-[11px] text-text-muted font-mono">{req.email} • {req.institution} • {req.classGroup}</p>
                                <p className="text-[9px] text-text-muted italic mt-0.5">Submitted: {req.submittedAt}</p>
                              </div>
                              
                              <div className="flex gap-2 shrink-0">
                                <button 
                                  onClick={() => handleRejectRequest(req.id)}
                                  className="px-3.5 py-1.5 rounded-full border border-error text-error hover:bg-error-container/20 transition-all font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
                                >
                                  <X className="w-3.5 h-3.5" /> Reject
                                </button>
                                <button 
                                  onClick={() => handleApproveRequest(req)}
                                  className="px-3.5 py-1.5 rounded-full bg-success-emerald hover:bg-secondary text-white transition-all font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs"
                                >
                                  <Check className="w-3.5 h-3.5" /> Approve
                                </button>
                              </div>
                            </div>
                          ))}

                          {requests.filter(r => r.status === 'Pending').length === 0 && (
                            <div className="py-6 text-center text-xs font-mono text-text-muted">
                              No pending registration requests found. Try signing up on the logout screen!
                            </div>
                          )}
                        </div>
                      </section>

                      {/* System Overview Stat Widget */}
                      <section className="bg-gradient-to-br from-primary-container to-surface-tint rounded-2xl p-5 shadow-md text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white opacity-[0.05] rounded-full blur-xl"></div>
                        
                        <h3 className="font-hanken text-base font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                          <span className="material-symbols-outlined text-primary-fixed-dim">analytics</span>
                          System Overview
                        </h3>

                        <div className="grid grid-cols-2 gap-3 relative z-10">
                          <div className="bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-xs">
                            <p className="text-[10px] text-primary-fixed uppercase tracking-wider font-mono">Total Students</p>
                            <p className="font-mono text-2xl font-bold mt-1">{users.filter(u => u.role === 'student').length + 135}</p>
                          </div>
                          <div className="bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-xs">
                            <p className="text-[10px] text-primary-fixed uppercase tracking-wider font-mono">Active Today</p>
                            <p className="font-mono text-2xl font-bold mt-1">89</p>
                          </div>
                        </div>
                      </section>

                    </div>

                    {/* Full User Directory Panel */}
                    <section className="bg-white rounded-2xl shadow-sm border border-surface-container overflow-hidden">
                      <div className="p-4 bg-[#f7f9fb] border-b border-surface-container flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h3 className="font-hanken text-base font-bold text-text-main flex items-center gap-2">
                          <span className="material-symbols-outlined text-physics-deep-blue">group</span>
                          Classroom Directory
                        </h3>

                        <div className="flex gap-2 w-full sm:w-auto">
                          {/* Search */}
                          <div className="relative flex-1 sm:flex-initial">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[16px]">search</span>
                            <input 
                              type="text"
                              value={adminUserSearch}
                              onChange={(e) => setAdminUserSearch(e.target.value)}
                              placeholder="Search student names..."
                              className="w-full sm:w-48 bg-white border border-outline-variant/60 rounded-full py-1.5 pl-8 pr-4 focus:ring-2 focus:ring-physics-deep-blue outline-none text-xs"
                            />
                          </div>

                          {/* Role filter */}
                          <select 
                            value={adminRoleFilter}
                            onChange={(e) => setAdminRoleFilter(e.target.value as any)}
                            className="bg-white border border-outline-variant/60 rounded-full px-3 py-1.5 text-xs text-text-main focus:ring-2 focus:ring-physics-deep-blue outline-none"
                          >
                            <option value="All">All Roles</option>
                            <option value="student">Students</option>
                            <option value="teacher">Teachers</option>
                            <option value="admin">Admins</option>
                          </select>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#f2f4f6] text-text-muted font-mono text-[10px] uppercase tracking-wider border-b border-surface-container">
                              <th className="p-4">User</th>
                              <th className="p-4">Role</th>
                              <th className="p-4">Joined Date</th>
                              <th className="p-4">Status</th>
                              <th className="p-4 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-surface-container-low text-xs">
                            {filteredAdminUsers.map((u) => (
                              <tr key={u.id} className="hover:bg-surface-bright transition-all">
                                <td className="p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-xs font-mono font-bold text-physics-deep-blue shrink-0 overflow-hidden">
                                      <img src={u.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                      <p className="font-bold text-text-main">{u.name}</p>
                                      <p className="text-[10px] text-text-muted">{u.email}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 capitalize font-medium">{u.role}</td>
                                <td className="p-4 text-text-muted">{u.joinedDate}</td>
                                <td className="p-4">
                                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider
                                    ${u.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'}`}
                                  >
                                    <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'Active' ? 'bg-secondary' : 'bg-error'}`}></span>
                                    {u.status}
                                  </span>
                                </td>
                                <td className="p-4 text-right">
                                  <div className="inline-flex gap-1">
                                    <button 
                                      onClick={() => handleStatusChange(u.id, u.status)}
                                      className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-mono text-[9px] font-bold uppercase tracking-wider"
                                      title="Toggle status suspension"
                                    >
                                      {u.status === 'Suspended' ? 'Activate' : 'Suspend'}
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteUser(u.id)}
                                      className="p-1 text-text-muted hover:text-error hover:bg-error-container/20 rounded transition-colors"
                                      title="Delete user"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}

                            {filteredAdminUsers.length === 0 && (
                              <tr>
                                <td colSpan={5} className="py-8 text-center text-xs font-mono text-text-muted">
                                  No registered classroom directory users match search queries.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </section>

                  </motion.div>
                )}

              </AnimatePresence>

            </main>
          </div>

        </div>
      )}

      {/* =======================================================================
          TASK-FOCUSED INTERACTIVE MCQ REVISION MODAL / OVERLAY 
          ======================================================================= */}
      {currentUser && quizState && (
        <div className="fixed inset-0 z-50 bg-[#f7f9fb] flex flex-col text-left">
          
          {/* Header overrides normal nav to direct task focus */}
          <header className="w-full bg-white/85 backdrop-blur-md sticky top-0 z-50 border-b border-surface-variant flex items-center shrink-0">
            <div className="max-w-4xl mx-auto w-full px-6 h-16 flex items-center justify-between gap-4">
              
              {/* Quit handler */}
              <button 
                onClick={handleQuitQuiz}
                className="flex items-center gap-1 text-text-muted hover:text-error-rose transition-colors font-mono text-xs uppercase tracking-wider font-bold group"
              >
                <X className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                <span>Quit Revision</span>
              </button>

              {/* Status title */}
              <div className="text-center shrink-0">
                <h1 className="font-mono text-xs font-bold text-physics-deep-blue uppercase tracking-widest">
                  Revision • {quizState.subject}
                </h1>
                <p className="text-[10px] text-text-muted truncate max-w-[200px] hidden md:block">{quizState.chapterTitle}</p>
              </div>

              {/* Progress Tracker bar */}
              {quizState.currentIndex < quizState.questions.length && (
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-text-muted">
                    {quizState.currentIndex + 1} / {quizState.questions.length}
                  </span>
                  <div className="w-24 md:w-32 h-2 rounded-full bg-surface-container overflow-hidden">
                    <div 
                      className="h-full bg-physics-deep-blue rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Empty placeholder on results view */}
              {quizState.currentIndex >= quizState.questions.length && (
                <div className="text-xs font-mono font-bold text-success-emerald uppercase">Finished</div>
              )}

            </div>
          </header>

          {/* Quiz Canvas Area */}
          <main className="flex-grow flex flex-col items-center justify-center p-6 py-12 overflow-y-auto">
            <div className="w-full max-w-2xl">
              <AnimatePresence mode="wait">

                {/* 1. Active Question Cards */}
                {quizState.currentIndex < quizState.questions.length ? (
                  <motion.div 
                    key={quizState.currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0px_4px_30px_rgba(0,0,0,0.05)] border border-surface-container relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-physics-deep-blue"></div>
                      
                      {/* Question Label */}
                      <span className="inline-block px-2.5 py-0.5 bg-surface-container-low font-mono text-[9px] font-bold uppercase tracking-wider text-text-muted rounded-full mb-4">
                        Concept Test Question {quizState.currentIndex + 1}
                      </span>

                      <h2 className="font-hanken text-lg md:text-xl font-bold text-text-main leading-snug mb-6">
                        {quizState.questions[quizState.currentIndex].question}
                      </h2>

                      {/* Options stack list */}
                      <div className="flex flex-col gap-3">
                        {quizState.questions[quizState.currentIndex].options.map((opt, oIdx) => {
                          const isSelected = quizState.selectedIndex === oIdx;
                          const isCorrectChoice = oIdx === quizState.questions[quizState.currentIndex].correctIndex;
                          const isIncorrectChoice = isSelected && !isCorrectChoice;

                          // Option Styles depends on selection feedback state
                          let tileStyle = 'border-surface-container hover:border-physics-deep-blue/40 hover:bg-[#f7f9fb]';
                          let iconIndicator = <span className="w-5 h-5 rounded-full border border-outline-variant shrink-0" />;

                          if (quizState.isAnswered) {
                            if (isCorrectChoice) {
                              tileStyle = 'border-success-emerald bg-success-emerald/10 text-success-emerald font-semibold';
                              iconIndicator = <CheckCircle2 className="w-5 h-5 text-success-emerald shrink-0" />;
                            } else if (isIncorrectChoice) {
                              tileStyle = 'border-error-rose bg-error-rose/10 text-error-rose';
                              iconIndicator = <XCircle className="w-5 h-5 text-error-rose shrink-0" />;
                            } else {
                              tileStyle = 'border-surface-container-low opacity-50 bg-[#f7f9fb]';
                              iconIndicator = <span className="w-5 h-5 rounded-full border border-outline-variant shrink-0" />;
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={quizState.isAnswered}
                              onClick={() => handleSelectQuizOption(oIdx)}
                              className={`w-full text-left p-4 bg-white border-2 rounded-xl text-xs md:text-sm text-text-main flex justify-between items-center transition-all ${tileStyle} group`}
                            >
                              <span>{opt}</span>
                              {iconIndicator}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Interactive recall Active explanation card */}
                    {quizState.isAnswered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl p-5 border border-surface-container shadow-xs"
                      >
                        <div className="flex gap-3 items-start">
                          <div className={`p-1.5 rounded-full shrink-0 mt-0.5
                            ${quizState.selectedIndex === quizState.questions[quizState.currentIndex].correctIndex ? 'bg-success-emerald/20 text-success-emerald' : 'bg-error-rose/20 text-error-rose'}`}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {quizState.selectedIndex === quizState.questions[quizState.currentIndex].correctIndex ? 'check' : 'close'}
                            </span>
                          </div>
                          <div>
                            <h3 className={`font-hanken text-sm font-bold mb-1
                              ${quizState.selectedIndex === quizState.questions[quizState.currentIndex].correctIndex ? 'text-success-emerald' : 'text-error-rose'}`}
                            >
                              {quizState.selectedIndex === quizState.questions[quizState.currentIndex].correctIndex ? 'Correct! Absolute mastery.' : 'Not quite right'}
                            </h3>
                            <p className="text-[12px] text-text-muted leading-relaxed font-sans mt-1">
                              {quizState.questions[quizState.currentIndex].explanation}
                            </p>
                          </div>
                        </div>

                        {/* Next Question button reveal */}
                        <div className="flex justify-end mt-4">
                          <button 
                            onClick={handleNextQuizQuestion}
                            className="bg-physics-deep-blue text-white font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-6 rounded-full shadow-sm hover:bg-primary transition-all flex items-center gap-1 group"
                          >
                            {quizState.currentIndex + 1 < quizState.questions.length ? 'Next Question' : 'Complete Quiz'}
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </motion.div>
                ) : (
                  
                  // 3. Quiz Complete Final Results Screen
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md text-physics-deep-blue border border-surface-container relative animate-bounce">
                      <span className="material-symbols-outlined text-[48px] text-chemistry-amber" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                      <Sparkles className="absolute top-1 right-1 w-5 h-5 text-chemistry-amber animate-pulse" />
                    </div>

                    <div>
                      <h2 className="font-hanken text-3xl font-black text-physics-deep-blue">Odyssey Quiz Complete!</h2>
                      <p className="text-sm text-text-muted mt-2 max-w-sm mx-auto leading-relaxed">
                        Excellent work! You analyzed the Class 9 concepts carefully.
                      </p>
                    </div>

                    {/* Stats display */}
                    <div className="bg-white border border-surface-container max-w-xs mx-auto p-4 rounded-2xl grid grid-cols-2 gap-4 divide-x">
                      <div>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider font-mono">Score</p>
                        <p className="font-mono text-2xl font-bold text-physics-deep-blue mt-1">
                          {quizState.score} / {quizState.questions.length}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider font-mono">Accuracy</p>
                        <p className="font-mono text-2xl font-bold text-success-emerald mt-1">
                          {Math.round((quizState.score / quizState.questions.length) * 100)}%
                        </p>
                      </div>
                    </div>

                    {/* Return Action */}
                    <div className="flex justify-center gap-3 pt-4">
                      <button 
                        onClick={handleQuitQuiz}
                        className="bg-physics-deep-blue text-white font-mono text-xs uppercase tracking-wider font-bold py-3 px-8 rounded-full shadow-md hover:bg-primary transition-all hover:shadow-lg active:scale-95"
                      >
                        Return to Chapter notes
                      </button>
                    </div>
                  </motion.div>

                )}
              </AnimatePresence>
            </div>
          </main>

        </div>
      )}


      {/* =======================================================================
          HELP CENTER SYSTEM MODAL OVERLAY
          ======================================================================= */}
      <AnimatePresence>
        {showHelp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-surface-variant text-left"
            >
              <button 
                onClick={() => setShowHelp(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-main"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-hanken text-xl font-bold text-physics-deep-blue flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-biology-leaf-green">help</span>
                Syllabus Help Desk
              </h2>
              
              <div className="space-y-4 text-xs font-sans text-text-main leading-relaxed overflow-y-auto max-h-96 pr-2">
                <p>
                  Welcome to <strong>Study Odyssey</strong>, an educational platform carefully aligned with the NCERT Class 9 Science curriculum.
                </p>
                
                <div className="p-3 bg-[#f7f9fb] rounded-xl border border-surface-container">
                  <h4 className="font-mono text-[10px] font-bold text-physics-deep-blue uppercase mb-1">Key features:</h4>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-text-muted">
                    <li><strong>Adaptive progress rings</strong>: Visualizes chapter milestones ring-by-ring.</li>
                    <li><strong>Integrated active recall quizzes</strong>: Reinforces key facts.</li>
                    <li><strong>Classroom directory</strong>: Allows admins to approve and audit student logs.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-physics-deep-blue">Frequently asked questions:</h4>
                  <div>
                    <p className="font-semibold text-text-main">Q: How do I unlock Chemistry "Atom Smasher" achievement?</p>
                    <p className="text-text-muted mt-0.5">A: Complete the Chemistry revision unit quiz and obtain a perfect 100% score.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">Q: How do I test the signup admission system?</p>
                    <p className="text-text-muted mt-0.5">A: Click Logout in the sidebar. Select Sign Up, enter registration details, and submit. Then, bypass login as Mr. Sharma or Administrator from the Demo tab to approve your pending request from the Admin Dashboard!</p>
                  </div>
                </div>

                <p className="text-[10px] text-text-muted italic border-t pt-3">
                  Study Odyssey NCERT revision engine v1.4.0. Built with Antigravity AI Code developer.
                </p>
              </div>

              <div className="flex justify-end mt-6 pt-4 border-t">
                <button 
                  onClick={() => setShowHelp(false)}
                  className="bg-physics-deep-blue text-white font-mono text-xs uppercase tracking-wider font-bold py-2 px-6 rounded-full hover:bg-primary transition-colors"
                >
                  Dismiss help desk
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
