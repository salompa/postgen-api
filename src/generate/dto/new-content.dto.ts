export class NewContentDto {
    urls: Iurl[]
}

interface Iurl {
    link: string,
    promptParams: IPromptParams;
}

interface IPromptParams {
    [key: string]: string | categorias [];
    
}

enum categorias {  
    reels,
    carrossel,
    post,
    videos_curto,
    videos_longos

