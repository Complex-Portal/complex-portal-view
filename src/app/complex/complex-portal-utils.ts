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
      return 'icon icon-species icon-human';
    case 'Mus musculus':
      return 'icon icon-species icon-mouse';
    case 'Schizosaccharomyces pombe':
    case 'Saccharomyces cerevisiae':
      return 'icon icon-species icon-yeast';
    case 'Escherichia coli':
    case 'Pseudomonas aeruginosa':
    case 'Klebsiella pneumoniae':
    case 'Chlamydomonas reinhardtii':
      return 'icon icon-species icon-ecoli';
    case 'Rattus norvegicus':
      return 'icon icon-species icon-rat';
    case 'Caenorhabditis elegans':
      return 'icon icon-species icon-c-elegans';
    case 'Gallus gallus':
      return 'icon icon-species icon-chicken';
    case 'Drosophila melanogaster':
      return 'icon icon-species icon-fly';
    case 'Bos taurus':
      return 'icon icon-species icon-cow';
    case 'Oryctolagus cuniculus':
      return 'icon icon-species icon-rabbit';
    case 'Ovis aries':
      return 'icon icon-species icon-sheep';
    case 'Xenopus laevis':
      return 'icon icon-species icon-frog';
    case 'Canis lupus':
    case 'Canis familiaris':
      return 'icon icon-species icon-dog';
    case 'Vibrio cholerae':
      return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
    case 'Crotalus durissus':
      return 'assets/images/EMBL_Species_RattleSnake.svg';
    case 'Sus scrofa':
      return 'icon icon-species icon-pig';
    case 'Torpedo marmorata':
    case 'Tetronarce californica':
      return 'icon icon-species icon-ray';
    case 'Lymnaea stagnalis':
      return 'icon icon-species icon-snail';
    case 'Arabidopsis thaliana':
      return 'icon icon-species icon-brassica';
    case 'Danio rerio':
      return 'icon icon-species icon-zebrafish';
    case 'Severe acute':
    case 'Human SARS' :
    case 'SARS-CoV-2':
    case 'Middle East':
    case 'Human betacoronavirus':
      return 'icon icon-species icon-virus';
  }
  return '';
}

export function ecoCodeName(ecoCode: string): string {
  switch (ecoCode) {
    case ('ECO:0005547'):
      return 'curator inference';
    case ('ECO:0000353'):
      return 'physical interaction evidence';
    case ('ECO:0005610'):
      return 'homology inference';
    case ('ECO:0005544'):
      return 'orthology inference';
    case ('ECO:0005546'):
      return 'paralogy inference';
    case ('ECO:0005543'):
      return 'mixed species evidence inference';
    case ('ECO:0005542'):
      return 'single species evidence inference';
    // TODO: review ECO codes below, which we did not have a label for
    case ('ECO:0007751'):
      return 'inferential evidence used in manual assertion';
    case ('ECO:0000269'):
      return 'experimental evidence used in manual assertion';
    case ('ECO:0000314'):
      return 'direct assay evidence used in manual assertion';
    case ('ECO:0008006'):
      return 'deep learning prediction';
    // TODO: review new ECO codes below added for UniPlex complexes
    case ('ECO:0007653'):
      return 'automatically integrated combinatorial prediction';
    case ('ECO:0008004'):
      return 'machine learning prediction';
    default:
      return null;
  }
}

export function ecoCodeStar(ecoCode: string): number {
  switch (ecoCode) {
    case ('ECO:0000353'): // physical interaction evidence
    case ('ECO:0000314'): // direct assay evidence used in manual assertion
    case ('ECO:0000269'): // experimental evidence used in manual assertion
      return 5;
    case ('ECO:0005610'): // inferred by homology
    case ('ECO:0005544'): // inferred by orthology
    case ('ECO:0005546'): // inferred by paralogy
    case ('ECO:0005542'): // inferred from single species evidence
    case ('ECO:0005543'): // inferred from mixed species evidence
      return 4;
    case ('ECO:0005547'): // inferred by curator
      return 3;
    case ('ECO:0007653'): // automatically integrated combinatorial prediction
      return 2;
    case ('ECO:0008006'): // deep learning prediction
    case ('ECO:0008004'): // machine learning prediction
      return 1;
    default:
      return null;
  }
}

function formatOrganismName(name: string): string {
  return (name || '?')
    .split(';')[0]
    .split(' ').slice(0, 2)
    .join(' ');
}
