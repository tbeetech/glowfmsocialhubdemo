"use client";

import { useEffect, useRef } from "react";
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
        this.vx = (Math.random() - 0.5) * 0.3; // Slower for performance
        this.vy = (Math.random() - 0.5) * 0.3;
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
    // Reduced particle budget for performance
    const particleBudget = Math.min(20, Math.max(10, Math.floor(window.innerWidth / 100)));
    for (let i = 0; i < particleBudget; i++) {
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
      {/* Simplified background without heavy framer-motion gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#050a1a] to-[#0b0f1c] opacity-60" />
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />
      
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
