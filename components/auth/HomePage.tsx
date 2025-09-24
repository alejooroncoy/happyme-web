'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Sidebar from '@/components/layout/Sidebar';
import DashboardSection from '@/components/dashboard/DashboardSection';
import ChatSection from '@/components/dashboard/ChatSection';
import ResourcesSection from '@/components/dashboard/ResourcesSection';
import ProfileSection from '@/components/dashboard/ProfileSection';
import SettingsSection from '@/components/dashboard/SettingsSection';

export default function HomePage() {
  const { state, reset } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogout = () => {
    reset();
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'chat':
        return <ChatSection />;
      case 'resources':
        return <ResourcesSection />;
      case 'profile':
        return <ProfileSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <main className="p-6 lg:p-8">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
