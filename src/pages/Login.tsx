

function Login() {
    return (
        <div className='flex flex-col border border-slate-200 rounded-xl w-2/6 mx-auto mt-20 py-10 px-16'>
            <div className='mb-3'>
                <label className="block mb-2 text-sm font-light  text-black ml-3">Téléphone</label>
                <input type="text"
                    className="px-3 my-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
                <p className='text-red-500 font-light text-xs ml-3'></p>

            </div>
            <div className='mb-8'>
                <label className="block mb-2 text-sm font-light  text-black ml-3">Mot de passe</label>
                <input type="text"
                    className="px-3 my-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
                <p className='text-red-500 font-light text-xs ml-3'></p>
            </div>
            <button className='mb-5 font-medium  rounded-lg  py-2 text-sm border-blue  bg-blue-500 text-white'>Connexion</button>
            <div className=''>
                <p className='text-xs text-center'>Mot de passe oublié, <span className='text-blue-700'>réinitialiser le mot de passe</span></p>
            </div>

        </div>
    )
}

export default Login