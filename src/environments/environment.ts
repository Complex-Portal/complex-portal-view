// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

// Environment for production
const EBI_BASE_URL = 'https://www.ebi.ac.uk/';
const COMPLEX_LOCAL_BASE_URL = 'https://wwwdev.ebi.ac.uk/';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const REACTOME_BASE_URL = 'https://reactomedev.oicr.on.ca';
const INTACT_FTP_BASE_URL = 'http://ftp.ebi.ac.uk/pub/databases/intact/';
const COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
const COMPLEX_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Complex-Portal/complex-portal-documentation/master/';

export const environment = {
  production: false,
  evn: 'dev',

  analytics_id: 'UA-672146-11',
  ebi_base_url: EBI_BASE_URL,
  license_url: LICENSE_URL,
  complex_portal_documentation_url: COMPLEX_PORTAL_DOCUMENTATION_URL,
  complex_ws_base_url: COMPLEX_LOCAL_BASE_URL + 'intact/complex-ws',
  europepmc_base_url: EBI_BASE_URL + 'europepmc',
  pdb_base_url: EBI_BASE_URL + 'pdbe',
  ols_base_url: EBI_BASE_URL + 'ols/api/ontologies',
  ols_go_url: EBI_BASE_URL + 'ols/ontologies/go/terms?obo_id=',
  ols_eco_url: EBI_BASE_URL + 'ols/ontologies/eco/terms?obo_id=',
  reactome_base_url: REACTOME_BASE_URL,
  complex_current: COMPLEX__FTP_BASE_URL + 'current',
  complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
  complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
  complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
  complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
  intact_base_url: EBI_BASE_URL + 'intact',
  complex_portal_support_url: EBI_BASE_URL + 'support/complexportal',
  intact_training_url: EBI_BASE_URL + 'intact/resources/training',
};
