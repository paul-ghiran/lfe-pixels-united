 const scoateSunet = function() {
  const { sunet, specie } = this;

  console.log(`${specie} a zis ${sunet}`)
}

const pisica = {
  specie: 'pisica',
  faSunet: scoateSunet
}

const caine = {
  specie: 'caine',
  sunet: 'ham', 
  faSunet: scoateSunet
}

const papagal = {
  specie: 'papagal',
  sunet: 'ham', 
  faSunet: scoateSunet
}

const rinocer = {
  specie: 'rinocer',
  sunet: '???', 
  faSunet: scoateSunet
}

pisica.faSunet();
caine.faSunet();
papagal.faSunet();
rinocer.faSunet();