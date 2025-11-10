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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Generate unique registration ID
      const registrationId = generateRegistrationId();

      // Send registration to API
      const response = await fetch('/api/send-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          registrationId,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.json();
      console.log('Registration successful:', result);

      // Show success state
      setSubmitStatus('success');

      // Close modal after showing success
      setTimeout(() => {
        onClose();
        setFormData({ name: '', phone: '', email: '' });
        setErrors({ name: '', phone: '', email: '' });
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.3)] border border-white/20 max-w-md w-full max-h-[90vh] overflow-y-auto overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-[0_25px_100px_rgba(99,102,241,0.4)]"
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
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all transform shadow-[0_10px_40px_rgba(99,102,241,0.3)] backdrop-blur-sm border border-white/10 font-body relative overflow-hidden group ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : submitStatus === 'success'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                : submitStatus === 'error'
                ? 'bg-gradient-to-r from-red-600 to-rose-600'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_15px_60px_rgba(99,102,241,0.5)]'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isSubmitting 
                ? 'Submitting...' 
                : submitStatus === 'success' 
                ? '✓ Registered Successfully!' 
                : submitStatus === 'error'
                ? '✗ Registration Failed'
                : 'Register for Challenge'
              }
            </span>
            {!isSubmitting && submitStatus === 'idle' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="text-center text-sm text-green-600 font-body font-semibold animate-pulse">
              ✓ Registration sent to glowfmglowmediastation@gmail.com
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-sm text-red-600 font-body">
              Failed to submit. Please try again or contact us directly.
            </p>
          )}
          {submitStatus === 'idle' && !isSubmitting && (
            <p className="text-center text-sm text-gray-500 font-body">
              Registration will be sent to glowfmglowmediastation@gmail.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
