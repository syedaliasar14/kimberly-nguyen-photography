'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder password check - this is just a shell for now
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-background">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="font-serif text-3xl text-primary mb-6 text-center font-bold">
              Admin Access
            </h1>
            <p className="text-muted-foreground text-center mb-6">
              Please enter your password to access the admin panel.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Enter password"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-lg font-semibold"
              >
                Access Admin Panel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-8 font-bold tracking-tight">
          Admin Dashboard
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-serif text-2xl text-primary mb-4 font-bold">
            Welcome to the Admin Panel
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is a placeholder for the admin dashboard. Future functionality will include:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <span>Manage blog posts</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <span>Upload and organize photos</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <span>Review contact form submissions</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <span>Update portfolio galleries</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="bg-muted text-primary-foreground px-6 py-2 rounded-full hover:bg-primary transition-colors"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
