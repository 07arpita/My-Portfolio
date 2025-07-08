import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Stars array with enhanced properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
      originalBrightness: number;
      layer: number;
    }> = [];

    // Shooting stars array
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      tail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Constellation definitions with elegant patterns
    const constellations = [
      {
        name: 'Northern Cross',
        stars: [
          { x: 0.2, y: 0.3, brightness: 0.4 },
          { x: 0.25, y: 0.25, brightness: 0.35 },
          { x: 0.3, y: 0.3, brightness: 0.4 },
          { x: 0.25, y: 0.35, brightness: 0.3 },
          { x: 0.25, y: 0.4, brightness: 0.35 }
        ],
        connections: [
          [0, 2], [1, 3], [3, 4]
        ]
      },
      {
        name: 'Southern Triangle',
        stars: [
          { x: 0.7, y: 0.6, brightness: 0.35 },
          { x: 0.75, y: 0.7, brightness: 0.4 },
          { x: 0.8, y: 0.6, brightness: 0.3 }
        ],
        connections: [
          [0, 1], [1, 2], [2, 0]
        ]
      },
      {
        name: 'Diamond',
        stars: [
          { x: 0.5, y: 0.15, brightness: 0.4 },
          { x: 0.45, y: 0.2, brightness: 0.35 },
          { x: 0.55, y: 0.2, brightness: 0.35 },
          { x: 0.5, y: 0.25, brightness: 0.3 }
        ],
        connections: [
          [0, 1], [0, 2], [1, 3], [2, 3]
        ]
      }
    ];

    // Create twinkling stars - brighter and more visible
    const createStars = (count: number) => {
      for (let i = 0; i < count; i++) {
        const brightness = Math.random() * 0.6 + 0.3; // Increased brightness (0.3-0.9)
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.8, // Slightly larger (0.8-2.3px)
          brightness: brightness,
          originalBrightness: brightness,
          twinkleSpeed: Math.random() * 0.02 + 0.005, // Faster twinkling for more visible effect
          twinklePhase: Math.random() * Math.PI * 2,
          layer: Math.random() > 0.6 ? 2 : 1
        });
      }
    };

    // Create constellation stars - brighter and more visible
    const createConstellationStars = () => {
      constellations.forEach(constellation => {
        constellation.stars.forEach(star => {
          stars.push({
            x: star.x * canvas.width,
            y: star.y * canvas.height,
            size: 1.8, // Increased from 1.2 to 1.8
            brightness: star.brightness * 1.5, // Make constellation stars brighter
            originalBrightness: star.brightness * 1.5,
            twinkleSpeed: 0.008, // Faster twinkling for constellation stars
            twinklePhase: Math.random() * Math.PI * 2,
            layer: 3
          });
        });
      });
    };

    // Create shooting star
    const createShootingStar = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height * 0.5;
      
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 60 + 30, // Slightly shorter
        speed: Math.random() * 2.5 + 1.5, // Slightly slower
        angle: Math.random() * Math.PI / 4 + Math.PI / 4,
        opacity: 1.0, // Full brightness
        tail: []
      });
    };

    // Draw constellation connections - dimmer
    const drawConstellations = () => {
      const constellationStartIndex = 300;
      
      constellations.forEach((constellation, constIndex) => {
        const startIdx = constellationStartIndex + constIndex * constellation.stars.length;
        
        constellation.connections.forEach(([startStarIdx, endStarIdx]) => {
          const startStar = stars[startIdx + startStarIdx];
          const endStar = stars[startIdx + endStarIdx];
          
          if (startStar && endStar) {
            ctx.beginPath();
            ctx.moveTo(startStar.x, startStar.y);
            ctx.lineTo(endStar.x, endStar.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // Reduced from 0.3 to 0.15
            ctx.lineWidth = 0.3; // Reduced from 0.5 to 0.3
            ctx.stroke();
          }
        });
      });
    };

    // Initialize stars
    createStars(100); // Slightly more stars for better live wallpaper effect
    createConstellationStars();

    let animationId: number;
    let lastShootingStarTime = 0;

    // Animation loop with better performance
    const animate = (currentTime: number) => {
      // Only update every 3rd frame for better performance
      if (currentTime % 3 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      // Clear canvas with pure black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get scroll position for subtle parallax
      const scrollY = window.scrollY;

      // Batch draw all stars for better performance
      const allStars = stars.filter(star => star.layer === 1 || star.layer === 2);
      allStars.forEach((star) => {
        const parallaxY = star.layer === 1 
          ? (star.y + scrollY * 0.02) % (canvas.height + 100)
          : (star.y + scrollY * 0.05) % (canvas.height + 100);
        
        // Update twinkling every frame for smooth animation
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7; // More variation for visible twinkling
        star.brightness = star.originalBrightness * twinkle;

        const opacity = Math.max(0.3, Math.min(0.9, star.brightness));

        ctx.beginPath();
        ctx.arc(star.x, parallaxY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      // Draw constellation connections less frequently
      if (currentTime % 6 === 0) {
        drawConstellations();
      }

      // Draw constellation stars with twinkling
      stars.forEach((star) => {
        if (star.layer === 3) {
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = Math.sin(star.twinklePhase) * 0.25 + 0.75; // More variation
          star.brightness = star.originalBrightness * twinkle;

          const opacity = Math.max(0.4, Math.min(1.0, star.brightness));

          // Brighter constellation stars with subtle glow
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.fill();
          
          // Core star
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      });

      // Draw shooting stars less frequently and simplified
      if (currentTime % 9 === 0) {
        shootingStars.forEach((shootingStar, index) => {
          // Brighter shooting star with simple tail
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity * 0.8})`;
          ctx.fill();
          
          // Simple tail effect
          for (let i = 1; i <= 3; i++) {
            const tailX = shootingStar.x - Math.cos(shootingStar.angle) * (i * 8);
            const tailY = shootingStar.y - Math.sin(shootingStar.angle) * (i * 8);
            ctx.beginPath();
            ctx.arc(tailX, tailY, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity * (0.6 - i * 0.2)})`;
            ctx.fill();
          }

          // Update shooting star position
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          shootingStar.opacity -= 0.01;

          // Remove if out of bounds or faded
          if (shootingStar.x > canvas.width + 100 || 
              shootingStar.y > canvas.height + 100 || 
              shootingStar.opacity <= 0) {
            shootingStars.splice(index, 1);
          }
        });

        // Create shooting stars less frequently
        if (currentTime - lastShootingStarTime > 15000 + Math.random() * 10000) {
          createShootingStar();
          lastShootingStarTime = currentTime;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      // Recreate stars for new canvas size
      stars.length = 0;
      createStars(100);
      createConstellationStars();
    };

    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default CosmicBackground;