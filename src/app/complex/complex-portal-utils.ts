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
    case 'Severe acute':
    case 'Human SARS' :
    case 'SARS-CoV-2':
    case 'Middle East':
    case 'Human betacoronavirus':
      return 'icon icon-species icon-virus';
  }
  return '';
}

function formatOrganismName(name: string): string {
  return (name || '?')
    .split(';')[0]
    .split(' ').slice(0, 2)
    .join(' ');
}


export type GroupedByPropertyArray<T, K extends keyof T> = T[][];

export function groupBy<T, K extends keyof T>(arr: T[], property: K): Map<T[K], T[]> {
  const groupsMap = new Map<T[K], T[]>();

  // Group the elements by the specified property
  arr.forEach(item => {
    const key = item[property];
    if (!groupsMap.has(key)) {
      groupsMap.set(key, []);
    }
    groupsMap.get(key)!.push(item);
  });
  return groupsMap;
}

/**
 * Groups an array of elements into an array of arrays based on a specified property.
 * The groups are sorted based on the provided sorting function applied to the property values.
 *
 * @param arr - The input array of elements to be grouped.
 * @param property - The property name to group the elements by.
 * @param sortFn - A comparator function to sort the groups based on the property values.
 *                 It should take two property values and return a number:
 *                 negative if first < second,
 *                 zero if first == second,
 *                 positive if first > second.
 * @returns An array of groups (arrays), each containing elements with the same property value,
 *          ordered based on the sortFn.
 */
export function groupByPropertyToArray<T, K extends keyof T>(
  arr: T[],
  property: K,
  sortFn: (a: T[K], b: T[K]) => number
): GroupedByPropertyArray<T, K> {
  const groupsMap = groupBy(arr, property);

  // Extract the unique keys and sort them using the provided sort function
  const sortedKeys = Array.from(groupsMap.keys()).sort(sortFn);

  // Map the sorted keys to their corresponding groups
  return sortedKeys.map(key => groupsMap.get(key)!);
}
