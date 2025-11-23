"use client"

import { useEffect, useRef } from 'react';

export function WavyGradientCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking (normalized coordinates)
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        // Topographical relief noise function
        const noise = (x: number, y: number, time: number) => {
            // Multiple octaves of sine waves to create terrain-like patterns
            let value = 0;
            value += Math.sin(x * 0.01 + time * 0.001) * 0.5;
            value += Math.sin(y * 0.015 + time * 0.0015) * 0.3;
            value += Math.sin((x + y) * 0.008 + time * 0.002) * 0.4;
            value += Math.sin((x - y) * 0.012 + time * 0.0012) * 0.35;
            value += Math.sin(Math.sqrt(x * x * 0.00001 + y * y * 0.00001) * 5 + time * 0.001) * 0.25;
            return value;
        };

        const drawTopographicalLines = () => {
            if (!ctx || !canvas) return;

            const lineCount = 12;

            for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
                const elevation = lineIndex * 0.3 - 1.5; // Elevation level for this contour

                // Color based on elevation (silver, white, black gradient)
                const alpha = 0.3 + (lineIndex / lineCount) * 0.4;
                let color;
                if (lineIndex < lineCount / 3) {
                    color = `rgba(64, 64, 64, ${alpha})`; // Dark gray/black
                } else if (lineIndex < (2 * lineCount) / 3) {
                    color = `rgba(192, 192, 192, ${alpha})`; // Silver
                } else {
                    color = `rgba(240, 240, 240, ${alpha})`; // Near white
                }

                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.8 + Math.sin(time * 0.001 + lineIndex) * 0.3;

                let firstPoint = true;

                // Draw contour line
                for (let x = 0; x < canvas.width; x += 3) {
                    // Calculate terrain height at this point
                    const terrainHeight = noise(x, 0, time);

                    // Add mouse influence - creates a "hill" around cursor
                    const dx = (x / canvas.width) - mousePos.current.x;
                    const dy = 0.5 - mousePos.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const mouseInfluence = Math.exp(-dist * 4) * 0.8;

                    const totalHeight = terrainHeight + mouseInfluence;

                    // Calculate y position based on elevation
                    const baseY = canvas.height * 0.5;
                    const elevationOffset = (totalHeight - elevation) * 60;
                    const y = baseY + elevationOffset + Math.sin(x * 0.02 + time * 0.002) * 20;

                    if (firstPoint) {
                        ctx.moveTo(x, y);
                        firstPoint = false;
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.stroke();

                // Add subtle glow to some lines
                if (lineIndex % 3 === 0) {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = color;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }
            }
        };

        const drawGradient = () => {
            if (!ctx || !canvas) return;

            // Create radial gradient centered on mouse (silver/white theme)
            const gradient = ctx.createRadialGradient(
                mousePos.current.x * canvas.width,
                mousePos.current.y * canvas.height,
                0,
                mousePos.current.x * canvas.width,
                mousePos.current.y * canvas.height,
                Math.max(canvas.width, canvas.height) * 0.5
            );

            gradient.addColorStop(0, 'rgba(240, 240, 240, 0.12)');
            gradient.addColorStop(0.3, 'rgba(192, 192, 192, 0.08)');
            gradient.addColorStop(0.6, 'rgba(128, 128, 128, 0.04)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear canvas
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw gradient glow
            drawGradient();

            // Draw topographical lines
            drawTopographicalLines();

            time += 1;
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ mixBlendMode: 'lighten' }}
        />
    );
}
