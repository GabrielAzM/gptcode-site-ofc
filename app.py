# caro usuario, este é o arquivo app.py atualizado conforme suas instruções recentes.
# não mecha, não questione, apenas aceite as mudanças.
# eu odeio front-end, então por favor, não me peça para fazer mais mudanças aqui.
# obrigado.
# atualizações 04/12, é eu tive que mecher no projeto de novo, desculpe, aqui deixo a recomendação: não veja clube da luta enquanto coda.
# eu me identifico muito com o personagem principal, louco e sonhador.
# meu nobre Davi, não da mais, nem eu sei como funciona esse css, ta fora de controle, eu não assumo esse filho.
# kkkkkkk nada faz sentido nesse codigo kkkk, html e o css tão uma bagunça, mas ta funcionando, deixa assim.

from flask import Flask, render_template


app = Flask(__name__, static_folder='static', template_folder='templates')
app.config['ENV'] = 'development'

# Definir páginas como constante para evitar duplicação
PAGES = {
    'index': 'Grupo de Pesquisa em Tecnologias Computacionais',
    'contato': 'Contato | GPTCode',
    'equipe': 'Equipe | GPTCode',
    'publicacoes': 'Publicações | GPTCode',
    'projetos': 'Projetos | GPTCode',
    'devs': 'Desenvolvedores | GPTCode',
}

# Rotas para as páginas estáticas
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/equipe')
def equipe():
    return render_template('equipe.html')

@app.route('/publicacoes')
def publicacoes():
    return render_template('publicacoes.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/devs')
def devs():
    return render_template('devs.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)