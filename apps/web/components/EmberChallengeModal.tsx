"use client";

import { useState } from "react";

interface EmberChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Generate a random 8-character ID
function generateRegistrationId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'EC-';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export function EmberChallengeModal({ isOpen, onClose }: EmberChallengeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      email: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone && !newErrors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate unique registration ID
    const registrationId = generateRegistrationId();

    // Format the email content
    const subject = `Registration for Ember challenge ${registrationId}`;
    const body = `'${formData.name}' with the phone no: "${formData.phone}" is registering for Ember challenge`;

    // Create mailto link
    const mailtoLink = `mailto:glowfmglowmediastation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Close modal after a short delay
    setTimeout(() => {
      onClose();
      setFormData({ name: '', phone: '', email: '' });
      setErrors({ name: '', phone: '', email: '' });
    }, 500);
  };

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.3)] border border-white/20 max-w-md w-full overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-[0_25px_100px_rgba(99,102,241,0.4)]"
        style={{ animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-all hover:rotate-90 duration-300 backdrop-blur-sm bg-white/10 rounded-full p-1.5"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-2 drop-shadow-lg">Join the Challenge!</h2>
            <p className="text-white/90 font-body drop-shadow">Register now and win amazing prizes</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange('name')}
              className={`w-full px-4 py-3 rounded-xl border-2 backdrop-blur-sm bg-white/60 ${
                errors.name ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-gray-300/50'
              } focus:border-indigo-500 focus:bg-white/80 focus:shadow-[0_0_30px_rgba(99,102,241,0.2)] focus:outline-none transition-all duration-300 font-body hover:border-indigo-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)]`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 font-body animate-pulse">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange('phone')}
              className={`w-full px-4 py-3 rounded-xl border-2 backdrop-blur-sm bg-white/60 ${
                errors.phone ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-gray-300/50'
              } focus:border-indigo-500 focus:bg-white/80 focus:shadow-[0_0_30px_rgba(99,102,241,0.2)] focus:outline-none transition-all duration-300 font-body hover:border-indigo-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)]`}
              placeholder="+234 800 000 0000"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 font-body animate-pulse">{errors.phone}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange('email')}
              className={`w-full px-4 py-3 rounded-xl border-2 backdrop-blur-sm bg-white/60 ${
                errors.email ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-gray-300/50'
              } focus:border-indigo-500 focus:bg-white/80 focus:shadow-[0_0_30px_rgba(99,102,241,0.2)] focus:outline-none transition-all duration-300 font-body hover:border-indigo-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)]`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 font-body animate-pulse">{errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_60px_rgba(99,102,241,0.5)] backdrop-blur-sm border border-white/10 font-body relative overflow-hidden group"
          >
            <span className="relative z-10">Register for Challenge</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <p className="text-center text-sm text-gray-500 font-body">
            Your email client will open to complete registration
          </p>
        </form>
      </div>
    </div>
  );
}
