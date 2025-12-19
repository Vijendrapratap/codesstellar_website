"use client";

import React, { useEffect, useRef } from 'react';

const VoidSphere: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        // Sphere settings
        const radius = Math.min(width, height) / 3;
        const points: { x: number, y: number, z: number }[] = [];
        const numPoints = 60;

        // Create points on sphere surface (Fibonacci Sphere)
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < numPoints; i++) {
            const theta = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);

            points.push({
                x: Math.cos(theta) * Math.sin(phi) * radius,
                y: Math.sin(theta) * Math.sin(phi) * radius,
                z: Math.cos(phi) * radius
            });
        }

        let angleX = 0;
        let angleY = 0;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - width / 2) * 0.0001;
            mouseY = (e.clientY - rect.top - height / 2) * 0.0001;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Auto rotation + mouse influence
            angleX += 0.002 + mouseY;
            angleY += 0.002 + mouseX;

            // Sorting for pseudo-depth
            const projectedPoints = points.map(p => {
                // Rotate Y
                let x = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
                let z = p.x * Math.sin(angleY) + p.z * Math.cos(angleY);
                let y = p.y;

                // Rotate X
                let yNew = y * Math.cos(angleX) - z * Math.sin(angleX);
                let zNew = y * Math.sin(angleX) + z * Math.cos(angleX);

                // Project (Perspective)
                const scale = 300 / (300 + zNew);
                const x2D = x * scale + width / 2;
                const y2D = yNew * scale + height / 2;
                const alpha = Math.max(0.1, (zNew + radius) / (2 * radius)); // Opacity based on Z

                return { x: x2D, y: y2D, z: zNew, alpha };
            });

            // Draw connections
            ctx.strokeStyle = '#b8860b'; // Stellar Gold

            for (let i = 0; i < projectedPoints.length; i++) {
                const p1 = projectedPoints[i];

                // Draw Node
                ctx.fillStyle = `rgba(255, 255, 255, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, 2 * p1.alpha, 0, Math.PI * 2);
                ctx.fill();

                // Draw Lines to nearby points
                for (let j = i + 1; j < projectedPoints.length; j++) {
                    const p2 = projectedPoints[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (dist < 80) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(184, 134, 11, ${0.3 * p1.alpha * (1 - dist / 80)})`;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default VoidSphere;