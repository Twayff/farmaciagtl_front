import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <div className="w-full h-screen bg-white flex flex-col justify-start items-center mb-auto" style={{paddingTop: '70px'}}>

            <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-9xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-4xl'>Aqui você encontra os melhores preços e produtos para sua vida saudavel!</p>
                        <div className="flex justify-around gap-4">
                        <button className='rounded bg-black text-white py-6 px-6 text-lg font-bold'>Ver Produtos</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Conteúdo do outro lado, se houver */}
                    </div>
                </div>

        </>
    );
}

export default Home;