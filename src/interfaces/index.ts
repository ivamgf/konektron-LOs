// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { DataLOs } from 'path/to/interfaces';

export type DataLOs = {
  id: number;
  name: string;
  version: string;
  author: string;
  institution: string;
  subject: string;
};

export type Lom = {
  name: string;
  version: number;
  head: {
    metadataStandards: string;
    organization: string;
  };
  metadata: {
    characteristics: {
      general: {
        identifier: {
          catalog: string;
          input: string;
        };
        title: string;
        language: string;
        description: string;
        keyword: string;
        coverage: string;
        structure: string;
        aggregationLevel: string;
      };
      lifeCycle: {
        version: number;
        status: string;
        contribute: {
          role: string;
          entity: string;
          date: Date;
        };
      };
      metaMetadata: {
        identifier: {
          catalog: string;
          input: string;
        };
        contribute: {
          role: string;
          entity: string;
          date: Date;
        };
        metadataSchema: string;
        language: string;
      };
      technical: {
        format: string;
        size: string;
        location: string;
        requirements: {
          orComposite: string;
        };
        installationRemarks: string;
        otherPlatformRequirements: string;
        duration: string;
        supportedPlatform: string;
        platformSpecificFeatures: {
          platformType: string;
          specificFormat: string;
          specifSize: string;
          specificLocation: string;
          specificRequirement: string;
          specificInstallationRemarks: string;
          specificOtherPlatformRequeriments: string;
        };
        service: {
          name: string;
          type: string;
          provides: string;
          essential: string;
          protocol: string;
          ontology: string;
          language: string;
          details: string;
        };
      };
      educational: {
        interactivityType: string;
        learningResourceType: string;
        interactivityLevel: string;
        semanticDensity: string;
        intendedEndUserRole: string;
        context: string;
        typicalAgeRange: string;
        difficulty: string;
        typicalLearningTime: string;
        description: string;
        language: string;
        learningContentType: string;
        interaction: string;
        didaticStrategy: string;
      };
      rights: {
        cost: number;
        copyrightAndOtherRestrictions: string;
        otherRestrictions: string;
        description: string;
      };
      relation: {
        kind: string;
        resource: {
          identifier: {
            catalog: string;
            input: string;
            description: string;
          };
        };
      };
      annotation: {
        entity: string;
        date: Date;
        description: string;
      };
      classification: {
        purpose: string;
        taxonPath: string;
        description: string;
        keyword: string;
      };
      acessibility: {
        hasVisual: string;
        hasAudititory: string;
        hasText: string;
        hasTactile: string;
        earlStatement: string;
        equivalentResource: string;
      };
      segmentInformationTable: {
        segmentList: string;
        segmentGroupList: string;
      };
    };
  };
};
