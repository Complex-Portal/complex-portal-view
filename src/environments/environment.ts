// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const EBI_BASE_URL = '//wwwdev.ebi.ac.uk/';
const INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/complex/';


  export const environment = {
  production: false,
  evn: 'dev',

  analytics_id: 'UA-672146-11',
  ebi_base_url: EBI_BASE_URL,
  complex_ws_base_url: EBI_BASE_URL + 'intact/complex-ws',
  europepmc_base_url: EBI_BASE_URL + 'europepmc',
  pdb_base_url: EBI_BASE_URL + 'pdbe',
  ols_base_url: EBI_BASE_URL + 'ols/api/ontologies',
  ols_go_url: EBI_BASE_URL + 'ols/ontologies/go/terms?obo_id=',
  ols_eco_url: EBI_BASE_URL+ 'ols/ontologies/eco/terms?obo_id=',
  reactome_base_url: '//reactomedev.oicr.on.ca',
  intact_base_ftp: 'ftp://ftp.ebi.ac.uk/pub/databases/intact/complex/',
  complex_tab: INTACT_FTP_BASE_URL + 'current/complextab/',
  complex_psi25: INTACT_FTP_BASE_URL + 'current/psi25/',
  complex_psi30: INTACT_FTP_BASE_URL+ 'current/psi30/'
};
