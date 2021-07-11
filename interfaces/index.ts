// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Lom = {
  name: string,
        version: number,
        head: {
        metadataStandards: string,
        organization: string 
        },
        metadata: {
        characteristics: {
            general: {
                identifier: {
                catalog: string,
                input: string  
                },
                title: string,
                language: string,
                description: string,
                keyword: string,
                coverage: string,
                structure: string,
                levelOfAggregation: string
                },
            lifeCycle: {
                version: number,
                status: string,
                contributors: {
                role: string,
                entity: string,
                date: Date
                }
            },
            metaMetadata: {
                identifier: {
                    catalog: string,
                    input: string  
                },
                contributors: {
                    role: string,
                    entity: string,
                    date: Date
                },
                metadataSchema: string,
                language: string
            },
            techniques: {
                format: string,
                size: string,
                location: string,
                requirements: string,
                comments: string,
                requirementsOtherPlatforms: string,
                duration: string
            },
            educational: {
                typeInteractivity: string,
                typeLearningResource: string,
                levelInteractivity: string,
                semanticDensity: string,
                roleFinalUser: string,
                context: string,
                ageRange: string,
                difficulty: string,
                estimatedLearningTime: string,
                description: string,
                language: string
            },
            rights: {
                cost: string,
                rightOfCopy: string,
                otherRestrictions: string,
                description: string
            },
            relationshipWithOtherResources: {
                type: string,
                resource: {
                    identifier: {
                        catalog: string,
                        input: string,
                        description: string 
                    }  
                }
            },
            observation: {
                entity: string,
                date: Date,
                description: string
            },
            classification: string
            }
        }
}