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
  const { state, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogout = () => {
    console.log('🚪 Logging out...');
    logout();
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
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      
      {/* Main Content Area */}
      <div className="ml-0 lg:ml-64">
        <main className="min-h-screen p-4">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}