import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

/**
 * Design Philosophy: Colorful Light Mode with Vibrant Energy
 * - Bright, clean background with vibrant gradient accents
 * - "Something is Cooking" teaser with Andrew Sameh featured
 * - Playful, approachable typography
 * - Smooth animations and interactive elements
 * - Professional yet creative aesthetic
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
};

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate animated particles with vibrant colors
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'];
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 text-foreground overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              opacity: 0.6,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Main hero section */}
        <div className="w-full max-w-3xl space-y-8 text-center">
          {/* Animated heading */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              <span className="block text-gray-800 mb-2">Something</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                is Cooking
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Andrew Sameh
                </span>
              </p>
              <p className="text-xl text-gray-600 font-semibold">
                Senior Flutter Developer
              </p>
            </div>

            <p className="text-lg text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
              I'm crafting something extraordinary. My portfolio is under development, showcasing elegant mobile experiences and innovative solutions.
            </p>
          </div>

          {/* Glass card with progress info */}
          <div
            className="p-8 md:p-10 space-y-6 animate-fade-in rounded-2xl transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: '0.3s', ...cardStyle }}
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                What's Coming
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A comprehensive showcase of my Flutter projects, professional journey, technical expertise, and the innovative solutions I've built across e-commerce, healthcare, education, and fintech industries.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Portfolio Development
                </span>
                <span className="text-sm font-bold text-gray-700">85%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full transition-all duration-1000"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { emoji: '📱', title: 'Flutter Expert', desc: '4+ years experience' },
              { emoji: '🚀', title: '15+ Projects', desc: 'Diverse industries' },
              { emoji: '🎓', title: 'B.Sc Computer Science', desc: 'Modern Academy' },
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={cardStyle}
              >
                <div className="text-4xl mb-3">{highlight.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div
            className="p-8 rounded-2xl animate-fade-in transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: '0.7s', ...cardStyle }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-700 mb-6">
              While the portfolio is being finalized, feel free to reach out. I'm open to exciting opportunities and collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:andrewsameh22@hotmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #FF8E72)',
                }}
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/andrewsameh22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                style={{
                  background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
                }}
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/andrewsameh22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 text-sm animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Check back soon for the complete portfolio experience
          </p>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
