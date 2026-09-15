function mascara_nome ()
{
    let text = document.getElementById("nomeForm").value
    console.log(text)

    text=text.slice(0,50)
    console.log(text)
}
function mascara_endereco ()
{
    let text = document.getElementById("enderecoForm").value
    console.log(text)

    text=text.slice(0,100)
    console.log(text)
}
 function mascara_CEP ()
{
    let text = document.getElementById("cepForm").value
    console.log(text)

    text=text.slice(0,10)
    console.log(text)

    let cep_formatado = document.getElementById("cepForm").value
    console.log(text)

    if (cep_formatado[2]!= "."){
        if (cep_formatado[2]!= undefined){
            document.getElementById("cepForm").value=cep_formatado.slice(0,2)+"."
        }
    }
    if (cep_formatado[6]!= "-"){
        if (cep_formatado[6]!= undefined){
            document.getElementById("cepForm").value=cep_formatado.slice(0,6)+"-"
        }
    }

}
function mascara_CPF ()
{
    let text = document.getElementById("cpfForm").value
    console.log(text)

    text=text.slice(0,14)
    console.log(text)

    let cpf_formatado = document.getElementById("cpfForm").value
    console.log(text)

    if (cpf_formatado[3]!= "."){
        if (cpf_formatado[3]!= undefined){
            document.getElementById("cpfForm").value=cpf_formatado.slice(0,3)+"."
        }
    }
    if (cpf_formatado[7]!= "."){
        if (cpf_formatado[7]!= undefined){
            document.getElementById("cpfForm").value=cpf_formatado.slice(0,7)+"."
        }
    }
    if (cpf_formatado[11]!= "."){
        if (cpf_formatado[11]!= undefined){
            document.getElementById("cpfForm").value=cpf_formatado.slice(0,11)+"."
        }
    }

}
        
    function mascara_tel()
    {
        let tel = document.getElementById("telForm").value
        console.log(tel)

        tel=tel.slice(0,20)
        console.log(tel)

        let tel_formatado = document.getElementById("telForm").value

        if (tel_formatado[0]!= "+") {
            if (tel_formatado[0]!= undefined) {
                document.getElementById("telForm").value="+"+tel_formatado[0]
            }
        }
        if (tel_formatado[3]!= " ")
            {
                if(tel_formatado[3]!= undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,3)+" "
                }
            }
        if (tel_formatado[4]!= "(")
            {
                if(tel_formatado[4]!= undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,4)+"("+tel_formatado[4]
                }
            }
        if (tel_formatado[7]!= ")")
            {
                if(tel_formatado[7]!=undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,7)+")"+tel_formatado[7]
                }
            }
        if (tel_formatado[8]!= " ")
            {
                if(tel_formatado[8]!= undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,8)+" "
                }
            }
        if (tel_formatado[10]!= " ")
            {
                if(tel_formatado[8]!= undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,10)+" "
                }
                }
        if (tel_formatado[15]!= "-")
            {
                if(tel_formatado[15]!= undefined)
                {
                    document.getElementById("telForm").value=tel_formatado.slice(0,15)+"-"
                }
            }
    }

function mascara_CNPJ ()
{
    let text = document.getElementById("cnpjForm").value
    console.log(text)

    text=text.slice(0,18)
    console.log(text)

    let cnpj_formatado = document.getElementById("cnpjForm").value
    console.log(text)

    if (cnpj_formatado[2]!= "."){
        if (cnpj_formatado[2]!= undefined){
            document.getElementById("cnpjForm").value=cnpj_formatado.slice(0,2)+"."
        }
    }
    if (cnpj_formatado[6]!= "."){
        if (cnpj_formatado[6]!= undefined){
            document.getElementById("cnpjForm").value=cnpj_formatado.slice(0,6)+"."
        }
    }
    if (cnpj_formatado[10]!= "/"){
        if (cnpj_formatado[10]!= undefined){
            document.getElementById("cnpjForm").value=cnpj_formatado.slice(0,10)+"/"
        }
    }
    if (cnpj_formatado[15]!= "-"){
        if (cnpj_formatado[15]!= undefined){
            document.getElementById("cnpjForm").value=cnpj_formatado.slice(0,15)+"-"
        }
    }

}

let formulario = document.getElementById('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    console.log();
});


let modal = document.getElementById("mensagem");
let abrir = document.getElementById("abrir");
let fechar = document.getElementById("fechar");

abrir.addEventListener("click", () => {
  modal.showModal();
});

fechar.addEventListener("click", () => {
  modal.close();
});
