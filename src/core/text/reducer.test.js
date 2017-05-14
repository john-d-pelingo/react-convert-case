import { CASES } from '../../core/constants';

import { textReducer } from './reducer';
import {
    CLEAR_TEXT,
    COPY_TEXT,
    RESET_TEXT,
    SET_CAMEL_CASE,
    SET_CONSTANT_CASE,
    SET_DOT_CASE,
    SET_HEADER_CASE,
    SET_LOWER_CASE,
    SET_LOWER_FIRST_CASE,
    SET_NO_CASE,
    SET_PARAM_CASE,
    SET_PASCAL_CASE,
    SET_PATH_CASE,
    SET_SENTENCE_CASE,
    SET_SNAKE_CASE,
    SET_SWAP_CASE,
    SET_TITLE_CASE,
    SET_UPPER_CASE,
    SET_UPPER_FIRST_CASE,
    UPDATE_CURRENT_TEXT
} from './action-types';

describe('Text reducer', () => {
    let initialState;
    let newText;

    beforeEach(() => {
        initialState = {
            copied: 'Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio',
            current: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            initial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            lastCased: 'uT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS SUSCIPIT LABORIOSAM, NISI UT ALIQUID EX EA COMMODI CONSEQUATUR?'
        };

        newText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.';
    });

    describe('CLEAR_TEXT', () => {
        it('should clear all texts but copied', () => {
            const nextState = textReducer(initialState, {
                type: CLEAR_TEXT,
                payload: {}
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('');
            expect(nextState.initial).toBe('');
            expect(nextState.lastCased).toBe('');
        });
    });

    describe('COPY_TEXT', () => {
        it('should copy the correct text', () => {
            const nextState = textReducer(initialState, {
                type: COPY_TEXT,
                payload: {
                    newText
                }
            });

            expect(nextState.copied).toBe('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
            expect(nextState.current).toBe(initialState.current);
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe(initialState.lastCased);
        });
    });

    describe('RESET_TEXT', () => {
        it('should reset all texts', () => {
            const nextState = textReducer(initialState, {
                type: RESET_TEXT,
                payload: {}
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe(initialState.initial);
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe(initialState.lastCased);
        });
    });

    describe('SET_CAMEL_CASE', () => {
        it('should return camel cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_CAMEL_CASE,
                payload: {
                    newCase: CASES.CAMEL.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('loremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEst');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('loremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEst');
        });
    });

    describe('SET_CONSTANT_CASE', () => {
        it('should return constant cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_CONSTANT_CASE,
                payload: {
                    newCase: CASES.CONSTANT.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('LOREM_IPSUM_DOLOR_SIT_AMET_CONSECTETUR_ADIPISICING_ELIT_SED_DO_EIUSMOD_TEMPOR_INCIDIDUNT_UT_LABORE_ET_DOLORE_MAGNA_ALIQUA_UT_ENIM_AD_MINIM_VENIAM_QUIS_NOSTRUD_EXERCITATION_ULLAMCO_LABORIS_NISI_UT_ALIQUIP_EX_EA_COMMODO_CONSEQUAT_DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('LOREM_IPSUM_DOLOR_SIT_AMET_CONSECTETUR_ADIPISICING_ELIT_SED_DO_EIUSMOD_TEMPOR_INCIDIDUNT_UT_LABORE_ET_DOLORE_MAGNA_ALIQUA_UT_ENIM_AD_MINIM_VENIAM_QUIS_NOSTRUD_EXERCITATION_ULLAMCO_LABORIS_NISI_UT_ALIQUIP_EX_EA_COMMODO_CONSEQUAT_DUIS_AUTE_IRURE_DOLOR_IN_REPREHENDERIT_IN_VOLUPTATE_VELIT_ESSE_CILLUM_DOLORE_EU_FUGIAT_NULLA_PARIATUR_EXCEPTEUR_SINT_OCCAECAT_CUPIDATAT_NON_PROIDENT_SUNT_IN_CULPA_QUI_OFFICIA_DESERUNT_MOLLIT_ANIM_ID_EST');
        });
    });

    describe('SET_DOT_CASE', () => {
        it('should return dot cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_DOT_CASE,
                payload: {
                    newCase: CASES.DOT.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem.ipsum.dolor.sit.amet.consectetur.adipisicing.elit.sed.do.eiusmod.tempor.incididunt.ut.labore.et.dolore.magna.aliqua.ut.enim.ad.minim.veniam.quis.nostrud.exercitation.ullamco.laboris.nisi.ut.aliquip.ex.ea.commodo.consequat.duis.aute.irure.dolor.in.reprehenderit.in.voluptate.velit.esse.cillum.dolore.eu.fugiat.nulla.pariatur.excepteur.sint.occaecat.cupidatat.non.proident.sunt.in.culpa.qui.officia.deserunt.mollit.anim.id.est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem.ipsum.dolor.sit.amet.consectetur.adipisicing.elit.sed.do.eiusmod.tempor.incididunt.ut.labore.et.dolore.magna.aliqua.ut.enim.ad.minim.veniam.quis.nostrud.exercitation.ullamco.laboris.nisi.ut.aliquip.ex.ea.commodo.consequat.duis.aute.irure.dolor.in.reprehenderit.in.voluptate.velit.esse.cillum.dolore.eu.fugiat.nulla.pariatur.excepteur.sint.occaecat.cupidatat.non.proident.sunt.in.culpa.qui.officia.deserunt.mollit.anim.id.est');
        });
    });

    describe('SET_HEADER_CASE', () => {
        it('should return header cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_HEADER_CASE,
                payload: {
                    newCase: CASES.HEADER.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipisicing-Elit-Sed-Do-Eiusmod-Tempor-Incididunt-Ut-Labore-Et-Dolore-Magna-Aliqua-Ut-Enim-Ad-Minim-Veniam-Quis-Nostrud-Exercitation-Ullamco-Laboris-Nisi-Ut-Aliquip-Ex-Ea-Commodo-Consequat-Duis-Aute-Irure-Dolor-In-Reprehenderit-In-Voluptate-Velit-Esse-Cillum-Dolore-Eu-Fugiat-Nulla-Pariatur-Excepteur-Sint-Occaecat-Cupidatat-Non-Proident-Sunt-In-Culpa-Qui-Officia-Deserunt-Mollit-Anim-Id-Est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipisicing-Elit-Sed-Do-Eiusmod-Tempor-Incididunt-Ut-Labore-Et-Dolore-Magna-Aliqua-Ut-Enim-Ad-Minim-Veniam-Quis-Nostrud-Exercitation-Ullamco-Laboris-Nisi-Ut-Aliquip-Ex-Ea-Commodo-Consequat-Duis-Aute-Irure-Dolor-In-Reprehenderit-In-Voluptate-Velit-Esse-Cillum-Dolore-Eu-Fugiat-Nulla-Pariatur-Excepteur-Sint-Occaecat-Cupidatat-Non-Proident-Sunt-In-Culpa-Qui-Officia-Deserunt-Mollit-Anim-Id-Est');
        });
    });

    describe('SET_LOWER_CASE', () => {
        it('should return lower cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_LOWER_CASE,
                payload: {
                    newCase: CASES.LOWER.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
        });
    });

    describe('SET_LOWER_FIRST_CASE', () => {
        it('should return lower first cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_LOWER_FIRST_CASE,
                payload: {
                    newCase: CASES.LOWER_FIRST.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
        });
    });

    describe('SET_NO_CASE', () => {
        it('should return no cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_NO_CASE,
                payload: {
                    newCase: CASES.NO.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est');
        });
    });

    describe('SET_PARAM_CASE', () => {
        it('should return param cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_PARAM_CASE,
                payload: {
                    newCase: CASES.PARAM.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-ut-enim-ad-minim-veniam-quis-nostrud-exercitation-ullamco-laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor-in-reprehenderit-in-voluptate-velit-esse-cillum-dolore-eu-fugiat-nulla-pariatur-excepteur-sint-occaecat-cupidatat-non-proident-sunt-in-culpa-qui-officia-deserunt-mollit-anim-id-est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-ut-enim-ad-minim-veniam-quis-nostrud-exercitation-ullamco-laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor-in-reprehenderit-in-voluptate-velit-esse-cillum-dolore-eu-fugiat-nulla-pariatur-excepteur-sint-occaecat-cupidatat-non-proident-sunt-in-culpa-qui-officia-deserunt-mollit-anim-id-est');
        });
    });

    describe('SET_PASCAL_CASE', () => {
        it('should return pascal cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_PASCAL_CASE,
                payload: {
                    newCase: CASES.PASCAL.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('LoremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEst');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('LoremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEst');
        });
    });

    describe('SET_PATH_CASE', () => {
        it('should return path cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_PATH_CASE,
                payload: {
                    newCase: CASES.PATH.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem/ipsum/dolor/sit/amet/consectetur/adipisicing/elit/sed/do/eiusmod/tempor/incididunt/ut/labore/et/dolore/magna/aliqua/ut/enim/ad/minim/veniam/quis/nostrud/exercitation/ullamco/laboris/nisi/ut/aliquip/ex/ea/commodo/consequat/duis/aute/irure/dolor/in/reprehenderit/in/voluptate/velit/esse/cillum/dolore/eu/fugiat/nulla/pariatur/excepteur/sint/occaecat/cupidatat/non/proident/sunt/in/culpa/qui/officia/deserunt/mollit/anim/id/est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem/ipsum/dolor/sit/amet/consectetur/adipisicing/elit/sed/do/eiusmod/tempor/incididunt/ut/labore/et/dolore/magna/aliqua/ut/enim/ad/minim/veniam/quis/nostrud/exercitation/ullamco/laboris/nisi/ut/aliquip/ex/ea/commodo/consequat/duis/aute/irure/dolor/in/reprehenderit/in/voluptate/velit/esse/cillum/dolore/eu/fugiat/nulla/pariatur/excepteur/sint/occaecat/cupidatat/non/proident/sunt/in/culpa/qui/officia/deserunt/mollit/anim/id/est');
        });
    });

    describe('SET_SENTENCE_CASE', () => {
        it('should return sentence cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_SENTENCE_CASE,
                payload: {
                    newCase: CASES.SENTENCE.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est');
        });
    });

    describe('SET_SNAKE_CASE', () => {
        it('should return snake cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_SNAKE_CASE,
                payload: {
                    newCase: CASES.SNAKE.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lorem_ipsum_dolor_sit_amet_consectetur_adipisicing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua_ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat_duis_aute_irure_dolor_in_reprehenderit_in_voluptate_velit_esse_cillum_dolore_eu_fugiat_nulla_pariatur_excepteur_sint_occaecat_cupidatat_non_proident_sunt_in_culpa_qui_officia_deserunt_mollit_anim_id_est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lorem_ipsum_dolor_sit_amet_consectetur_adipisicing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua_ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat_duis_aute_irure_dolor_in_reprehenderit_in_voluptate_velit_esse_cillum_dolore_eu_fugiat_nulla_pariatur_excepteur_sint_occaecat_cupidatat_non_proident_sunt_in_culpa_qui_officia_deserunt_mollit_anim_id_est');
        });
    });

    describe('SET_SWAP_CASE', () => {
        it('should return swap cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_SWAP_CASE,
                payload: {
                    newCase: CASES.SWAP.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('lOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. uT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. dUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.eXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST.');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('lOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. uT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. dUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.eXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST.');
        });
    });

    describe('SET_TITLE_CASE', () => {
        it('should return title cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_TITLE_CASE,
                payload: {
                    newCase: CASES.TITLE.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est');
        });
    });

    describe('SET_UPPER_CASE', () => {
        it('should return upper cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_UPPER_CASE,
                payload: {
                    newCase: CASES.UPPER.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST.');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST.');
        });
    });

    describe('SET_UPPER_FIRST_CASE', () => {
        it('should return upper first cased current and last cased text', () => {
            const nextState = textReducer(initialState, {
                type: SET_UPPER_FIRST_CASE,
                payload: {
                    newCase: CASES.UPPER_FIRST.name,
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.');
        });
    });

    describe('UPDATE_CURRENT_TEXT', () => {
        it('should update the current text', () => {
            const nextState = textReducer(initialState, {
                type: UPDATE_CURRENT_TEXT,
                payload: {
                    newText
                }
            });

            expect(nextState.copied).toBe(initialState.copied);
            expect(nextState.current).toBe(newText);
            expect(nextState.initial).toBe(initialState.initial);
            expect(nextState.lastCased).toBe(initialState.lastCased);
        });
    });
});
