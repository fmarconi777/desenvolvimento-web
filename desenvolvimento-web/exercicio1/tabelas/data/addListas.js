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
