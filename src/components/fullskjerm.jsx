import React, {useState}  from 'react'

export default function Fullskjerm({ url, tittel, onBack }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`flex flex-col bg-white text-black rounded-xl shadow2xl ${isFullscreen ? 'fixed inset-0 w-full h-full z-50 p-4' : '-[70vh] w-[90%] max-w-lg'}
    transition-all duration-300`}>

        <div className='flex justify-between items-center mb-2'>
            <button
            onClick={onBack}
            className='text-sm text-blue-500 underline'
            >
              ← Tilbake  
            </button>

            <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className='text-sm text-blue-500 underline'
            >
              {isFullscreen ? 'Avslutt fullskjerm' : 'Fullskjerm'}
            </button>
        </div>

        <h3 className='font-bold text-center mb-2'> {tittel}</h3>

        <iframe
        src={url}
        className='flex-1 w-full h-full rounded-lg border border-gray-700'
        title={tittel}
        />
      
    </div>
  )
}
