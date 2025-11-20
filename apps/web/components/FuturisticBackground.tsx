"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

/**
 * Futuristic Animated Grid Background
 * Features: 3D gradient clouds, parallax drift, frequency particles
 */
export function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { allowMotion } = usePerformanceMode();
  
  useEffect(() => {
    if (!allowMotion) {
      return;
    }

    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    
    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setSize = () => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);
    
    // Particle system
    class Particle {
      private canvas: HTMLCanvasElement;
      private ctx: CanvasRenderingContext2D;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      
      constructor(canvasTarget: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvasTarget;
        this.ctx = context;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#FF6600' : '#00FFD5';
        this.alpha = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
      }
      
      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.alpha;
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
    }
    
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(canvasElement, ctx));
    }
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      
      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
    };
  }, [allowMotion]);

  if (!allowMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#050a1a] to-[#0b0f1c] opacity-80" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255, 102, 0, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 213, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient cloud layers with parallax */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(255, 102, 0, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(0, 255, 213, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(0, 31, 63, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating frequency lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#FF6600] to-transparent"
            style={{
              width: '100%',
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
      
      {/* Neon grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 213, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
