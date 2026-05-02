import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLock,FiUser,  FiShield } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://127.0.0.1:8000/api/login/',{
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username: form.username,   // Django uses "username"
        password: form.password,
      }),
      });
      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();

      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
       navigate('/admin');

    } catch (error) {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-xl"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30" />
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/70 dark:border-gray-700/70 shadow-2xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
              <FiShield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Secure Access</p>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
           <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/70 dark:bg-gray-800/70
                  border border-gray-200/80 dark:border-gray-700/80
                  focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500
                  text-gray-900 dark:text-white outline-none transition"
                  placeholder="admin"
                />
              </div>
            </div>


            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 dark:text-white outline-none transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="px-4 py-3 rounded-xl border border-red-200/70 bg-red-50/70 text-red-700 dark:border-red-800/70 dark:bg-red-900/30 dark:text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Use the provided demo credentials to access the admin dashboard.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

