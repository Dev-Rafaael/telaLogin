import { Login } from "./Modulos.js";
import { Cxmsg } from "../../PJ.CAIXA_MENSAGEM/Cxmsg.js";

const callback_ok=()=>{

}

const callback_naook=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null,
    }

    Cxmsg.mostrar(config,"Erro","Login nao efetuado! Usuario ou Senha invalidos")
}




Login.login(callback_ok,callback_naook)
