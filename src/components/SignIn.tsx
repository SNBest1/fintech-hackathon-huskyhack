import { useState } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';

interface SignInProps {
  onSignIn: () => void;
  isAlreadySignedIn?: boolean;
}

export function SignIn({ onSignIn, isAlreadySignedIn = false }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Only sign in if both fields have text
    if (username.trim() && password.trim()) {
      console.log('Sign in with:', username, password);
      onSignIn();
    }
  };

  const isFormValid = username.trim() !== '' && password.trim() !== '';

  return (
    <div className="min-h-full bg-gradient-to-b from-white to-slate-50 flex flex-col items-center justify-center px-6 py-8 relative">
      {/* Grayed Out Overlay */}
      {isAlreadySignedIn && (
        <div className="absolute inset-0 bg-slate-400/60 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mx-6 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-[#0A1F44] mb-2">Already Signed In</h2>
            <p className="text-slate-600 text-sm">You're currently logged into your account</p>
          </div>
        </div>
      )}

      {/* Logo and Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
          <div className="text-3xl">🏦</div>
        </div>
        <h1 className="text-[#0A1F44] text-2xl mb-2">Welcome Back</h1>
        <p className="text-slate-600 text-sm">Sign in to Sound Credit Union</p>
      </div>

      {/* Sign In Form */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-[#0A1F44] text-sm mb-2">
                Username or Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#7DD3C0] transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-[#0A1F44] text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-14 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#7DD3C0] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-[#7DD3C0] text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-xl transition-all text-center ${
                isFormValid
                  ? 'bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] text-white hover:shadow-lg'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Sign In
            </button>

            {/* Biometric Sign In */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-500">Or sign in with</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onSignIn}
                className="flex-1 py-3 bg-slate-50 text-slate-700 rounded-xl border-2 border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-xl">👆</span>
                <span className="text-sm">Touch ID</span>
              </button>
              <button
                type="button"
                onClick={onSignIn}
                className="flex-1 py-3 bg-slate-50 text-slate-700 rounded-xl border-2 border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-xl">😊</span>
                <span className="text-sm">Face ID</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="text-center mt-6">
        <p className="text-slate-600 text-sm">
          Don't have an account?{' '}
          <button className="text-[#7DD3C0] hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
