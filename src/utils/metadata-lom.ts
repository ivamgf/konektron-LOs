// Metadata - LOM
import { Lom } from '../interfaces'

export const metadataLom: Lom[] = [
    {
        name: 'metadado-oas',
        version: 1.0,
        head: {
        metadataStandards: 'LOM',
        organization: 'Institute of Electrical and Electronics. Engineers (IEEE)' 
        },
        metadata: {
        characteristics: {
            general: {
                identifier: {
                catalog: '',
                input: ''  
                },
                title: '',
                language: '',
                description: '',
                keyword: '',
                coverage: '',
                structure: '',
                levelOfAggregation: ''
                },
            lifeCycle: {
                version: 1.0,
                status: '',
                contributors: {
                role: '',
                entity: '',
                date: null
                }
            },
            metaMetadata: {
                identifier: {
                    catalog: '',
                    input: ''  
                },
                contributors: {
                    role: '',
                    entity: '',
                    date: null
                },
                metadataSchema: '',
                language: ''
            },
            techniques: {
                format: '',
                size: '',
                location: '',
                requirements: '',
                comments: '',
                requirementsOtherPlatforms: '',
                duration: ''
            },
            educational: {
                typeInteractivity: '',
                typeLearningResource: '',
                levelInteractivity: '',
                semanticDensity: '',
                roleFinalUser: '',
                context: '',
                ageRange: '',
                difficulty: '',
                estimatedLearningTime: '',
                description: '',
                language: ''
            },
            rights: {
                cost: '',
                rightOfCopy: '',
                otherRestrictions: '',
                description: ''
            },
            relationshipWithOtherResources: {
                type: '',
                resource: {
                    identifier: {
                        catalog: '',
                        input: '',
                        description: ''  
                    }  
                }
            },
            observation: {
                entity: '',
                date: null,
                description: ''
            },
            classification: ''
            }
        }
    }  
]
