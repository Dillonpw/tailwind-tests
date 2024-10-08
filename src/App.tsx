import { useState } from 'react';

function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <main className="flex h-screen justify-center items-center flex-col gap-4">
            <div
                className="w-[--width] rounded-lg text-center border-2 bg-neutral-400 border-black p-2 overflow-hidden"
                style={
                    {
                        '--width': isCollapsed ? '8rem' : '16rem',
                    } as React.CSSProperties
                }
            >
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                    clickable
                </button>
            </div>
            <div className="hover:w-[16rem] rounded-lg w-[8rem] border-2 bg-neutral-400 border-black p-2 text-center">
                hoverable
            </div>
        </main>
    );
}

export default App;
