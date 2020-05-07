# Crie seu próprio bot para Twitter

# EM CONTRUÇÃO

Usando a nova biblioteca do Twitter, criei um bot bem simples capaz de postar tweets, e em breve retweetar algumas coisas e quem sabe baixar videos para quem interagir com ele.


## Requisitos
Para desenvolver esse bot precisamos de :
- Node.js
- API do Twitter - [[Documentação]](https://developer.twitter.com/en/docs)
- Conta no Twitter 
- Conta no [Heroku](https://www.heroku.com/) <b>(opcional)</b>
- Clone esse repositório e instale as dependências.


## Conectando ao Twitter

1. [Torne sua conta no Twitter elegível](https://developer.twitter.com/en/apply)

2. Crie um [aplicativo para Twitter](https://developer.twitter.com/en/apps).

3. Gere sua [key e seu token](https://developer.twitter.com/en/docs/basics/apps/guides/the-app-management-dashboard).

4. Prepare seu arquivo [config.js](https://github.com/pefelippe/TwitterBot/blob/master/config.js)

	```javascript
	module.exports = {
	  consumer_key:         'sua-key',
	  consumer_secret:      'sua-key',
	  access_token:         'sua-key',
	  access_token_secret:  'sua-key'
	}

## Sobre a política do Twitter
Recomendo que acesse esse [site](https://help.twitter.com/pt/rules-and-policies/twitter-api), aqui você vai encontrar informações sobre as políticas e regras para que possamos usar as API's do Twitter.

Mas, no geral:

### SOBRE A API
>Damos acesso a partes do nosso serviço através das APIs para permitir que os desenvolvedores criem softwares que se integrem ao Twitter, como, por exemplo, uma solução que ajude uma empresa a medir opiniões dos clientes no Twitter.

### ACESSO A DADOS

>Quando alguém deseja acessar nossas APIs, solicitamos que seja registrado um aplicativo. Por padrão, aplicativos só podem acessar informações públicas no Twitter.

## E agora? <b> (opcional) </b>

Upar no Heroku!