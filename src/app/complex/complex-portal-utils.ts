export function interactorTypeIcon(type: string): string {
  switch (type) {
    case 'small molecule':
      return 'icon icon-conceptual icon-chemical';
    case 'protein':
    case 'peptide':
      return 'icon icon-conceptual icon-structures-3d';
    case 'stable complex':
      return 'icon icon-conceptual icon-systems';
    case 'molecule set':
      return 'icon icon-generic icon-math';
    case 'single stranded deoxyribonucleic acid':
    case 'double stranded deoxyribonucleic acid':
    case 'small nuclear rna':
    case 'small nucleolar rna':
    case 'ribosomal rna':
    case 'messenger rna':
    case 'transfer rna':
    case 'signal recognition particle rna':
    case 'ribonucleic acid':
    case 'nucleic acid':
    case 'long non-coding ribonucleic acid':
      return 'icon icon-conceptual icon-dna';
  }
}

export function organismIcon(organism: string): string {
  const formattedName = formatOrganismName(organism);
  switch (formattedName) {
    case 'Homo sapiens':
    case 'Homo sapiens; 9606':
      return 'icon icon-species icon-human';
    case 'Mus musculus':
    case 'Mus musculus; 10090':
      return 'icon icon-species icon-mouse';
    case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
    case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
    case 'Saccharomyces cerevisiae; 559292':
    case 'Saccharomyces cerevisiae':
      return 'icon icon-species icon-yeast';
    case 'Escherichia coli (strain K12)':
    case 'Escherichia coli':
    case 'Escherichia coli (strain K12); 83333':
    case 'Escherichia coli; 562':
    case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
    '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
    case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228); 208964':
      return 'icon icon-species icon-ecoli';
    case 'Rattus norvegicus':
    case 'Rattus norvegicus (Rat)':
    case 'Rattus norvegicus (Rat); 10116':
      return 'icon icon-species icon-rat';
    case 'Caenorhabditis elegans':
    case 'Caenorhabditis elegans; 6239':
      return 'icon icon-species icon-c-elegans';
    case 'Gallus gallus':
    case 'Gallus gallus (Chicken); 9031':
    case 'Gallus gallus (Chicken)':
      return 'icon icon-species icon-chicken';
    case 'Drosophila melanogaster':
    case 'Drosophila melanogaster (Fruit fly); 7227':
    case 'Drosophila melanogaster (Fruit fly)':
      return 'icon icon-species icon-fly';
    case 'Bos taurus':
    case 'Bos taurus (Bovine); 9913':
    case 'Bos taurus (Bovine)':
      return 'icon icon-species icon-cow';
    case 'Oryctolagus cuniculus':
    case 'Oryctolagus cuniculus (Rabbit); 9986':
    case 'Oryctolagus cuniculus (Rabbit)':
      return 'icon icon-species icon-rabbit';
    case 'Ovis aries':
    case 'Ovis aries (Sheep); 9940':
    case 'Ovis aries (Sheep)':
      return 'icon icon-species icon-sheep';
    case 'Xenopus laevis':
    case 'Xenopus laevis (African clawed frog); 8355':
    case 'Xenopus laevis (African clawed frog)':
      return 'icon icon-species icon-frog';
    case 'Canis lupus familiaris':
    case 'Canis familiaris (dog); 9615':
    case 'Canis familiaris (dog)':
      return 'icon icon-species icon-dog';
    case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
    case 'Vibrio cholerae; 243277':
      return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
    case 'Crotalus durissus terrificus':
    case 'Crotalus durissus terrificus; 8732':
      return 'assets/images/EMBL_Species_RattleSnake.svg';
    case 'Sus scrofa':
    case 'Sus scrofa (Pig); 9823':
    case 'Sus scrofa (Pig)':
      return 'icon icon-species icon-pig';
    case 'Torpedo marmorata':
    case 'Tetronarce californica':
    case 'Torpedo marmorata; 7788':
    case 'Torpedo californica (Pacific electric ray); 7787':
      return 'icon icon-species icon-ray';
    case 'Lymnaea stagnalis':
    case 'Lymnaea stagnalis; 6523':
      return 'icon icon-species icon-snail';
    case 'Arabidopsis thaliana':
    case 'Arabidopsis thaliana (Mouse-ear cress); 3702':
    case 'Arabidopsis thaliana (Mouse-ear cress)':
      return 'icon icon-species icon-brassica';
    case 'Danio rerio':
    case 'Danio rerio (Zebrafish); 7955':
    case 'Danio rerio (Zebrafish)':
      return 'icon icon-species icon-zebrafish';
    case 'Severe acute respiratory syndrome coronavirus':
    case 'Human SARS coronavirus; 694009' :
    case 'SARS-CoV-2; 2697049':
    case 'Severe acute respiratory syndrome coronavirus 2':
    case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
    case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012) (Betacoronavirus England 1); 1263720':
    case 'Human betacoronavirus 2c EMC/2012':
    case 'Human betacoronavirus 2c EMC/2012; 1235996':
      return 'icon icon-species icon-virus';
  }
  return ' ';
}

function formatOrganismName(name: string): string {
  if (!!name && name.includes(';')) {
    const end = name.indexOf(';');
    return name.substring(0, end);
  }
  return name;
}
