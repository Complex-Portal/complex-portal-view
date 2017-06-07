// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// Enviorment for localhost
var EBI_BASE_URL = '//wwwdev.ebi.ac.uk/';
var REACTOME_BASE_URL = '//reactomedev.oicr.on.ca';
var INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact/';
var COMPLEX__FTP_BASE_URL = INTACT_FTP_BASE_URL + 'complex/';
export var environment = {
    production: false,
    evn: 'dev',
    analytics_id: 'UA-672146-11',
    ebi_base_url: EBI_BASE_URL,
    complex_ws_base_url: EBI_BASE_URL + 'intact/complex-ws',
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
    intact_support_url: EBI_BASE_URL + 'support/intact',
    intact_training_url: EBI_BASE_URL + 'intact/resources/training',
};
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/environments/environment.js.map