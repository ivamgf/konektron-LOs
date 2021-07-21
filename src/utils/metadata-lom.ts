// Metadata - LOM
import { Lom } from '../interfaces';

export const metadataLom: Lom[] = [
  {
    name: 'metadado-oas',
    version: 1.0,
    head: {
      metadataStandards: 'LOM',
      organization: 'Institute of Electrical and Electronics. Engineers (IEEE)',
    },
    metadata: {
      characteristics: {
        general: {
          identifier: {
            catalog: '',
            input: '',
          },
          title: '',
          language: '',
          description: '',
          keyword: '',
          coverage: '',
          structure: '',
          aggregationLevel: '',
        },
        lifeCycle: {
          version: 1.0,
          status: '',
          contribute: {
            role: '',
            entity: '',
            date: null,
          },
        },
        metaMetadata: {
          identifier: {
            catalog: '',
            input: '',
          },
          contribute: {
            role: '',
            entity: '',
            date: null,
          },
          metadataSchema: '',
          language: '',
        },
        technical: {
          format: '',
          size: '',
          location: '',
          requirements: {
            orComposite: '',
          },
          installationRemarks: '',
          otherPlatformRequirements: '',
          duration: '',
          supportedPlatform: '',
          platformSpecificFeatures: {
            platformType: '',
            specificFormat: '',
            specifSize: '',
            specificLocation: '',
            specificRequirement: '',
            specificInstallationRemarks: '',
            specificOtherPlatformRequeriments: '',
          },
          service: {
            name: '',
            type: '',
            provides: '',
            essential: '',
            protocol: '',
            ontology: 'OBBA',
            language: 'Portuguese-BR, English',
            details: '',
          },
        },
        educational: {
          interactivityType: '',
          learningResourceType: '',
          interactivityLevel: '',
          semanticDensity: '',
          intendedEndUserRole: '',
          context: '',
          typicalAgeRange: '',
          difficulty: '',
          typicalLearningTime: '',
          description: '',
          language: '',
          learningContentType: '',
          interaction: '',
          didaticStrategy: '',
        },
        rights: {
          cost: null,
          copyrightAndOtherRestrictions: '',
          otherRestrictions: '',
          description: '',
        },
        relation: {
          kind: '',
          resource: {
            identifier: {
              catalog: '',
              input: '',
              description: '',
            },
          },
        },
        annotation: {
          entity: '',
          date: null,
          description: '',
        },
        classification: {
          purpose: '',
          taxonPath: '',
          description: '',
          keyword: '',
        },
        acessibility: {
          hasVisual: '',
          hasAudititory: '',
          hasText: '',
          hasTactile: '',
          earlStatement: '',
          equivalentResource: '',
        },
        segmentInformationTable: {
          segmentList: '',
          segmentGroupList: '',
        },
      },
    },
  },
];
