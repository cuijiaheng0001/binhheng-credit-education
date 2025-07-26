export default function TestColors() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Color Test Page</h1>
      
      <div className="space-y-8">
        {/* Primary Colors */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="w-32 h-32 bg-primary-50 rounded-lg flex items-center justify-center">50</div>
            <div className="w-32 h-32 bg-primary-100 rounded-lg flex items-center justify-center">100</div>
            <div className="w-32 h-32 bg-primary-200 rounded-lg flex items-center justify-center">200</div>
            <div className="w-32 h-32 bg-primary-300 rounded-lg flex items-center justify-center">300</div>
            <div className="w-32 h-32 bg-primary-400 rounded-lg flex items-center justify-center text-white">400</div>
            <div className="w-32 h-32 bg-primary-500 rounded-lg flex items-center justify-center text-white">500</div>
            <div className="w-32 h-32 bg-primary-600 rounded-lg flex items-center justify-center text-white">600</div>
            <div className="w-32 h-32 bg-primary-700 rounded-lg flex items-center justify-center text-white">700</div>
            <div className="w-32 h-32 bg-primary-800 rounded-lg flex items-center justify-center text-white">800</div>
            <div className="w-32 h-32 bg-primary-900 rounded-lg flex items-center justify-center text-white">900</div>
            <div className="w-32 h-32 bg-primary-950 rounded-lg flex items-center justify-center text-white">950</div>
          </div>
        </div>

        {/* Accent Colors */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Accent Colors</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="w-32 h-32 bg-accent-50 rounded-lg flex items-center justify-center">50</div>
            <div className="w-32 h-32 bg-accent-100 rounded-lg flex items-center justify-center">100</div>
            <div className="w-32 h-32 bg-accent-200 rounded-lg flex items-center justify-center">200</div>
            <div className="w-32 h-32 bg-accent-300 rounded-lg flex items-center justify-center">300</div>
            <div className="w-32 h-32 bg-accent-400 rounded-lg flex items-center justify-center">400</div>
            <div className="w-32 h-32 bg-accent-500 rounded-lg flex items-center justify-center text-white">500</div>
            <div className="w-32 h-32 bg-accent-600 rounded-lg flex items-center justify-center text-white">600</div>
            <div className="w-32 h-32 bg-accent-700 rounded-lg flex items-center justify-center text-white">700</div>
            <div className="w-32 h-32 bg-accent-800 rounded-lg flex items-center justify-center text-white">800</div>
            <div className="w-32 h-32 bg-accent-900 rounded-lg flex items-center justify-center text-white">900</div>
          </div>
        </div>

        {/* Gradient Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gradients</h2>
          <div className="space-y-4">
            <div className="h-32 rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white">
              Primary to Accent Gradient
            </div>
            <div className="h-32 rounded-lg bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center text-white">
              Primary Dark Gradient
            </div>
          </div>
        </div>

        {/* Text Colors */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
          <p className="text-gray-900 text-xl">Gray 900 Text</p>
          <p className="text-gray-700 text-xl">Gray 700 Text</p>
          <p className="text-gray-500 text-xl">Gray 500 Text</p>
          <p className="text-primary-600 text-xl">Primary 600 Text</p>
          <p className="text-accent-500 text-xl">Accent 500 Text</p>
          <p className="gradient-text text-xl">Gradient Text</p>
        </div>
      </div>
    </main>
  )
}