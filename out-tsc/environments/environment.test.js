/**
 * Created by Maximilian Koch (mkoch@ebi.ac.uk) on 01/06/2017.
 */
// Enviorment for GitHub Page
var EBI_BASE_URL = '//www.ebi.ac.uk/';
var REACTOME_BASE_URL = '//reactome.org';
var INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
var COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
export var environment = {
    production: true,
    evn: 'test',
    analytics_id: 'UA-672146-13',
    ebi_base_url: EBI_BASE_URL,
    complex_ws_base_url: EBI_BASE_URL + 'intact/complex-ws',
    europepmc_base_url: EBI_BASE_URL + 'europepmc',
    pdb_base_url: EBI_BASE_URL + 'pdbe',
    ols_base_url: EBI_BASE_URL + 'ols/api/ontologies',
    ols_go_url: EBI_BASE_URL + 'ols/ontologies/go/terms?obo_id=',
    ols_eco_url: EBI_BASE_URL + 'ols/ontologies/eco/terms?obo_id=',
    complex_current: COMPLEX__FTP_BASE_URL + 'current',
    complex_tab: COMPLEX__FTP_BASE_URL + 'current/complextab/',
    complex_tab_readme: COMPLEX__FTP_BASE_URL + 'current/complextab/README.htm',
    complex_psi25: COMPLEX__FTP_BASE_URL + 'current/psi25/',
    complex_psi30: COMPLEX__FTP_BASE_URL + 'current/psi30/',
    intact_base_url: EBI_BASE_URL + 'intact',
    intact_support_url: EBI_BASE_URL + 'support/intact',
    intact_training_url: EBI_BASE_URL + 'intact/resources/training',
    reactome_base_url: REACTOME_BASE_URL,
};
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/environments/environment.test.js.map