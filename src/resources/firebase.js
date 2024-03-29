import util from './util';

function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		firebase: {
			base: {
				Firebase: "firebase.png",
			},
			develop: {
				Authentication: "authentication.png",
				Firestore: "firestore.png",
				Functions: "functions.png",
				Hosting: "hosting.png",
				MLKit: "ml-kit.png",
				RealtimeDatabase: "realtime-database.png",
				Storage: "storage.png",
			},
			extentions: {
				Extensions: "extensions.png",
			},
			grow: {
				ABTesting: "ab-testing.png",
				AppIndexing: "app-indexing.png",
				DynamicLinks: "dynamic-links.png",
				InAppMessaging: "in-app-messaging.png",
				Invites: "invites.png",
				Messaging: "messaging.png",
				Predictions: "predictions.png",
				RemoteConfig: "remote-config.png",
			},
			quality: {
				AppDistribution: "app-distribution.png",
				CrashReporting: "crash-reporting.png",
				Crashlytics: "crashlytics.png",
				PerformanceMonitoring: "performance-monitoring.png",
				TestLab: "test-lab.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		firebase: {
			grow: {
				Messaging: "FCM"
			}
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();


