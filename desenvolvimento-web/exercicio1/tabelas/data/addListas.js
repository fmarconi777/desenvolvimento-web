const listaMedalhas = [
  {ano: '2016', local: 'Rio de Janeiro', ouro: '7', prata: '6',  bronze: '6',   total: '19', colocacao: '13º'},
  {ano: '2012', local: 'Londres', ouro: '3', prata: '5',  bronze: '9',   total: '17', colocacao: '22º'},
  {ano: '2008', local: 'Pequim', ouro: '3', prata: '4',  bronze: '10',  total: '17', colocacao: '22º'},
  {ano: '2004', local: 'Atenas', ouro: '5', prata: '2',  bronze: '3',   total: '10', colocacao: '16º'},
  {ano: '2000', local: 'Sydney', ouro: '', prata: '6',  bronze: '6',   total: '12', colocacao: '52º'},
  {ano: '1996', local: 'Atlanta', ouro: '3', prata: '3',  bronze: '9',   total: '15', colocacao: '25º'},
  {ano: '1992', local: 'Barcelona', ouro: '2', prata: '1',  bronze: '',   total: '3',  colocacao: '25º'},
  {ano: '1988', local: 'Seul', ouro: '1', prata: '2',  bronze: '3',   total: '6',  colocacao: '24º'},
  {ano: '1984', local: 'Los Angeles', ouro: '1', prata: '5',  bronze: '2',   total: '8',  colocacao: '19º'},
  {ano: '1980', local: 'Moscou', ouro: '2', prata: '',  bronze: '2',   total: '4',  colocacao: '17º'},
  {ano: '1976', local: 'Montreal', ouro: '', prata: '',  bronze: '2',   total: '2',  colocacao: '36º'},
  {ano: '1972', local: 'Munique', ouro: '', prata: '',  bronze: '2',   total: '2',  colocacao: '41º'},
  {ano: '1968', local: 'Cidade do México', ouro: '', prata: '1',  bronze: '2',   total: '3',  colocacao: '35º'},
  {ano: '1964', local: 'Tóquio', ouro: '', prata: '',  bronze: '1',   total: '1',  colocacao: '35º'},
  {ano: '1960', local: 'Roma', ouro: '', prata: '',  bronze: '2',   total: '2',  colocacao: '39º'},
  {ano: '1956', local: 'Melbourne', ouro: '1', prata: '',  bronze: '',   total: '1',  colocacao: '24º'},
  {ano: '1952', local: 'Helsinque', ouro: '1', prata: '',  bronze: '2',   total: '3',  colocacao: '24º'},
  {ano: '1948', local: 'Londres', ouro: '', prata: '',  bronze: '1',   total: '1',  colocacao: '34º'},
  {ano: '1936', local: 'Berlim', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'sc'},
  {ano: '1932', local: 'Los Angeles', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'sc'},
  {ano: '1928', local: 'Amsterdam', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'},
  {ano: '1924', local: 'Paris', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'sc '},
  {ano: '1920', local: 'Antuérpia', ouro: '1', prata: '1',  bronze: '1',   total: '3',  colocacao: '15º'},
  {ano: '1912', local: 'Estocolmo', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'},
  {ano: '1908', local: 'Londres', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'},
  {ano: '1904', local: 'St. Louis', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'},
  {ano: '1900', local: 'Paris', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'},
  {ano: '1896', local: 'Atenas', ouro: '', prata: '',  bronze: '',   total: '',  colocacao: 'np'}
  ]

const listaMedalhaGenero = [
{modalidade: 'Vela', ouroh: '6', pratah: '3', bronzeh: '7', totalh: '16', ourom: '1', pratam: '0',  bronzem: '1', totalm: '2'}, 
{modalidade: 'Atletismo', ouroh: '4', pratah: '3', bronzeh: '8', totalh: '15', ourom: '1', pratam: '0',  bronzem: '1', totalm: '2'}, 
{modalidade: 'Vôlei', ouroh: '3', pratah: '3', bronzeh: '0', totalh: '6', ourom: '2', pratam: '0', bronzem: '2', totalm: '4'}, 
{modalidade: 'Judô', ouroh: '2', pratah: '3', bronzeh: '12', totalh: '17', ourom: '2', pratam: '0', bronzem: '3', totalm: '5'}, 
{modalidade: 'Voleibol de Praia', ouroh: '2', pratah: '3', bronzeh: '1', totalh: '6', ourom: '1', pratam: '4', bronzem: '2', totalm: '7'}, 
{modalidade: 'Natação', ouroh: '1', pratah: '4', bronzeh: '8', totalh: '13', ourom: '0', pratam: '0', bronzem: '1', totalm: '1'}, 
{modalidade: 'Tiro', ouroh: '1', pratah: '2', bronzeh: '1', totalh: '4', ourom: 'nenhuma', pratam: 'nenhuma', bronzem: 'nenhuma', totalm: 'nenhuma'}, 
{modalidade: 'Ginástica', ouroh: '1', pratah: '2', bronzeh: '1', totalh: '4', ourom: 'nenhuma', pratam: 'nenhuma', bronzem: 'nenhuma', totalm: 'nenhuma'}, 
{modalidade: 'Boxe', ouroh: '1', pratah: '1', bronzeh: '2', totalh: '4', ourom: '0', pratam: '0', bronzem: '1', totalm: '1'}, 
{modalidade: 'Hipismo', ouroh: '1', pratah: '0', bronzeh: '2', totalh: '3', ourom: 'nenhuma', pratam: 'nenhuma', bronzem: 'nenhuma', totalm: 'nenhuma'}, 
{modalidade: 'Futebol', ouroh: '1', pratah: '3', bronzeh: '2', totalh: '6', ourom: '0', pratam: '2', bronzem: '0', totalm: '2'}, 
{modalidade: 'Basquete', ouroh: '0', pratah: '0', bronzeh: '3', totalh: '3', ourom: '0', pratam: '1', bronzem: '1', totalm: '2'}, 
{modalidade: 'Canoagem', ouroh: '0', pratah: '2', bronzeh: '1',  totalh: '3', ourom: 'nenhuma', pratam: 'nenhuma', bronzem: 'nenhuma', totalm: 'nenhuma'}, 
{modalidade: 'Taekwondo', ouroh: '0',  pratah: '0',  bronzeh: '1',  totalh: '1', ourom: '0',  pratam: '0',  bronzem: '1',   totalm: '1'}, 
{modalidade: 'Pentatlo Moderno', ouroh: 'nenhuma',   pratah: 'nenhuma', bronzeh: 'nenhuma', totalh: 'nenhuma', ourom: '0',   pratam: '0', bronzem: '1', totalm: '1'}, 
{modalidade: 'TOTAL', ouroh: '23', pratah: '29', bronzeh: '49', totalh: '101',  ourom: '7', pratam: '7', bronzem: '14', totalm: '28'} 
]

const listaJogosInverno = [
{edicao: '1992 Albertville', atletas: '7', ouro: '0', prata: '0', bronze: '0', total: '0', posicao: '—'},
{edicao: '1994 Lillehammer', atletas: '1', ouro: '0',  prata: '0', bronze: '0', total: '0', posicao: '—'},
{edicao: '1998 Nagano', atletas: '1', ouro: '0',  prata: '0', bronze: '0',  total: '0', posicao: '—'},
{edicao: '2002 Salt Lake City', atletas: '10', ouro: '0',  prata: '0', bronze: '0',  total: '0', posicao: '—'},
{edicao: '2006 Turim', atletas: '10', ouro: '0',  prata: '0', bronze: '0',  total: '0', posicao: '—'},
{edicao: '2010 Vancouver', atletas: '5', ouro: '0',  prata: '0', bronze: '0',  total: '0', posicao: '—'},
{edicao: '2014 Sóchi', atletas: '13', ouro: '0',  prata: '0',   bronze: '0',  total: '0', posicao: '—'},
{edicao: '2018 PyeongChang', atletas: '9', ouro: '0',  prata: '0', bronze: '0',  total: '0', posicao: '—'},
{edicao: '2022 Pequim', atletas: '', ouro: '',  prata: '',   bronze: '',  total: '', posicao: '—'},
{edicao: 'TOTAL', atletas: '56', ouro: '0',  prata: '0', bronze: '0', total: '0', posicao: '—'}
]

const listaJogosVerao = [
{edicao: '1920 Antuérpia', atletas: '21', ouro: '1', prata: '1', bronze: '1', total: '3', posicao: '15'}, 
{edicao: '1924 Paris', atletas: '12', ouro: '0', prata: '0', bronze: '0', total: '0', posicao: '—'}, 
{edicao: '1928 Amsterdã', atletas: 'Não competiu', ouro: 'Não competiu', prata: 'Não competiu', bronze: 'Não competiu', total: 'Não competiu', posicao: 'Não competiu'}, 
{edicao: '1932 Los Angeles', atletas: '67', ouro: '0', prata: '0', bronze: '0', total: '0', posicao: '—'}, 
{edicao: '1936 Berlim', atletas: '94', ouro: '0', prata: '0', bronze: '0', total: '0', posicao: '—'}, 
{edicao: '1948 Londres', atletas: '77', ouro: '0', prata: '0', bronze: '1', total: '1', posicao: '34'}, 
{edicao: '1952 Helsinque', atletas: '108', ouro: '1', prata: '0', bronze: '2', total: '3', posicao: '25'}, 
{edicao: '1956 Melbourne', atletas: '48', ouro: '1', prata: '0', bronze: '0', total: '1', posicao: '25'}, 
{edicao: '1960 Roma', atletas: '81', ouro: '0', prata: '0', bronze: '2', total: '2', posicao: '39'}, 
{edicao: '1964 Tóquio', atletas: '68', ouro: '0', prata: '0', bronze: '1', total: '1', posicao: '35'}, 
{edicao: '1968 Cidade do México', atletas: '84', ouro: '0', prata: '1', bronze: '2', total: '3', posicao: '35'}, 
{edicao: '1972 Munique', atletas: '89', ouro: '0', prata: '0', bronze: '2', total: '2', posicao: '41'}, 
{edicao: '1976 Montreal', atletas: '93', ouro: '0', prata: '0', bronze: '2', total: '2', posicao: '36'}, 
{edicao: '1980 Moscou', atletas: '109', ouro: '2', prata: '0', bronze: '2', total: '4', posicao: '17'}, 
{edicao: '1984 Los Angeles', atletas: '151', ouro: '1', prata: '5', bronze: '2', total: '8', posicao: '19'}, 
{edicao: '1988 Seul', atletas: '171', ouro: '1', prata: '2', bronze: '3', total: '6', posicao: '24'}, 
{edicao: '1992 Barcelona', atletas: '197', ouro: '2', prata: '1', bronze: '0', total: '3', posicao: '25'}, 
{edicao: '1996 Atlanta', atletas: '225', ouro: '3', prata: '3', bronze: '9', total: '15', posicao: '25'}, 
{edicao: '2000 Sydney', atletas: '205', ouro: '0', prata: '6', bronze: '6', total: '12', posicao: '53'}, 
{edicao: '2004 Atenas', atletas: '247', ouro: '5', prata: '2', bronze: '3', total: '10', posicao: '16'}, 
{edicao: '2008 Pequim', atletas: '277', ouro: '3', prata: '4', bronze: '10', total: '17', posicao: '23'}, 
{edicao: '2012 Londres', atletas: '259', ouro: '3', prata: '5', bronze: '9', total: '17', posicao: '22'}, 
{edicao: '2016 Rio de Janeiro', atletas: '465', ouro: '7', prata: '6', bronze: '6', total: '19', posicao: '13'}, 
{edicao: '2020 Tóquio', atletas: '', ouro: '', prata: '', bronze: '', total: '', posicao: '-'}, 
{edicao: '2024 Paris', atletas: '', ouro: '', prata: '', bronze: '', total: '', posicao: '-'}, 
{edicao: '2028 Los Angeles', atletas: '', ouro: '', prata: '', bronze: '', total: '', posicao: '-'}, 
{edicao: 'TOTAL', atletas: '2683', ouro: '30', prata: '36', bronze: '63', total: '129', posicao: '35'} 
]

const listaMedalhaModalidade = [
{modalidade: 'Vela', ouro: '7', prata: '3', bronze: '8', total: '18', posicao: '11'},
{modalidade: 'Atletismo', ouro: '5', prata: '3', bronze: '9', total: '17', posicao: '36'},
{modalidade: 'Vôlei', ouro: '5', prata: '3', bronze: '2', total: '10', posicao: '2'},
{modalidade: 'Judô', ouro: '4', prata: '3', bronze: '15', total: '22', posicao: '9'},
{modalidade: 'Voleibol de Praia', ouro: '3', prata: '7', bronze: '3', total: '13', posicao: '2'},
{modalidade: 'Futebol', ouro: '1', prata: '5', bronze: '2', total: '8', posicao: '6'},
{modalidade: 'Natação', ouro: '1', prata: '4', bronze: '9', total: '14', posicao: '30'},
{modalidade: 'Tiro', ouro: '1', prata: '2', bronze: '1', total: '4', posicao: '34'},
{modalidade: 'Ginástica', ouro: '1', prata: '2', bronze: '1', total: '4', posicao: '26'},
{modalidade: 'Boxe', ouro: '1', prata: '1', bronze: '3', total: '5', posicao: '37'},
{modalidade: 'Hipismo', ouro: '1', prata: '0', bronze: '2', total: '3', posicao: '20'},
{modalidade: 'Canoagem', ouro: '0', prata: '2', bronze: '1', total: '3', posicao: '34'},
{modalidade: 'Basquete', ouro: '0', prata: '1', bronze: '4', total: '5', posicao: '9'},
{modalidade: 'Taekwondo', ouro: '0', prata: '0', bronze: '2', total: '2', posicao: '29'},
{modalidade: 'Pentatlo Moderno', ouro: '0', prata: '0', bronze: '1', total: '1', posicao: '21'},
{modalidade: 'TOTAL', ouro: '30', prata: '36', bronze: '63', total: '129', posicao: '35'}
]

function addListaMedalhas() {
  let tBodyInsert = document.getElementById('listaMedalhas').getElementsByTagName('tbody')[0]
  listaMedalhas.forEach(element => {
    let newRow = tBodyInsert.insertRow();
    Object.keys(element).forEach(item => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(element[item]));
    })
  });
}

addListaMedalhas()

function addListaMedalhasGenero() {
  let tBodyInsert = document.getElementById('listaMedalhasGenero').getElementsByTagName('tbody')[0]
  listaMedalhaGenero.forEach(element => {
    let newRow = tBodyInsert.insertRow();
    Object.keys(element).forEach(item => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(element[item]));
    })
  });
}

addListaMedalhasGenero()

function addListaJogosInverno() {
  let tBodyInsert = document.getElementById('jogosInverno').getElementsByTagName('tbody')[0]
  listaJogosInverno.forEach(element => {
    let newRow = tBodyInsert.insertRow();
    Object.keys(element).forEach(item => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(element[item]));
    })
  });
}

addListaJogosInverno()

function addListaJogosVerao() {
  let tBodyInsert = document.getElementById('jogosVerao').getElementsByTagName('tbody')[0]
  listaJogosVerao.forEach(element => {
    let newRow = tBodyInsert.insertRow();
    Object.keys(element).forEach(item => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(element[item]));
    })
  });
}

addListaJogosVerao()

function addListaMedalhaModalidade() {
  let tBodyInsert = document.getElementById('medalhaModalidade').getElementsByTagName('tbody')[0]
  listaMedalhaModalidade.forEach(element => {
    let newRow = tBodyInsert.insertRow();
    Object.keys(element).forEach(item => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(element[item]));
    })
  });
}

addListaMedalhaModalidade()
