/**
 * Created by Maximilian Koch (mkoch@ebi.ac.uk) on 01/06/2017.
 */

// Environment for GitHub Page
const EBI_BASE_URL = 'https://www.ebi.ac.uk/';
const COMPLEX_BASE_URL = 'https://wwwdev.ebi.ac.uk/';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const REACTOME_BASE_URL = 'https://reactome.org';
const INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
const COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
const COMPLEX_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Complex-Portal/complex-portal-documentation/update-sab-members/';
const INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/update-sab-members/';

export const environment = {
  production: false,
  evn: 'test',

  analytics_id: 'UA-672146-13',
  ebi_base_url: EBI_BASE_URL,
  license_url: LICENSE_URL,
  complex_portal_documentation_url: COMPLEX_PORTAL_DOCUMENTATION_URL,
  intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL,
  complex_ws_base_url: COMPLEX_BASE_URL + 'intact/complex-ws',
  europepmc_base_url: EBI_BASE_URL + 'europepmc',
  pdb_base_url: EBI_BASE_URL + 'pdbe',
  ols_base_url: EBI_BASE_URL + 'ols4/api/ontologies',
  ols_go_url: EBI_BASE_URL + 'ols4/ontologies/go/terms?obo_id=',
  ols_eco_url: EBI_BASE_URL + 'ols4/ontologies/eco/terms?obo_id=',
  complex_current: COMPLEX__FTP_BASE_URL + 'current',
  complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
  complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
  complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
  complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
  intact_base_url: EBI_BASE_URL + 'intact',
  complex_portal_support_url: EBI_BASE_URL + 'support/complexportal',
  training_url: EBI_BASE_URL + 'training/search-results?query=complex%20portal',
  reactome_base_url: REACTOME_BASE_URL,
};
