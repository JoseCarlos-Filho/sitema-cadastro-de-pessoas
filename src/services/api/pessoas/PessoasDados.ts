import { Api } from "services/axios-config";

export interface IPesssoasDados {
    // interface para os dados da API
    id: number;
    name: string;
    email: string;
    bDay: Date;
}

type Tpessoas = {
    data: IPesssoasDados[];
};

/*a função irá retornar uma lista de pessoas ou um erro*/
const getAllPersons = async (): Promise<Tpessoas | Error> => {
    try {
        const { data } = await Api.get("");

        if (data) {
            return {
                data
            };
        }
        return new Error("Erro ao listar os regitros!");
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao listar os regitros!"
        ); // retorna uma mensagem de erro do backend ou uma mensagem personalizada
    }
};

const getPersonById = async (id: number): Promise<Tpessoas | Error> => {
    try {
        const { data } = await Api.get(`?_sort&id=${id}`);

        if (data.length !== 0) {
            return {
                data
            };
        }
        return new Error("Registro não encontrado!");
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao listar os regitros!"
        ); // retorna uma mensagem de erro do backend ou uma mensagem personalizada
    }
};

const getPersonByName = async (name: string): Promise<Tpessoas | Error> => {
    try {
        const { data } = await Api.get(`?_sort&name=${name}`);

        if (data.length !== 0) {
            return {
                data
            };
        }
        return new Error("Registro não encontrado!");
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao listar os regitros!"
        ); // retorna uma mensagem de erro do backend ou uma mensagem personalizada
    }
};

const createPerson = async (input: IPesssoasDados): Promise<void | Error> => {
    try {
        Api.post("", {
            id: input.id,
            name: input.name,
            email: input.email,
            bDay: input.bDay,
        }).then(() => {
            console.debug("Cadastro realizado com sucesso!");
        });
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao realizar o cadastro!"
        );
    }
};

const updatePersonById = async (
    id: number,
    data: {}
): Promise<void | Error> => {
    try {
        Api.put(`/${id}`, data).then((response) => {
            console.debug("Cadastro atualizado!", response.data);
        });
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao atualizar o registro!"
        );
    }
};

const deletePersonById = async (id: number): Promise<void | Error> => {
    try {
        Api.delete(`/${id}`).then((response) => {
            console.debug("registro deletado!", response.data);
        });
    } catch (error) {
        throw new Error(
            (error as { message: string }).message ||
                "Erro ao deletar o registro!"
        );
    }
};

export const PessoasDados = {
    getAllPersons,
    getPersonById,
    getPersonByName,
    createPerson,
    updatePersonById,
    deletePersonById,
};
