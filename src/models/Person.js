const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    createdAt:{
		type: Date,
		default: Date.now
    },
    updateAt:{
		type: Date,
		default: Date.now
	},
    dados:{
        nome: {
            type: String
        },
        nomeSocial: {
            type: String
        },
        sexo: {
            type: String
        },
        estadoCivil: {
            type: String
        },
        rg: {
            type: String
        },
        cpf: {
            type: String
        },
        cns: {
            type: String
        },
        pis: {
            type: String
        },
        escolaridade: {
            type: String
        },
        profissao: {
            type: String
        },
        telefoneFixo: {
            type: Number
        },
        celular: {
            type: Number
        },
        email: {
            type: String
        },
        pais: {
            type: String
        },
        estado: {
            type: String
        },
        cidade: {
            type: String
        },
        nascimento: {
            data: {
                type: String
            },
            nacionalidade: {
                type: String,
            },
            pais: {
                type: String
            },
            estado: {
                type: String
            },
            cidade: {
                type: String
            },
        },
        falecimento: {
            data: {
                type: String
            },
            pais: {
                type: String
            },
            estado: {
                type: String
            },
            cidade: {
                type: String
            },
            causa: {
                type: String
            }
        }    
    },
    maisInformacoes: {
        type: String
    },
    doador: {
        status:{
            type: Boolean
        }
    },
    situacao: {
        // Gestante
        // Cancer
    },
    relacionamento: {
        // RELACIONAMENTOS
    },
    programas: {
        // PROGRAMAS QUE PARTICIPA
        // SITUAÇÃO NO PROGRAMA
    },
    atividades: {
        // Gatilho Atividade_has_Pessoas
    },
    sistemas : {
        socialMe: {
            password: {
                type: String
            }
        }
        //NomeSistema:{
            //idCadastro
            //idUsuario
        //}
    }
});

mongoose.model('Person', PersonSchema);