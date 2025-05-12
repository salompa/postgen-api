import { Injectable } from '@nestjs/common';
import { NewContentDto } from './dto/new-content.dto';

@Injectable()
export class GenerateService {
  async processNewContent(newContentDto: NewContentDto) {
for (const { link, promptParams } of newContentDto.urls) {
  const {
    tom,
    genero,
    idade,
    formato,
    inclua,
    evite,
    tema,
    tipos_de_conteudo,
    redes_sociais
  } = promptParams;

    
    const prompt = `
    Estou te enviando um arquivo .txt com vários textos. Para cada texto dentro do arquivo, quero que você:
    Transforme o conteúdo em uma legenda otimizada para ${redes_sociais}, com:
        Tom: ${tom}
        Público-alvo: [${genero} de ${idade} anos que se interessam por ${tema}}
        Formato: Comece com uma frase de impacto ou pergunta, destaque o benefício, e finalize com uma chamada para ação (CTA).
        Inclua: ${inclua}
        Evite: ${evite}
    Gere 3 ideias de conteúdo para ${rede_sociais} com base em cada texto — e o estilo é de ${tipo_de_conteudo}

Assim que eu te mandar o arquivo, faça essa estrutura para cada texto encontrado dentro do .txt.

`;





    const data = await Promise.resolve();
    console.log(newContentDto);

    return data;
  }
  } 