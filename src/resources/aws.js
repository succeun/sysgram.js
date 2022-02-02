function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		aws: {
			analytics: {
				Analytics: "analytics.png",
				Athena: "athena.png",
				CloudsearchSearchDocuments: "cloudsearch-search-documents.png",
				Cloudsearch: "cloudsearch.png",
				DataLakeResource: "data-lake-resource.png",
				DataPipeline: "data-pipeline.png",
				ElasticsearchService: "elasticsearch-service.png",
				EMRCluster: "emr-cluster.png",
				EMREngineMaprM3: "emr-engine-mapr-m3.png",
				EMREngineMaprM5: "emr-engine-mapr-m5.png",
				EMREngineMaprM7: "emr-engine-mapr-m7.png",
				EMREngine: "emr-engine.png",
				EMRHdfsCluster: "emr-hdfs-cluster.png",
				EMR: "emr.png",
				GlueCrawlers: "glue-crawlers.png",
				GlueDataCatalog: "glue-data-catalog.png",
				Glue: "glue.png",
				KinesisDataAnalytics: "kinesis-data-analytics.png",
				KinesisDataFirehose: "kinesis-data-firehose.png",
				KinesisDataStreams: "kinesis-data-streams.png",
				KinesisVideoStreams: "kinesis-video-streams.png",
				Kinesis: "kinesis.png",
				LakeFormation: "lake-formation.png",
				ManagedStreamingForKafka: "managed-streaming-for-kafka.png",
				Quicksight: "quicksight.png",
				RedshiftDenseComputeNode: "redshift-dense-compute-node.png",
				RedshiftDenseStorageNode: "redshift-dense-storage-node.png",
				Redshift: "redshift.png",
			},
			ar: {
				ArVr: "ar-vr.png",
				Sumerian: "sumerian.png",
			},
			blockchain: {
				BlockchainResource: "blockchain-resource.png",
				Blockchain: "blockchain.png",
				ManagedBlockchain: "managed-blockchain.png",
				QuantumLedgerDatabaseQldb: "quantum-ledger-database-qldb.png",
			},
			business: {
				AlexaForBusiness: "alexa-for-business.png",
				BusinessApplications: "business-applications.png",
				Chime: "chime.png",
				Workmail: "workmail.png",
			},
			compute: {
				ApplicationAutoScaling: "application-auto-scaling.png",
				Batch: "batch.png",
				ComputeOptimizer: "compute-optimizer.png",
				Compute: "compute.png",
				EC2Ami: "ec2-ami.png",
				EC2AutoScaling: "ec2-auto-scaling.png",
				EC2ContainerRegistryImage: "ec2-container-registry-image.png",
				EC2ContainerRegistryRegistry: "ec2-container-registry-registry.png",
				EC2ContainerRegistry: "ec2-container-registry.png",
				EC2ElasticIpAddress: "ec2-elastic-ip-address.png",
				EC2ImageBuilder: "ec2-image-builder.png",
				EC2Instance: "ec2-instance.png",
				EC2Instances: "ec2-instances.png",
				EC2Rescue: "ec2-rescue.png",
				EC2SpotInstance: "ec2-spot-instance.png",
				EC2: "ec2.png",
				ElasticBeanstalkApplication: "elastic-beanstalk-application.png",
				ElasticBeanstalkDeployment: "elastic-beanstalk-deployment.png",
				ElasticBeanstalk: "elastic-beanstalk.png",
				ElasticContainerServiceContainer: "elastic-container-service-container.png",
				ElasticContainerServiceService: "elastic-container-service-service.png",
				ElasticContainerService: "elastic-container-service.png",
				ElasticKubernetesService: "elastic-kubernetes-service.png",
				Fargate: "fargate.png",
				LambdaFunction: "lambda-function.png",
				Lambda: "lambda.png",
				Lightsail: "lightsail.png",
				LocalZones: "local-zones.png",
				Outposts: "outposts.png",
				ServerlessApplicationRepository: "serverless-application-repository.png",
				ThinkboxDeadline: "thinkbox-deadline.png",
				ThinkboxDraft: "thinkbox-draft.png",
				ThinkboxFrost: "thinkbox-frost.png",
				ThinkboxKrakatoa: "thinkbox-krakatoa.png",
				ThinkboxSequoia: "thinkbox-sequoia.png",
				ThinkboxStoke: "thinkbox-stoke.png",
				ThinkboxXmesh: "thinkbox-xmesh.png",
				VmwareCloudOnAWS: "vmware-cloud-on-aws.png",
				Wavelength: "wavelength.png",
			},
			cost: {
				Budgets: "budgets.png",
				CostAndUsageReport: "cost-and-usage-report.png",
				CostExplorer: "cost-explorer.png",
				CostManagement: "cost-management.png",
				ReservedInstanceReporting: "reserved-instance-reporting.png",
				SavingsPlans: "savings-plans.png",
			},
			database: {
				AuroraInstance: "aurora-instance.png",
				Aurora: "aurora.png",
				DatabaseMigrationServiceDatabaseMigrationWorkflow: "database-migration-service-database-migration-workflow.png",
				DatabaseMigrationService: "database-migration-service.png",
				Database: "database.png",
				DocumentdbMongodbCompatibility: "documentdb-mongodb-compatibility.png",
				DynamodbAttribute: "dynamodb-attribute.png",
				DynamodbAttributes: "dynamodb-attributes.png",
				DynamodbDax: "dynamodb-dax.png",
				DynamodbGlobalSecondaryIndex: "dynamodb-global-secondary-index.png",
				DynamodbItem: "dynamodb-item.png",
				DynamodbItems: "dynamodb-items.png",
				DynamodbTable: "dynamodb-table.png",
				Dynamodb: "dynamodb.png",
				ElasticacheCacheNode: "elasticache-cache-node.png",
				ElasticacheForMemcached: "elasticache-for-memcached.png",
				ElasticacheForRedis: "elasticache-for-redis.png",
				Elasticache: "elasticache.png",
				KeyspacesManagedApacheCassandraService: "keyspaces-managed-apache-cassandra-service.png",
				Neptune: "neptune.png",
				QuantumLedgerDatabaseQldb: "quantum-ledger-database-qldb.png",
				RDSInstance: "rds-instance.png",
				RDSMariadbInstance: "rds-mariadb-instance.png",
				RDSMysqlInstance: "rds-mysql-instance.png",
				RDSOnVmware: "rds-on-vmware.png",
				RDSOracleInstance: "rds-oracle-instance.png",
				RDSPostgresqlInstance: "rds-postgresql-instance.png",
				RDSSqlServerInstance: "rds-sql-server-instance.png",
				RDS: "rds.png",
				RedshiftDenseComputeNode: "redshift-dense-compute-node.png",
				RedshiftDenseStorageNode: "redshift-dense-storage-node.png",
				Redshift: "redshift.png",
				Timestream: "timestream.png",
			},
			devtools: {
				CloudDevelopmentKit: "cloud-development-kit.png",
				Cloud9Resource: "cloud9-resource.png",
				Cloud9: "cloud9.png",
				Codebuild: "codebuild.png",
				Codecommit: "codecommit.png",
				Codedeploy: "codedeploy.png",
				Codepipeline: "codepipeline.png",
				Codestar: "codestar.png",
				CommandLineInterface: "command-line-interface.png",
				DeveloperTools: "developer-tools.png",
				ToolsAndSdks: "tools-and-sdks.png",
				XRay: "x-ray.png",
			},
			enablement: {
				CustomerEnablement: "customer-enablement.png",
				Iq: "iq.png",
				ManagedServices: "managed-services.png",
				ProfessionalServices: "professional-services.png",
				Support: "support.png",
			},
			enduser: {
				Appstream20: "appstream-2-0.png",
				DesktopAndAppStreaming: "desktop-and-app-streaming.png",
				Workdocs: "workdocs.png",
				Worklink: "worklink.png",
				Workspaces: "workspaces.png",
			},
			engagement: {
				Connect: "connect.png",
				CustomerEngagement: "customer-engagement.png",
				Pinpoint: "pinpoint.png",
				SimpleEmailServiceSesEmail: "simple-email-service-ses-email.png",
				SimpleEmailServiceSes: "simple-email-service-ses.png",
			},
			game: {
				GameTech: "game-tech.png",
				Gamelift: "gamelift.png",
			},
			general: {
				Client: "client.png",
				Disk: "disk.png",
				Forums: "forums.png",
				General: "general.png",
				GenericDatabase: "generic-database.png",
				GenericFirewall: "generic-firewall.png",
				GenericOfficeBuilding: "generic-office-building.png",
				GenericSamlToken: "generic-saml-token.png",
				GenericSDK: "generic-sdk.png",
				InternetAlt1: "internet-alt1.png",
				InternetAlt2: "internet-alt2.png",
				InternetGateway: "internet-gateway.png",
				Marketplace: "marketplace.png",
				MobileClient: "mobile-client.png",
				Multimedia: "multimedia.png",
				OfficeBuilding: "office-building.png",
				SamlToken: "saml-token.png",
				SDK: "sdk.png",
				SslPadlock: "ssl-padlock.png",
				TapeStorage: "tape-storage.png",
				Toolkit: "toolkit.png",
				TraditionalServer: "traditional-server.png",
				User: "user.png",
				Users: "users.png",
			},
			integration: {
				ApplicationIntegration: "application-integration.png",
				Appsync: "appsync.png",
				ConsoleMobileApplication: "console-mobile-application.png",
				EventResource: "event-resource.png",
				EventbridgeCustomEventBusResource: "eventbridge-custom-event-bus-resource.png",
				EventbridgeDefaultEventBusResource: "eventbridge-default-event-bus-resource.png",
				EventbridgeSaasPartnerEventBusResource: "eventbridge-saas-partner-event-bus-resource.png",
				Eventbridge: "eventbridge.png",
				ExpressWorkflows: "express-workflows.png",
				MQ: "mq.png",
				SimpleNotificationServiceSnsEmailNotification: "simple-notification-service-sns-email-notification.png",
				SimpleNotificationServiceSnsHttpNotification: "simple-notification-service-sns-http-notification.png",
				SimpleNotificationServiceSnsTopic: "simple-notification-service-sns-topic.png",
				SimpleNotificationServiceSns: "simple-notification-service-sns.png",
				SimpleQueueServiceSqsMessage: "simple-queue-service-sqs-message.png",
				SimpleQueueServiceSqsQueue: "simple-queue-service-sqs-queue.png",
				SimpleQueueServiceSqs: "simple-queue-service-sqs.png",
				StepFunctions: "step-functions.png",
			},
			iot: {
				Freertos: "freertos.png",
				InternetOfThings: "internet-of-things.png",
				Iot1Click: "iot-1-click.png",
				IotAction: "iot-action.png",
				IotActuator: "iot-actuator.png",
				IotAlexaEcho: "iot-alexa-echo.png",
				IotAlexaEnabledDevice: "iot-alexa-enabled-device.png",
				IotAlexaSkill: "iot-alexa-skill.png",
				IotAlexaVoiceService: "iot-alexa-voice-service.png",
				IotAnalyticsChannel: "iot-analytics-channel.png",
				IotAnalyticsDataSet: "iot-analytics-data-set.png",
				IotAnalyticsDataStore: "iot-analytics-data-store.png",
				IotAnalyticsNotebook: "iot-analytics-notebook.png",
				IotAnalyticsPipeline: "iot-analytics-pipeline.png",
				IotAnalytics: "iot-analytics.png",
				IotBank: "iot-bank.png",
				IotBicycle: "iot-bicycle.png",
				IotButton: "iot-button.png",
				IotCamera: "iot-camera.png",
				IotCar: "iot-car.png",
				IotCart: "iot-cart.png",
				IotCertificate: "iot-certificate.png",
				IotCoffeePot: "iot-coffee-pot.png",
				IotCore: "iot-core.png",
				IotDesiredState: "iot-desired-state.png",
				IotDeviceDefender: "iot-device-defender.png",
				IotDeviceGateway: "iot-device-gateway.png",
				IotDeviceManagement: "iot-device-management.png",
				IotDoorLock: "iot-door-lock.png",
				IotEvents: "iot-events.png",
				IotFactory: "iot-factory.png",
				IotFireTvStick: "iot-fire-tv-stick.png",
				IotFireTv: "iot-fire-tv.png",
				IotGeneric: "iot-generic.png",
				IotGreengrassConnector: "iot-greengrass-connector.png",
				IotGreengrass: "iot-greengrass.png",
				IotHardwareBoard: "iot-hardware-board.png",
				IotHouse: "iot-house.png",
				IotHttp: "iot-http.png",
				IotHttp2: "iot-http2.png",
				IotJobs: "iot-jobs.png",
				IotLambda: "iot-lambda.png",
				IotLightbulb: "iot-lightbulb.png",
				IotMedicalEmergency: "iot-medical-emergency.png",
				IotMqtt: "iot-mqtt.png",
				IotOverTheAirUpdate: "iot-over-the-air-update.png",
				IotPolicyEmergency: "iot-policy-emergency.png",
				IotPolicy: "iot-policy.png",
				IotReportedState: "iot-reported-state.png",
				IotRule: "iot-rule.png",
				IotSensor: "iot-sensor.png",
				IotServo: "iot-servo.png",
				IotShadow: "iot-shadow.png",
				IotSimulator: "iot-simulator.png",
				IotSitewise: "iot-sitewise.png",
				IotThermostat: "iot-thermostat.png",
				IotThingsGraph: "iot-things-graph.png",
				IotTopic: "iot-topic.png",
				IotTravel: "iot-travel.png",
				IotUtility: "iot-utility.png",
				IotWindfarm: "iot-windfarm.png",
			},
			management: {
				AutoScaling: "auto-scaling.png",
				CloudformationChangeSet: "cloudformation-change-set.png",
				CloudformationStack: "cloudformation-stack.png",
				CloudformationTemplate: "cloudformation-template.png",
				Cloudformation: "cloudformation.png",
				Cloudtrail: "cloudtrail.png",
				CloudwatchAlarm: "cloudwatch-alarm.png",
				CloudwatchEventEventBased: "cloudwatch-event-event-based.png",
				CloudwatchEventTimeBased: "cloudwatch-event-time-based.png",
				CloudwatchRule: "cloudwatch-rule.png",
				Cloudwatch: "cloudwatch.png",
				Codeguru: "codeguru.png",
				CommandLineInterface: "command-line-interface.png",
				Config: "config.png",
				ControlTower: "control-tower.png",
				LicenseManager: "license-manager.png",
				ManagedServices: "managed-services.png",
				ManagementAndGovernance: "management-and-governance.png",
				ManagementConsole: "management-console.png",
				OpsworksApps: "opsworks-apps.png",
				OpsworksDeployments: "opsworks-deployments.png",
				OpsworksInstances: "opsworks-instances.png",
				OpsworksLayers: "opsworks-layers.png",
				OpsworksMonitoring: "opsworks-monitoring.png",
				OpsworksPermissions: "opsworks-permissions.png",
				OpsworksResources: "opsworks-resources.png",
				OpsworksStack: "opsworks-stack.png",
				Opsworks: "opsworks.png",
				OrganizationsAccount: "organizations-account.png",
				OrganizationsOrganizationalUnit: "organizations-organizational-unit.png",
				Organizations: "organizations.png",
				PersonalHealthDashboard: "personal-health-dashboard.png",
				ServiceCatalog: "service-catalog.png",
				SystemsManagerAutomation: "systems-manager-automation.png",
				SystemsManagerDocuments: "systems-manager-documents.png",
				SystemsManagerInventory: "systems-manager-inventory.png",
				SystemsManagerMaintenanceWindows: "systems-manager-maintenance-windows.png",
				SystemsManagerOpscenter: "systems-manager-opscenter.png",
				SystemsManagerParameterStore: "systems-manager-parameter-store.png",
				SystemsManagerPatchManager: "systems-manager-patch-manager.png",
				SystemsManagerRunCommand: "systems-manager-run-command.png",
				SystemsManagerStateManager: "systems-manager-state-manager.png",
				SystemsManager: "systems-manager.png",
				TrustedAdvisorChecklistCost: "trusted-advisor-checklist-cost.png",
				TrustedAdvisorChecklistFaultTolerant: "trusted-advisor-checklist-fault-tolerant.png",
				TrustedAdvisorChecklistPerformance: "trusted-advisor-checklist-performance.png",
				TrustedAdvisorChecklistSecurity: "trusted-advisor-checklist-security.png",
				TrustedAdvisorChecklist: "trusted-advisor-checklist.png",
				TrustedAdvisor: "trusted-advisor.png",
				WellArchitectedTool: "well-architected-tool.png",
			},
			media: {
				ElasticTranscoder: "elastic-transcoder.png",
				ElementalConductor: "elemental-conductor.png",
				ElementalDelta: "elemental-delta.png",
				ElementalLive: "elemental-live.png",
				ElementalMediaconnect: "elemental-mediaconnect.png",
				ElementalMediaconvert: "elemental-mediaconvert.png",
				ElementalMedialive: "elemental-medialive.png",
				ElementalMediapackage: "elemental-mediapackage.png",
				ElementalMediastore: "elemental-mediastore.png",
				ElementalMediatailor: "elemental-mediatailor.png",
				ElementalServer: "elemental-server.png",
				KinesisVideoStreams: "kinesis-video-streams.png",
				MediaServices: "media-services.png",
			},
			migration: {
				ApplicationDiscoveryService: "application-discovery-service.png",
				CloudendureMigration: "cloudendure-migration.png",
				DatabaseMigrationService: "database-migration-service.png",
				DatasyncAgent: "datasync-agent.png",
				Datasync: "datasync.png",
				MigrationAndTransfer: "migration-and-transfer.png",
				MigrationHub: "migration-hub.png",
				ServerMigrationService: "server-migration-service.png",
				SnowballEdge: "snowball-edge.png",
				Snowball: "snowball.png",
				Snowmobile: "snowmobile.png",
				TransferForSftp: "transfer-for-sftp.png",
			},
			ml: {
				ApacheMxnetOnAWS: "apache-mxnet-on-aws.png",
				AugmentedAi: "augmented-ai.png",
				Comprehend: "comprehend.png",
				DeepLearningAmis: "deep-learning-amis.png",
				DeepLearningContainers: "deep-learning-containers.png",
				Deepcomposer: "deepcomposer.png",
				Deeplens: "deeplens.png",
				Deepracer: "deepracer.png",
				ElasticInference: "elastic-inference.png",
				Forecast: "forecast.png",
				FraudDetector: "fraud-detector.png",
				Kendra: "kendra.png",
				Lex: "lex.png",
				MachineLearning: "machine-learning.png",
				Personalize: "personalize.png",
				Polly: "polly.png",
				RekognitionImage: "rekognition-image.png",
				RekognitionVideo: "rekognition-video.png",
				Rekognition: "rekognition.png",
				SagemakerGroundTruth: "sagemaker-ground-truth.png",
				SagemakerModel: "sagemaker-model.png",
				SagemakerNotebook: "sagemaker-notebook.png",
				SagemakerTrainingJob: "sagemaker-training-job.png",
				Sagemaker: "sagemaker.png",
				TensorflowOnAWS: "tensorflow-on-aws.png",
				Textract: "textract.png",
				Transcribe: "transcribe.png",
				Translate: "translate.png",
			},
			mobile: {
				Amplify: "amplify.png",
				APIGatewayEndpoint: "api-gateway-endpoint.png",
				APIGateway: "api-gateway.png",
				Appsync: "appsync.png",
				DeviceFarm: "device-farm.png",
				Mobile: "mobile.png",
				Pinpoint: "pinpoint.png",
			},
			network: {
				APIGatewayEndpoint: "api-gateway-endpoint.png",
				APIGateway: "api-gateway.png",
				AppMesh: "app-mesh.png",
				ClientVpn: "client-vpn.png",
				CloudMap: "cloud-map.png",
				CloudFrontDownloadDistribution: "cloudfront-download-distribution.png",
				CloudFrontEdgeLocation: "cloudfront-edge-location.png",
				CloudFrontStreamingDistribution: "cloudfront-streaming-distribution.png",
				CloudFront: "cloudfront.png",
				DirectConnect: "direct-connect.png",
				ElasticLoadBalancing: "elastic-load-balancing.png",
				ElbApplicationLoadBalancer: "elb-application-load-balancer.png",
				ElbClassicLoadBalancer: "elb-classic-load-balancer.png",
				ElbNetworkLoadBalancer: "elb-network-load-balancer.png",
				Endpoint: "endpoint.png",
				GlobalAccelerator: "global-accelerator.png",
				InternetGateway: "internet-gateway.png",
				Nacl: "nacl.png",
				NATGateway: "nat-gateway.png",
				NetworkingAndContentDelivery: "networking-and-content-delivery.png",
				PrivateSubnet: "private-subnet.png",
				Privatelink: "privatelink.png",
				PublicSubnet: "public-subnet.png",
				Route53HostedZone: "route-53-hosted-zone.png",
				Route53: "route-53.png",
				RouteTable: "route-table.png",
				SiteToSiteVpn: "site-to-site-vpn.png",
				TransitGateway: "transit-gateway.png",
				VPCCustomerGateway: "vpc-customer-gateway.png",
				VPCElasticNetworkAdapter: "vpc-elastic-network-adapter.png",
				VPCElasticNetworkInterface: "vpc-elastic-network-interface.png",
				VPCFlowLogs: "vpc-flow-logs.png",
				VPCPeering: "vpc-peering.png",
				VPCRouter: "vpc-router.png",
				VPCTrafficMirroring: "vpc-traffic-mirroring.png",
				VPC: "vpc.png",
				VpnConnection: "vpn-connection.png",
				VpnGateway: "vpn-gateway.png",
			},
			quantum: {
				Braket: "braket.png",
				QuantumTechnologies: "quantum-technologies.png",
			},
			robotics: {
				RobomakerCloudExtensionRos: "robomaker-cloud-extension-ros.png",
				RobomakerDevelopmentEnvironment: "robomaker-development-environment.png",
				RobomakerFleetManagement: "robomaker-fleet-management.png",
				RobomakerSimulator: "robomaker-simulator.png",
				Robomaker: "robomaker.png",
				Robotics: "robotics.png",
			},
			satellite: {
				GroundStation: "ground-station.png",
				Satellite: "satellite.png",
			},
			security: {
				AdConnector: "ad-connector.png",
				Artifact: "artifact.png",
				CertificateAuthority: "certificate-authority.png",
				CertificateManager: "certificate-manager.png",
				CloudDirectory: "cloud-directory.png",
				Cloudhsm: "cloudhsm.png",
				Cognito: "cognito.png",
				Detective: "detective.png",
				DirectoryService: "directory-service.png",
				FirewallManager: "firewall-manager.png",
				Guardduty: "guardduty.png",
				IdentityAndAccessManagementIamAccessAnalyzer: "identity-and-access-management-iam-access-analyzer.png",
				IdentityAndAccessManagementIamAddOn: "identity-and-access-management-iam-add-on.png",
				IdentityAndAccessManagementIamAWSStsAlternate: "identity-and-access-management-iam-aws-sts-alternate.png",
				IdentityAndAccessManagementIamAWSSts: "identity-and-access-management-iam-aws-sts.png",
				IdentityAndAccessManagementIamDataEncryptionKey: "identity-and-access-management-iam-data-encryption-key.png",
				IdentityAndAccessManagementIamEncryptedData: "identity-and-access-management-iam-encrypted-data.png",
				IdentityAndAccessManagementIamLongTermSecurityCredential: "identity-and-access-management-iam-long-term-security-credential.png",
				IdentityAndAccessManagementIamMfaToken: "identity-and-access-management-iam-mfa-token.png",
				IdentityAndAccessManagementIamPermissions: "identity-and-access-management-iam-permissions.png",
				IdentityAndAccessManagementIamRole: "identity-and-access-management-iam-role.png",
				IdentityAndAccessManagementIamTemporarySecurityCredential: "identity-and-access-management-iam-temporary-security-credential.png",
				IdentityAndAccessManagementIam: "identity-and-access-management-iam.png",
				InspectorAgent: "inspector-agent.png",
				Inspector: "inspector.png",
				KeyManagementService: "key-management-service.png",
				Macie: "macie.png",
				ManagedMicrosoftAd: "managed-microsoft-ad.png",
				ResourceAccessManager: "resource-access-manager.png",
				SecretsManager: "secrets-manager.png",
				SecurityHubFinding: "security-hub-finding.png",
				SecurityHub: "security-hub.png",
				SecurityIdentityAndCompliance: "security-identity-and-compliance.png",
				ShieldAdvanced: "shield-advanced.png",
				Shield: "shield.png",
				SimpleAd: "simple-ad.png",
				SingleSignOn: "single-sign-on.png",
				WAFFilteringRule: "waf-filtering-rule.png",
				WAF: "waf.png",
			},
			storage: {
				Backup: "backup.png",
				CloudendureDisasterRecovery: "cloudendure-disaster-recovery.png",
				EFSInfrequentaccessPrimaryBg: "efs-infrequentaccess-primary-bg.png",
				EFSStandardPrimaryBg: "efs-standard-primary-bg.png",
				ElasticBlockStoreEBSSnapshot: "elastic-block-store-ebs-snapshot.png",
				ElasticBlockStoreEBSVolume: "elastic-block-store-ebs-volume.png",
				ElasticBlockStoreEBS: "elastic-block-store-ebs.png",
				ElasticFileSystemEFSFileSystem: "elastic-file-system-efs-file-system.png",
				ElasticFileSystemEFS: "elastic-file-system-efs.png",
				FsxForLustre: "fsx-for-lustre.png",
				FsxForWindowsFileServer: "fsx-for-windows-file-server.png",
				Fsx: "fsx.png",
				MultipleVolumesResource: "multiple-volumes-resource.png",
				S3GlacierArchive: "s3-glacier-archive.png",
				S3GlacierVault: "s3-glacier-vault.png",
				S3Glacier: "s3-glacier.png",
				SimpleStorageServiceS3BucketWithObjects: "simple-storage-service-s3-bucket-with-objects.png",
				SimpleStorageServiceS3Bucket: "simple-storage-service-s3-bucket.png",
				SimpleStorageServiceS3Object: "simple-storage-service-s3-object.png",
				SimpleStorageServiceS3: "simple-storage-service-s3.png",
				SnowFamilySnowballImportExport: "snow-family-snowball-import-export.png",
				SnowballEdge: "snowball-edge.png",
				Snowball: "snowball.png",
				Snowmobile: "snowmobile.png",
				StorageGatewayCachedVolume: "storage-gateway-cached-volume.png",
				StorageGatewayNonCachedVolume: "storage-gateway-non-cached-volume.png",
				StorageGatewayVirtualTapeLibrary: "storage-gateway-virtual-tape-library.png",
				StorageGateway: "storage-gateway.png",
				Storage: "storage.png",
			},
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"aws": {
			"analytics": {
				"ElasticsearchService": "ES",
			},
			"business": {
				"AlexaForBusiness": "A4B"
			},
			"blockchain": {
				"QuantumLedgerDatabaseQldb": "QLDB"
			},
			"compute": {
				"ApplicationAutoScaling": "AutoScaling",
				"EC2Ami": "AMI",
				"EC2ContainerRegistry": "ECR",
				"ElasticBeanstalk": "EB",
				"ElasticContainerService": "ECS",
				"ElasticKubernetesService": "EKS",
				"ServerlessApplicationRepository": "SAR",
			},
			"database": {
				"DatabaseMigrationService": "DMS",
				"DocumentdbMongodbCompatibility": "DocumentDB",
				"DynamodbDax": "DAX",
				"DynamodbGlobalSecondaryIndex": "DynamodbGSI",
				"Database": "DB",
				"Dynamodb": "DDB",
				"Elasticache": "ElastiCache",
				"QuantumLedgerDatabaseQldb": "QLDB",
			},
			"devtools": {
				"CommandLineInterface": "CLI",
				"DeveloperTools": "DevTools",
			},
			"engagement": {
				"SimpleEmailServiceSes": "SES",
			},
			"general": {
				"GenericOfficeBuilding": "OfficeBuilding",
			},
			"integration": {
				"SimpleNotificationServiceSns": "SNS",
				"SimpleQueueServiceSqs": "SQS",
				"StepFunctions": "SF",
			},
			"iot": {
				"Freertos": "FreeRTOS",
				"IotHardwareBoard": "IotBoard",
			},
			"management": {
				"SystemsManager": "SSM",
				"SystemsManagerParameterStore": "ParameterStore",
			},
			"migration": {
				"ApplicationDiscoveryService": "ADS",
				"CloudendureMigration": "CEM",
				"DatabaseMigrationService": "DMS",
				"MigrationAndTransfer": "MAT",
				"ServerMigrationService": "SMS",
			},
			"ml": {
				"DeepLearningContainers": "DLC",
			},
			"network": {
				"CloudFront": "CF",
				"ElasticLoadBalancing": "ELB",
				"ElbApplicationLoadBalancer": "ALB",
				"ElbClassicLoadBalancer": "CLB",
				"ElbNetworkLoadBalancer": "NLB",
				"GlobalAccelerator": "GAX",
			},
			"security": {
				"CertificateManager": "ACM",
				"Cloudhsm": "CloudHSM",
				"DirectoryService": "DS",
				"FirewallManager": "FMS",
				"IdentityAndAccessManagementIamAccessAnalyzer": "IAMAccessAnalyzer",
				"IdentityAndAccessManagementIamAWSSts": "IAMAWSSts",
				"IdentityAndAccessManagementIamPermissions": "IAMPermissions",
				"IdentityAndAccessManagementIamRole": "IAMRole",
				"IdentityAndAccessManagementIam": "IAM",
				"KeyManagementService": "KMS",
				"ResourceAccessManager": "RAM",
			},
			"storage": {
				"CloudendureDisasterRecovery": "CDR",
				"ElasticBlockStoreEBS": "EBS",
				"ElasticFileSystemEFS": "EFS",
				"Fsx": "FSx",
				"SimpleStorageServiceS3": "S3",
			},
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	function merge(src, node) {
		for (var x in node) {
			var aliase = node[x];
			if (aliase) {
				if (typeof aliase == "string") {
					var obj = src[x];
					if (obj) {
						src[aliase] = obj;
					}
				} else {
					if (src[x]) {
						merge(src[x], node[x]);
					} else {
						src[x] = node[x];
					}
				}
			}
		}
	}
	
	merge(resources, ALIASES);
	
	return resources;
}

export default getResources();

