import React, { useEffect, useRef } from 'react'

export default function ValuePropositionSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Vertices del hipercubo en 4D
    const vertices4D = [];
    for (let i = 0; i < 16; i++) {
      vertices4D.push([
        (i & 1) ? 1 : -1,
        (i & 2) ? 1 : -1,
        (i & 4) ? 1 : -1,
        (i & 8) ? 1 : -1
      ]);
    }

    // Aristas del hipercubo
    const edges = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (vertices4D[i][k] !== vertices4D[j][k]) diff++;
        }
        if (diff === 1) edges.push([i, j]);
      }
    }

    let angleXY = 0;
    let angleZW = 0;
    let angleXZ = 0;

    const project4DTo3D = (point4D, angle) => {
      const w = point4D[3];
      const distance = 2;
      const factor = distance / (distance - w);
      return [
        point4D[0] * factor,
        point4D[1] * factor,
        point4D[2] * factor
      ];
    };

    const project3DTo2D = (point3D) => {
      const distance = 3;
      const z = point3D[2];
      const factor = distance / (distance - z);
      return [
        point3D[0] * factor * 80 + canvas.width / 2,
        point3D[1] * factor * 80 + canvas.height / 2
      ];
    };

    const rotateXY = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        point[0] * cos - point[1] * sin,
        point[0] * sin + point[1] * cos,
        point[2],
        point[3]
      ];
    };

    const rotateZW = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        point[0],
        point[1],
        point[2] * cos - point[3] * sin,
        point[2] * sin + point[3] * cos
      ];
    };

    const rotateXZ = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        point[0] * cos - point[2] * sin,
        point[1],
        point[0] * sin + point[2] * cos,
        point[3]
      ];
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      angleXY += 0.005;
      angleZW += 0.003;
      angleXZ += 0.004;

      const rotatedVertices = vertices4D.map(v => {
        let rotated = rotateXY(v, angleXY);
        rotated = rotateZW(rotated, angleZW);
        rotated = rotateXZ(rotated, angleXZ);
        return rotated;
      });

      const projected3D = rotatedVertices.map(v => project4DTo3D(v, angleZW));
      const projected2D = projected3D.map(v => project3DTo2D(v));

      // Dibujar aristas
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)'; // green-500
      ctx.lineWidth = 1;

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected2D[i][0], projected2D[i][1]);
        ctx.lineTo(projected2D[j][0], projected2D[j][1]);
        ctx.stroke();
      });

      // Dibujar vértices
      ctx.fillStyle = 'rgba(34, 197, 94, 0.5)';
      projected2D.forEach(point => {
        ctx.beginPath();
        ctx.arc(point[0], point[1], 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const transformation = [
    {
      action: "Automatizamos procesos críticos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      action: "Integramos IA aplicada al negocio",
      color: "from-green-500 to-emerald-500"
    },
    {
      action: "Diseñamos software listo para escalar",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="value-proposition" className="relative py-16 lg:py-24 bg-black overflow-hidden">
      {/* 4D Hypercube Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.12]"
        style={{ pointerEvents: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Statement - Visual Split */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center mb-12 lg:mb-20">
          
          {/* Left Side - Before (Problem) */}
          <div className="relative lg:flex-shrink-0">
            <div className="text-center lg:text-right">
              <div className="inline-block lg:block mb-3">
                <span className="text-xs lg:text-sm font-medium text-red-400 uppercase tracking-wider">Antes</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-light text-zinc-500 mb-3">
                Tecnología como
              </h3>
              <div className="relative inline-block">
                <span className="text-3xl lg:text-5xl font-bold text-zinc-700 line-through decoration-red-500 decoration-4">
                  un gasto
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-32 bg-zinc-800"></div>

          {/* Right Side - After (Solution) */}
          <div className="relative lg:flex-shrink-0">
            <div className="text-center lg:text-left">
              <div className="inline-block lg:block mb-3">
                <span className="text-xs lg:text-sm font-medium text-green-400 uppercase tracking-wider">Con Agiltech</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-3">
                Tecnología como
              </h3>
              <div className="relative inline-block">
                <span className="text-4xl lg:text-6xl font-bold text-green-400">
                  activo estratégico
                </span>
                <div className="absolute -inset-4 bg-green-500/20 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Actions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg lg:text-xl text-zinc-400">
              Cómo lo hacemos posible:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {transformation.map((item, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="relative p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                  
                  {/* Gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Number */}
                    <div className="mb-6">
                      <span className="text-7xl lg:text-8xl font-bold text-white/20">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Action */}
                    <p className="text-base lg:text-lg text-white font-medium leading-relaxed">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-10 lg:mt-14 text-center">
            <p className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">Resultado</p>
            <p className="text-xl lg:text-2xl text-white font-medium">
              Menos fricción, más eficiencia y <span className="text-green-400">crecimiento sostenible</span>
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}
