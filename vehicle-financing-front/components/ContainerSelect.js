import Select from "./Select";

const ContainerSelect = () => {
    return (
        <div className="bg-gray-50 p-8 mt-8 mb-32 shadow-md">
            <p className="font-roboto font-semibold text-base leading-7 text-gray-700">Selecione um veiculo que deseja simular o financiamento</p>
            <div className="mt-4">
                <Select />
                <button class="text-white font-roboto font-bold bg-purple-600 rounded-full w-48 px-8 py-2 mx-2 ml-10">Simular</button>
            </div>
        </div>
    );
};

export default ContainerSelect;