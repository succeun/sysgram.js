function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		azure: {
			analytics: {
				AnalysisServices: "analysis-services.png",
				DataExplorerClusters: "data-explorer-clusters.png",
				DataFactories: "data-factories.png",
				DataLakeAnalytics: "data-lake-analytics.png",
				DataLakeStoreGen1: "data-lake-store-gen1.png",
				Databricks: "databricks.png",
				EventHubClusters: "event-hub-clusters.png",
				EventHubs: "event-hubs.png",
				Hdinsightclusters: "hdinsightclusters.png",
				LogAnalyticsWorkspaces: "log-analytics-workspaces.png",
				StreamAnalyticsJobs: "stream-analytics-jobs.png",
			},
			compute: {
				AvailabilitySets: "availability-sets.png",
				BatchAccounts: "batch-accounts.png",
				CitrixVirtualDesktopsEssentials: "citrix-virtual-desktops-essentials.png",
				CloudServicesClassic: "cloud-services-classic.png",
				CloudServices: "cloud-services.png",
				CloudsimpleVirtualMachines: "cloudsimple-virtual-machines.png",
				ContainerInstances: "container-instances.png",
				ContainerRegistries: "container-registries.png",
				DiskSnapshots: "disk-snapshots.png",
				Disks: "disks.png",
				FunctionApps: "function-apps.png",
				KubernetesServices: "kubernetes-services.png",
				MeshApplications: "mesh-applications.png",
				SAPHANAOnAzure: "sap-hana-on-azure.png",
				ServiceFabricClusters: "service-fabric-clusters.png",
				VMClassic: "vm-classic.png",
				VMImages: "vm-images.png",
				VMLinux: "vm-linux.png",
				VMScaleSet: "vm-scale-set.png",
				VMWindows: "vm-windows.png",
				VM: "vm.png",
			},
			database: {
				BlobStorage: "blob-storage.png",
				CacheForRedis: "cache-for-redis.png",
				CosmosDb: "cosmos-db.png",
				DataLake: "data-lake.png",
				DatabaseForMariadbServers: "database-for-mariadb-servers.png",
				DatabaseForMysqlServers: "database-for-mysql-servers.png",
				DatabaseForPostgresqlServers: "database-for-postgresql-servers.png",
				ElasticDatabasePools: "elastic-database-pools.png",
				ElasticJobAgents: "elastic-job-agents.png",
				ManagedDatabases: "managed-databases.png",
				SQLDatabases: "sql-databases.png",
				SQLDatawarehouse: "sql-datawarehouse.png",
				SQLManagedInstances: "sql-managed-instances.png",
				SQLServerStretchDatabases: "sql-server-stretch-databases.png",
				SQLServers: "sql-servers.png",
				VirtualClusters: "virtual-clusters.png",
				VirtualDatacenter: "virtual-datacenter.png",
			},
			devops: {
				ApplicationInsights: "application-insights.png",
				Artifacts: "artifacts.png",
				Boards: "boards.png",
				Devops: "devops.png",
				DevtestLabs: "devtest-labs.png",
				Pipelines: "pipelines.png",
				Repos: "repos.png",
				TestPlans: "test-plans.png",
			},
			general: {
				Allresources: "allresources.png",
				Azurehome: "azurehome.png",
				Developertools: "developertools.png",
				Helpsupport: "helpsupport.png",
				Information: "information.png",
				Managementgroups: "managementgroups.png",
				Marketplace: "marketplace.png",
				Quickstartcenter: "quickstartcenter.png",
				Recent: "recent.png",
				Reservations: "reservations.png",
				Resource: "resource.png",
				Resourcegroups: "resourcegroups.png",
				Servicehealth: "servicehealth.png",
				Shareddashboard: "shareddashboard.png",
				Subscriptions: "subscriptions.png",
				Support: "support.png",
				Supportrequests: "supportrequests.png",
				Tag: "tag.png",
				Tags: "tags.png",
				Templates: "templates.png",
				Twousericon: "twousericon.png",
				Userhealthicon: "userhealthicon.png",
				Usericon: "usericon.png",
				Userprivacy: "userprivacy.png",
				Userresource: "userresource.png",
				Whatsnew: "whatsnew.png",
			},
			identity: {
				AccessReview: "access-review.png",
				ActiveDirectoryConnectHealth: "active-directory-connect-health.png",
				ActiveDirectory: "active-directory.png",
				ADB2C: "ad-b2c.png",
				ADDomainServices: "ad-domain-services.png",
				ADIdentityProtection: "ad-identity-protection.png",
				ADPrivilegedIdentityManagement: "ad-privileged-identity-management.png",
				AppRegistrations: "app-registrations.png",
				ConditionalAccess: "conditional-access.png",
				EnterpriseApplications: "enterprise-applications.png",
				IdentityGovernance: "identity-governance.png",
				InformationProtection: "information-protection.png",
				ManagedIdentities: "managed-identities.png",
			},
			integration: {
				APIForFhir: "api-for-fhir.png",
				APIManagement: "api-management.png",
				AppConfiguration: "app-configuration.png",
				DataCatalog: "data-catalog.png",
				EventGridDomains: "event-grid-domains.png",
				EventGridSubscriptions: "event-grid-subscriptions.png",
				EventGridTopics: "event-grid-topics.png",
				IntegrationAccounts: "integration-accounts.png",
				IntegrationServiceEnvironments: "integration-service-environments.png",
				LogicAppsCustomConnector: "logic-apps-custom-connector.png",
				LogicApps: "logic-apps.png",
				SendgridAccounts: "sendgrid-accounts.png",
				ServiceBusRelays: "service-bus-relays.png",
				ServiceBus: "service-bus.png",
				ServiceCatalogManagedApplicationDefinitions: "service-catalog-managed-application-definitions.png",
				SoftwareAsAService: "software-as-a-service.png",
				StorsimpleDeviceManagers: "storsimple-device-managers.png",
			},
			iot: {
				DeviceProvisioningServices: "device-provisioning-services.png",
				DigitalTwins: "digital-twins.png",
				IotCentralApplications: "iot-central-applications.png",
				IotHubSecurity: "iot-hub-security.png",
				IotHub: "iot-hub.png",
				Maps: "maps.png",
				Sphere: "sphere.png",
				TimeSeriesInsightsEnvironments: "time-series-insights-environments.png",
				TimeSeriesInsightsEventsSources: "time-series-insights-events-sources.png",
				Windows10IotCoreServices: "windows-10-iot-core-services.png",
			},
			migration: {
				DatabaseMigrationServices: "database-migration-services.png",
				MigrationProjects: "migration-projects.png",
				RecoveryServicesVaults: "recovery-services-vaults.png",
			},
			ml: {
				BatchAI: "batch-ai.png",
				BotServices: "bot-services.png",
				CognitiveServices: "cognitive-services.png",
				GenomicsAccounts: "genomics-accounts.png",
				MachineLearningServiceWorkspaces: "machine-learning-service-workspaces.png",
				MachineLearningStudioWebServicePlans: "machine-learning-studio-web-service-plans.png",
				MachineLearningStudioWebServices: "machine-learning-studio-web-services.png",
				MachineLearningStudioWorkspaces: "machine-learning-studio-workspaces.png",
			},
			mobile: {
				AppServiceMobile: "app-service-mobile.png",
				MobileEngagement: "mobile-engagement.png",
				NotificationHubs: "notification-hubs.png",
			},
			network: {
				ApplicationGateway: "application-gateway.png",
				ApplicationSecurityGroups: "application-security-groups.png",
				CDNProfiles: "cdn-profiles.png",
				Connections: "connections.png",
				DDOSProtectionPlans: "ddos-protection-plans.png",
				DNSPrivateZones: "dns-private-zones.png",
				DNSZones: "dns-zones.png",
				ExpressrouteCircuits: "expressroute-circuits.png",
				Firewall: "firewall.png",
				FrontDoors: "front-doors.png",
				LoadBalancers: "load-balancers.png",
				LocalNetworkGateways: "local-network-gateways.png",
				NetworkInterfaces: "network-interfaces.png",
				NetworkSecurityGroupsClassic: "network-security-groups-classic.png",
				NetworkWatcher: "network-watcher.png",
				OnPremisesDataGateways: "on-premises-data-gateways.png",
				PublicIpAddresses: "public-ip-addresses.png",
				ReservedIpAddressesClassic: "reserved-ip-addresses-classic.png",
				RouteFilters: "route-filters.png",
				RouteTables: "route-tables.png",
				ServiceEndpointPolicies: "service-endpoint-policies.png",
				Subnets: "subnets.png",
				TrafficManagerProfiles: "traffic-manager-profiles.png",
				VirtualNetworkClassic: "virtual-network-classic.png",
				VirtualNetworkGateways: "virtual-network-gateways.png",
				VirtualNetworks: "virtual-networks.png",
				VirtualWans: "virtual-wans.png",
			},
			security: {
				KeyVaults: "key-vaults.png",
				SecurityCenter: "security-center.png",
				Sentinel: "sentinel.png",
			},
			storage: {
				ArchiveStorage: "archive-storage.png",
				Azurefxtedgefiler: "azurefxtedgefiler.png",
				BlobStorage: "blob-storage.png",
				DataBoxEdgeDataBoxGateway: "data-box-edge---data-box-gateway.png",
				DataBox: "data-box.png",
				DataLakeStorage: "data-lake-storage.png",
				GeneralStorage: "general-storage.png",
				NetappFiles: "netapp-files.png",
				QueuesStorage: "queues-storage.png",
				StorageAccountsClassic: "storage-accounts-classic.png",
				StorageAccounts: "storage-accounts.png",
				StorageExplorer: "storage-explorer.png",
				StorageSyncServices: "storage-sync-services.png",
				StorsimpleDataManagers: "storsimple-data-managers.png",
				StorsimpleDeviceManagers: "storsimple-device-managers.png",
				TableStorage: "table-storage.png",
			},
			web: {
				APIConnections: "api-connections.png",
				AppServiceCertificates: "app-service-certificates.png",
				AppServiceDomains: "app-service-domains.png",
				AppServiceEnvironments: "app-service-environments.png",
				AppServicePlans: "app-service-plans.png",
				AppServices: "app-services.png",
				MediaServices: "media-services.png",
				NotificationHubNamespaces: "notification-hub-namespaces.png",
				Search: "search.png",
				Signalr: "signalr.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"azure": {
			"compute": {
				"ContainerRegistries": "ACR",
				"KubernetesServices": "AKS",
				"VMScaleSet": "VMSS"
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


