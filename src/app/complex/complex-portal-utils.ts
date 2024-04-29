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
  switch (organism) {
    case 'Homo sapiens':
      return 'icon icon-species icon-human';
    case 'Mus musculus':
      return 'icon icon-species icon-mouse';
    case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
    case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
      return 'icon icon-species icon-yeast';
    case 'Escherichia coli (strain K12)':
    case 'Escherichia coli':
    case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
    '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
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
    case 'Canis lupus familiaris':
      return 'icon icon-species icon-dog';
    case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
      return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
    case 'Crotalus durissus terrificus':
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
    case 'Severe acute respiratory syndrome coronavirus':
    case 'Severe acute respiratory syndrome coronavirus 2':
    case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
    case 'Human betacoronavirus 2c EMC/2012':
      return 'icon icon-species icon-virus';
  }
  return '';
}
