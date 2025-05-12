export class NewContentDto {
    urls: Iurl[]
}

interface Iurl {
    link: string,
    promptParams: IPromptParams;
}

interface IPromptParams {
        tom: string;
  genero: string;
  idade: string;
  formato: string;
  inclua: string;
  evite: string;
  tema: string;
  tipos_de_conteudo: categorias[];
  redes_sociais: redes_sociais[];   


    
}

enum categorias {  
    reels,
    carrossel,
    post,
    videos_curto,
    videos_longos

}

enum redes_sociais {
    instagram,
    facebook,
    whatsapp,
    threads,
    twiter,
    tik_tok,
    
}
