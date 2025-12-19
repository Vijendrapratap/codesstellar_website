"use client";

import React, { useEffect, useRef } from 'react';
import { useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // Transform velocity into a speed multiplier
  // Normal speed is 1, high scroll increases it
  const velocityRef = useRef(0);

  useEffect(() => {
    return smoothVelocity.on("change", (latest) => {
      velocityRef.current = latest;
    });
  }, [smoothVelocity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{ x: number; y: number; z: number; size: number }> = [];

    const initStars = () => {
      stars = [];
      const starCount = 800; // Dense field
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 2000, // Depth
          size: 2
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const draw = () => {
      // Warp speed effect calculation
      // Base speed + factor based on scroll velocity
      const speed = 2 + Math.abs(velocityRef.current) * 0.05;

      ctx.fillStyle = '#050a08'; // Clear with solid color instead of gradient for performance and depth
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw Stars
      stars.forEach((star) => {
        // Move star towards screen (decreasing Z)
        star.z -= speed;

        // Reset star if it passes the camera
        if (star.z <= 1) {
          star.z = 2000;
          star.x = Math.random() * canvas.width - cx;
          star.y = Math.random() * canvas.height - cy;
        }

        // Project 3D coordinates to 2D
        const k = 128.0 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / 2000) * star.size * 2; // Stars get bigger as they get closer
          const shade = Math.floor((1 - star.z / 2000) * 255);

          // Color logic: mostly white, some gold
          if (Math.random() > 0.95) {
            ctx.fillStyle = `rgb(184, 134, 11, ${shade / 255})`; // Gold
          } else {
            ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
          }

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarBackground;