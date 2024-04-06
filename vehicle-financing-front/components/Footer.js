
const Footer = () => {
    return (
        <footer className="px-10 pb-20 pt-10 md:py-10 mt-20  md:mt-40">
            <div className="flex justify-between flex-wrap md:flex-no-wrap">
                <div className="w-1/6 hidden md:block md:order-first">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4">Encontre seu veículo</h2>
                    <div className="text-white flex flex-col">
                        <a href="#" className="mb-4">Encontre seu veículo</a>
                        <a href="#" className="mb-4">Lojas</a>
                        <a href="#" className="mb-4">Promoções</a>
                        <a href="#" className="mb-4">Vantagens</a>
                        <a href="#" className="mb-4">Garantia Mais</a>
                    </div>
                </div>
                <div className="w-1/6 hidden md:block md:order-first">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4">A Empresa</h2>
                    <div className="text-white flex flex-col">
                        <a href="#" className="mb-4">Sobre</a>
                        <a href="#" className="mb-4">Delivery</a>
                        <a href="#" className="mb-4">Aviso de Privacidade</a>
                        <a href="#" className="mb-4">Vantagens</a>
                        <a href="#" className="mb-4">Blog Seminovos</a>
                    </div>
                </div>
                <div className="w-1/6 hidden md:block md:order-first">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4">Atendimento</h2>
                    <div className="text-white flex flex-col">
                        <a href="#" className="mb-4">Perguntas Frequentes</a>
                        <a href="#" className="mb-4">Fale Conosco</a>
                        <a href="#" className="mb-4">Pós-vendas</a>
                    </div>
                </div>
                <div className="w-1/6 hidden md:block md:order-first">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4">Lojistas</h2>
                    <div className="text-white flex flex-col">
                        <a href="#" className="mb-4">Acesse Seminovos Atacado</a>
                    </div>
                </div>
                <div className="w-full md:w-1/6 mx-auto text-center md:text-left order-last md:order-first mt-6 md:mt-0">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4">Atendimento ao cliente</h2>
                    <div className="text-white flex justify-center items-center md:justify-start md:items-start">
                        <span className='bg-purple-600 rounded-md p-3 font-roboto mr-5'>0800 000 000</span> <img className='bg-green-500 rounded-md p-3' src="/images/whats.svg" />
                    </div>
                </div>
                <div className="w-full md:w-1/6 mx-auto order-first md:order-last">
                    <h2 className="text-white font-roboto font-bold text-xl leading-7 mb-4 text-center md:text-left">Siga a gente</h2>
                    <div className="text-white flex space-x-5 justify-center items-center md:justify-start md:items-start">
                        <img src="/images/facebook.svg" />
                        <img src="/images/instagram.svg" />
                        <img src="/images/twitter.svg" />
                        <img src="/images/linkedin.svg" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;