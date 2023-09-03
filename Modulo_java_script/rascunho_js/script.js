const perfil {
    nome:"Vanessa",
    idade: 59,
    altura: 1.49,
    graduacao: "Ciência da Computação";
    pos_graduacao: "Gestão Empresarial";
    profissao: "Programadora";
    estado_civil: "Casada";
};

const {nome, idade, estado_civil, ...outros} = perfil;

console.log(nome);