export function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-black"></div>

      {/* Multiple layers of stars */}
      {[...Array(150)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationName: "pulse",
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 3}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Floating cosmic particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 6}px`,
            height: `${Math.random() * 12 + 6}px`,
            background: `radial-gradient(circle, ${
              ["#8b5cf6", "#3b82f6", "#06b6d4", "#8b5cf6"][Math.floor(Math.random() * 4)]
            }, transparent)`,
            animationName: "bounce",
            animationDuration: `${Math.random() * 4 + 3}s`,
            animationDelay: `${Math.random() * 5}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationName: "shootingStar",
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 10}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  )
}
