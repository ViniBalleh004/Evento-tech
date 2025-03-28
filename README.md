# Documentação

Um website projetado para a divulgação do evento de tecnologia, voltado para os estudantes e profissionais da área de desenvolvimento de software.


IDE utilizada: VSCode

Linguagens:
- Front-End: HTML, CSS
- Back-End: JavaScript

Banco de Dados utilizado: N/A


Pensado e projetado para ser utilizado e acessado por todos os tipos de dispositivos que possuem navegador. Então segue abaixo as informações gerais sobre a construção do projeto.

- Responsivo:  Nosso site irá se adaptar à tela do usuário, dando maior acessibilidade à todos os tipos de aparelho que o usuário acessar a nossa plataforma online.
- Pensado para o usuário: Irá conter designs e uma construção feita para fácil entendimento do usuário.


## Tela Home


### Início

Assim que nosso usuário abrir nosso site, ele cairá nesta tela. Então:

- Banner: Para que os usuários sejam brevemente apresentados ao nosso evento, esse banner entregará o destaque de tudo sobre o evento, como: Nossa Imagem de divulgação, um pop-up que ter  á as informações do evento (Nome do evento, data, local), com um botão para levar para a . (Ocupar a tela toda do usuário com pequenas margens).
- Barra de Navegação: ela aparecerá durante toda a navegação do usuário pelo site, dando à ele uma forma de se guiar melhor pela nossa página.


### Sobre

Essa seção da tela inicial irá conter uma breve apresentação do que se trata e o foco do evento, contando com uma descrição direta e de levantamento de interesse para o evento proposto (suas vantagens aos participantes).


### Palestrantes

Neste campo apresentaremos nossos palestrantes em destaque, mostrando uma foto do(a) Palestrante, nome, área de atuação, redes social e ultimo, uma descrição sobre ele(a) para que possa fazer com que o usuário conheça mais sobres estes.


### Localização

Utilizar o Google Maps para mostrar a visão do GPS e a foto do local do evento.


### Cronograma

Se o usuário chegou até aqui, já passou por todo o conteúdo informativo da página inicial, então colocaremos outro campo, assim como no banner, para o usuário ir para nossa tela de cronograma onde o usuário terá acesso detalhado sobre cada dia de evento e inscrição caso deseje confirmar presença.

### FAQ

Campo com perguntas e respostas prontas que nossos usuários possam ter, que nossa equipe de marketing já tenha previsto, sendo adicionado uma abaixo da outra, será mostrado inicialmente apenas a pergunta, se aquela for a desejada pelo usuário, ele irá clicar no símbolo de + para mais informações sobre sua dúvida.

### Footer

Copyright do nosso site ao final da página Inicial.


## Tela Inscrever-se


- Ocupando o lado esquerdo da tela:
	
	Ao topo, terá o banner de divulgação do evento.
	
	#Cronograma
	
	Um campo designado para detalhamento sobre cada dia de evento separadamente. Contendo informações como: Tema da palestra, descrição do tema, nome do palestrante, data e hora.

- Ocupando o lado direito da tela:
	
	#Inscrição 
	
	O campo com mais utilização de back-end, será este, pois terá que guardar em nosso sistema interno o cadastro dos usuários para validar inscrições com o mesmo endereço (passivo à mudanças de lógica).
	
	- Dados solicitados pelo Form:
		- Nome Completo
		- Telefone
		- E-mail
		- Possui graduação completa?
			- [ ] Sim
			- [ ] Não
		- Nível de conhecimento em programação
			- Atuo na área há menos de 2 anos 
			- Atuo na área há mais de 2 anos 